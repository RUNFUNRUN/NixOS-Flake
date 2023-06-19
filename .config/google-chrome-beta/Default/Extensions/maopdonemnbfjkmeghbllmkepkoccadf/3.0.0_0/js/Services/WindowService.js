import { screenService } from "./ScreenService.js";
const BorderSize = 8;
class WindowService {
    async arrangeAsync(state, distribute, singleScreenPrimary) {
        const activeWins = await chrome.windows.getAll({
            populate: true,
        });
        const allWinSettings = state.screens.flatMap(q => q.windows);
        if (activeWins.length < allWinSettings.length) {
            const newWindows = await this.createMissingWindowsAsync(allWinSettings.length - activeWins.length);
            activeWins.push(...newWindows);
        }
        const monitors = await this.getMonitorListAsync(state.screens.length == 1, singleScreenPrimary);
        const monitorCount = monitors.length;
        let monitorIndex = 0;
        let winIndex = 0;
        const updatePromises = [];
        for (const screenSetting of state.screens) {
            const monitor = monitors[monitorIndex];
            const monArea = monitor.workArea;
            for (const winSetting of screenSetting.windows) {
                const win = activeWins[winIndex];
                winIndex++;
                updatePromises.push(this.updateWinAsync(win, monArea, winSetting));
            }
            monitorIndex = (monitorIndex + 1) % monitorCount;
        }
        updatePromises.push(this.minimizeWindowsAsync(activeWins, allWinSettings.length));
        await Promise.allSettled(updatePromises);
        if (!distribute) {
            return;
        }
    }
    async minimizeWindowsAsync(wins, from) {
        if (from >= wins.length) {
            return;
        }
        const promises = [];
        for (let i = from; i < wins.length; i++) {
            promises.push(chrome.windows.update(wins[i].id, {
                state: "minimized",
            }));
        }
        await Promise.allSettled(promises);
    }
    async updateWinAsync(window, monArea, winSetting) {
        await chrome.windows.update(window.id, {
            left: Math.floor(winSetting[0] * monArea.width + monArea.left - BorderSize),
            top: Math.floor(winSetting[1] * monArea.height + monArea.top - BorderSize),
            width: Math.floor(winSetting[2] * monArea.width + BorderSize * 2),
            height: Math.floor(winSetting[3] * monArea.height + BorderSize * 2),
            state: "normal",
        });
        const shouldBeMax = winSetting[2] == 1 && winSetting[3] == 1;
        if (shouldBeMax) {
            await chrome.windows.update(window.id, {
                state: "maximized",
            });
        }
    }
    async showIdentifiersAsync() {
        const screens = await screenService.getMonitorsAsync();
        const promises = [];
        for (let i = 0; i < screens.length; i++) {
            const screen = screens[i];
            const area = screen.workArea;
            const isPrimary = screen.isPrimary;
            const url = `/identify.html?no=${i + 1}${isPrimary ? "&primary=true" : ""}`;
            promises.push(chrome.windows.create({
                type: "popup",
                left: area.left - BorderSize,
                top: area.top - BorderSize,
                width: area.width + BorderSize * 2,
                height: area.height + BorderSize * 2,
                url,
            }));
        }
        const windows = await Promise.allSettled(promises);
        await globalThis.sleepAsync(3000);
        for (let win of windows) {
            const winId = win.value.id;
            (async () => {
                try {
                    await chrome.windows.remove(winId);
                }
                catch (e) {
                    if (!e.message.includes("No window")) {
                        console.error(e);
                    }
                }
            })();
        }
    }
    async getMonitorListAsync(isSingleDisplay, singleScreenPrimary) {
        const monitors = await screenService.getMonitorsAsync();
        if (isSingleDisplay) {
            return [(singleScreenPrimary ?
                    (monitors.find(q => q.isPrimary) || monitors[0]) :
                    await this.getActiveMonitorAsync(monitors))];
        }
        else {
            return monitors;
        }
    }
    async getActiveMonitorAsync(monitors) {
        const currWin = await chrome.windows.getCurrent();
        const l = currWin.left + BorderSize, t = currWin.top + BorderSize;
        for (let monitor of monitors) {
            const a = monitor.workArea;
            if (l >= a.left && l <= a.left + a.width &&
                t >= a.top && t <= a.top + a.height) {
                return monitor;
            }
        }
        return monitors.find(q => q.isPrimary) || monitors[0];
    }
    async createMissingWindowsAsync(count) {
        const promises = [];
        for (let i = 0; i < count; i++) {
            promises.push(chrome.windows.create({}));
        }
        return await Promise.all(promises);
    }
}
export const windowService = new WindowService();
//# sourceMappingURL=WindowService.js.map