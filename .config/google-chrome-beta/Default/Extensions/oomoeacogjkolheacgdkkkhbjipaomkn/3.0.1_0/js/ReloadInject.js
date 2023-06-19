"use strict";
(() => {
    const _this = globalThis;
    if (_this.ReloadInject) {
        return;
    }
    _this.ReloadInject = class {
        enabled = false;
        interval = 0;
        nextReload = 0;
        isCustom = false;
        extId = chrome.runtime.id;
        init() {
            chrome.runtime.onMessage.addListener((...params) => this.onMessage(...params));
            this.sendTimerInfo();
            window.setInterval(() => this.onTick(), 1000);
        }
        onTick() {
            if (!this.enabled) {
                return;
            }
            if (Date.now() >= this.nextReload) {
                chrome.runtime.sendMessage({
                    op: "reload",
                    interval: this.interval,
                });
            }
            this.sendTimerInfo();
        }
        onMessage(message, sender, sendRes) {
            console.log(message);
            if (!message || !message.op || sender.id != this.extId) {
                return;
            }
            switch (message.op) {
                case "setTimer":
                    this.enabled = message.enabled;
                    this.interval = message.interval;
                    this.isCustom = message.isCustom;
                    this.resetTimer();
                    break;
                case "getTimerInfo":
                    const info = this.sendTimerInfo();
                    sendRes?.(info);
                    return true;
            }
        }
        resetTimer() {
            if (this.enabled) {
                this.nextReload = Date.now() + this.interval;
            }
            this.sendTimerInfo();
        }
        sendTimerInfo() {
            const response = {
                op: "timer-info",
                enabled: this.enabled,
                next: this.enabled ? this.nextReload : null,
                interval: this.interval,
                isCustom: this.isCustom,
            };
            void chrome.runtime.sendMessage(response);
            return response;
        }
    };
    new _this.ReloadInject().init();
})();
//# sourceMappingURL=ReloadInject.js.map