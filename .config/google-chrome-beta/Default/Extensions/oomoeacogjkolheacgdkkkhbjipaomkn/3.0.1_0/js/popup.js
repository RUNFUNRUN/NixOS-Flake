import { CommonUtils } from "./CommonUtils.js";
import { TimerList } from "./UI/TimerList.js";
const extId = chrome.runtime.id;
class PopupPage {
    currTabId;
    lstTimer = document.querySelector(".list-timer");
    pnlCover = document.querySelector(".page-cover");
    lblNextReload = document.querySelector(".lbl-next-reload");
    lblNextReloadTime = document.querySelector(".lbl-next-reload-time");
    selectingTimer;
    async init() {
        TimerList.register();
        this.initRateUs();
        document.body.loc();
        try {
            chrome.runtime.onMessage.addListener((...params) => this.onMessage(...params));
            this.currTabId = (await CommonUtils.getCurrTabAsync()).id;
            if (!this.currTabId) {
                throw new Error("No tab");
            }
            const injResult = await new Promise(r => chrome.runtime.sendMessage({
                op: "injectScript",
                tabId: this.currTabId,
            }, r));
            if (injResult?.error) {
                throw new Error(injResult.error);
            }
            const info = await new Promise(r => {
                chrome.tabs.sendMessage(this.currTabId, {
                    op: "getTimerInfo",
                }, r);
            });
            await this.lstTimer.initAsync();
            this.lstTimer.setSelection(info.enabled, info.interval, info.isCustom);
            this.lstTimer.addEventListener("request-timer", (ev) => this.selectingTimer = ev.detail);
            document.querySelector(".btn-apply")?.addEventListener("click", () => {
                const curr = this.selectingTimer;
                if (!curr) {
                    return;
                }
                this.onTimerRequested(curr.seconds, curr.isCustom);
            });
            this.setCover(false);
        }
        catch (e) {
            console.error(e);
            this.setCover(true, "Inject_Error".loc());
        }
    }
    onMessage(message, sender, _) {
        if (sender?.id != extId) {
            return;
        }
        switch (message.op) {
            case "timer-info":
                if (sender.tab?.id != this.currTabId) {
                    return;
                }
                this.lblNextReload.setDisplay(message.enabled);
                this.lblNextReloadTime.textContent = CommonUtils.formatSecond((message.next - Date.now()) / 1000);
        }
    }
    async onTimerRequested(seconds, isCustom) {
        CommonUtils.sendTimerRequest(this.currTabId, {
            enabled: seconds > 0,
            interval: seconds * 1000,
            isCustom: isCustom,
        });
    }
    initRateUs() {
        const updateUrl = chrome.runtime.getManifest().update_url?.toLowerCase();
        const id = chrome.runtime.id;
        const storeUrl = (updateUrl && updateUrl.includes("microsoft")) ?
            `https://microsoftedge.microsoft.com/addons/detail/` + id :
            "https://chrome.google.com/webstore/detail/" + id;
        document.querySelectorAll(".btn-rate").forEach(el => el.setAttribute("href", storeUrl));
    }
    setCover(show, content = "") {
        this.pnlCover.setDisplay(show);
        this.pnlCover.innerHTML = content;
    }
}
new PopupPage().init();
//# sourceMappingURL=popup.js.map