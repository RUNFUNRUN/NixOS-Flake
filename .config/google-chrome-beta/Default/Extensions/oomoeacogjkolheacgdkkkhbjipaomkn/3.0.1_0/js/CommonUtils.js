const badgeUnits = ["s", "m", "h", "d"];
const badgeUnitsMultipliers = [1, 60, 3600, 86400];
export class CommonUtils {
    static formatNumberBadge(seconds) {
        if (seconds < 1) {
            return "0s";
        }
        let unitIndex = 0;
        let value = 0;
        for (let i = badgeUnits.length - 1; i >= 0; i--) {
            if (seconds >= badgeUnitsMultipliers[i]) {
                unitIndex = i;
                value = Math.floor(seconds / badgeUnitsMultipliers[i]);
                break;
            }
        }
        const finalNumText = value > 999 ? "" : Math.floor(value).toString();
        return finalNumText + badgeUnits[unitIndex];
    }
    static sendTimerRequest(tabId, req) {
        return chrome.tabs.sendMessage(tabId, {
            op: "setTimer",
            ...req
        });
    }
    static async getCurrTabAsync() {
        return (await chrome.tabs.query({
            active: true,
            currentWindow: true,
        }))[0];
    }
    static formatSecond(seconds) {
        seconds = Math.max(0, Math.floor(seconds));
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        const min = Math.floor(seconds / 60);
        seconds -= min * 60;
        const sec = Math.floor(seconds);
        return (hours > 0 ? this.padding(hours) + "h " : "") +
            `${this.padding(min)}m ${this.padding(sec)}s`;
    }
    static padding(num) {
        return num > 9 ? num.toString() : "0" + num;
    }
}
//# sourceMappingURL=CommonUtils.js.map