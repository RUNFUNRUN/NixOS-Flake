import { CommonUtils } from "./CommonUtils.js";
import { WelcomePage } from "./welcome.js";
class BackgroundPage {
    extId = chrome.runtime.id;
    expectingTabPromises = {};
    initialize() {
        new WelcomePage();
        chrome.tabs.onUpdated.addListener((tabId, changeInfo) => this.onTabUpdated(tabId, changeInfo));
        chrome.runtime.onMessage.addListener((...params) => this.onMessage(...params));
    }
    onTabUpdated(tabId, changeInfo) {
        if (changeInfo.status == "complete") {
            const promise = this.expectingTabPromises[tabId.toString()];
            if (promise) {
                promise();
                delete this.expectingTabPromises[tabId.toString()];
            }
        }
    }
    onMessage(message, sender, sendRes) {
        if (!message || !message.op || sender.id != this.extId) {
            return;
        }
        switch (message.op) {
            case "injectScript":
                void this.injectScriptAsync(message.tabId, sendRes);
                return true;
            case "timer-info":
                if (!sender.tab?.id) {
                    return;
                }
                void this.setBadge(sender.tab.id, message.next);
                break;
            case "reload":
                if (!sender.tab?.id) {
                    return;
                }
                void this.reloadAsync(sender.tab.id, message.interval, message.isCustom);
                break;
        }
    }
    async reloadAsync(tabId, interval, isCustom) {
        await this.performReloadAndWaitAsync(tabId);
        await this.injectScriptAsync(tabId);
        CommonUtils.sendTimerRequest(tabId, {
            enabled: true,
            interval,
            isCustom,
        });
    }
    async performReloadAndWaitAsync(tabId) {
        const promise = new Promise(r => this.expectingTabPromises[tabId.toString()] = r);
        await chrome.tabs.reload(tabId);
        await promise;
    }
    async injectScriptAsync(tabId, sendRes) {
        try {
            if (!tabId) {
                const tab = await CommonUtils.getCurrTabAsync();
                tabId = tab?.id;
            }
            if (!tabId) {
                return;
            }
            await chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                },
                files: ["/js/ReloadInject.js"]
            });
            sendRes?.();
        }
        catch (e) {
            sendRes?.({ error: e });
        }
    }
    async setBadge(tabId, nextReload) {
        let text = "";
        if (nextReload) {
            const remainingTime = Math.max(0, nextReload - Date.now());
            text = CommonUtils.formatNumberBadge(remainingTime / 1000);
        }
        await chrome.action.setBadgeText({
            tabId: tabId,
            text,
        });
    }
}
new BackgroundPage().initialize();
//# sourceMappingURL=background.js.map