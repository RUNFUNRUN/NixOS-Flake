import { CommonUtils } from "../CommonUtils.js";
const DefaultTime = [5, 10, 30, 45, 60, 300, 600, 1800];
const CustomStorageKey = "CustomTime";
export class TimerList extends HTMLElement {
    frmCustom;
    txtCustom;
    async initAsync() {
        const itemTemplate = this.querySelector(".template-timer").innerHTML;
        const frag = new DocumentFragment();
        {
            const row = itemTemplate.toElement();
            row.setAttribute("data-seconds", "0");
            row.seconds = 0;
            row.setChildContent(".value", "NoReload".loc());
            frag.appendChild(row);
        }
        for (let time of DefaultTime) {
            const row = itemTemplate.toElement();
            row.seconds = time;
            row.setAttribute("data-seconds", time.toString());
            frag.appendChild(row);
            row.setChildContent(".value", CommonUtils.formatSecond(time));
        }
        {
            const customRow = itemTemplate.toElement();
            customRow.setAttribute("data-seconds", "custom");
            frag.appendChild(customRow);
            const customInput = this.querySelector(".template-custom-input").innerHTML.toElement();
            customRow.querySelector(".value").appendChild(customInput);
            this.txtCustom = [
                customInput.querySelector(".txt-min"),
                customInput.querySelector(".txt-sec"),
            ];
        }
        this.setContent(frag);
        await this.setCustomSecondAsync();
        this.frmCustom = this.querySelector(".frm-custom");
        this.frmCustom.addEventListener("submit", e => this.onFormSubmit(e));
        this.addDelegate("click", ".item-timer", (_, el) => this.onRowSelected(el));
    }
    setSelection(enabled, interval, isCustom) {
        const seconds = Math.floor(interval / 1000);
        const attrValue = enabled ?
            (isCustom ? "custom" : seconds.toString()) :
            "0";
        const rowEl = this.querySelector(`[data-seconds='${attrValue}']`);
        this.setActive(rowEl);
        if (isCustom) {
            void this.setCustomSecondAsync(seconds);
        }
    }
    async onRowSelected(el) {
        if (this.isActive(el)) {
            return;
        }
        let second = el.seconds;
        if (second === undefined) {
            return;
        }
        await this.activateRowAsync(el);
    }
    onFormSubmit(ev) {
        ev.preventDefault();
        void this.activateRowAsync(this.frmCustom?.closest(".item-timer"), true);
    }
    async activateRowAsync(rowEl, force = false) {
        if (!force && this.isActive(rowEl)) {
            return;
        }
        let isCustom = false;
        let seconds = rowEl.seconds;
        if (seconds === undefined) {
            seconds = await this.getCustomSecondAsync();
            isCustom = true;
        }
        this.setActive(rowEl);
        this.dispatchEvent(new CustomEvent("request-timer", {
            bubbles: true,
            cancelable: true,
            detail: {
                seconds,
                isCustom,
            },
        }));
    }
    setActive(rowEl) {
        this.querySelector(".active-mark:not(.invisible)")?.setVisible(false);
        rowEl.querySelector(".active-mark")?.setVisible(true);
    }
    isActive(rowEl) {
        return Boolean(rowEl.querySelector(`.active-mark:not(.invisible)`));
    }
    async getCustomSecondAsync() {
        if (!this.txtCustom) {
            return 0;
        }
        const min = Math.max(0, Number(this.txtCustom[0].value) || 0);
        const sec = Math.min(59, Math.max(0, Number(this.txtCustom[1].value) || 0));
        const result = (min * 60 + sec) || 25;
        chrome.storage.local.set({
            [CustomStorageKey]: result,
        });
        return result;
    }
    async setCustomSecondAsync(forceSecond) {
        if (!this.txtCustom) {
            return;
        }
        const second = forceSecond ??
            (await chrome.storage.local.get(CustomStorageKey))[CustomStorageKey] ??
            25;
        const min = Math.floor(second / 60);
        const sec = Math.floor(second - min * 60);
        this.txtCustom[0].value = min.toString();
        this.txtCustom[1].value = sec.toString();
    }
    static register() {
        customElements.define("list-timer", this);
    }
}
//# sourceMappingURL=TimerList.js.map