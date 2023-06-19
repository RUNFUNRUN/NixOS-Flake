import { settings } from "./Services/SettingsService.js";
import { windowService } from "./Services/WindowService.js";
import { generateDisplayState } from "./UI/StateRenderer.js";
class PopupPage {
    lstStates = document.querySelector(".list-states");
    chkDistribute = document.querySelector("#chk-distribute");
    cboSinglePolicy = document.querySelector(".cbo-single-policy");
    currSettings;
    async init() {
        this.initRateUs();
        const values = this.currSettings = await settings.getAsync();
        this.chkDistribute.checked = values.distributeTab;
        this.isSinglePolicyPrimary = values.singleScreenPrimary;
        await this.showStatesAsync(values.states);
        document.body.loc();
        this.lstStates.addDelegate("click", ".display-state", (_, el) => this.onStateClicked(el));
        this.chkDistribute.addEventListener("change", () => this.onDistributeChanged());
        this.cboSinglePolicy.addEventListener("change", () => this.onSinglePolicyChanged());
        document.querySelector(".btn-identify").addClick(() => this.onIdentifyRequested());
    }
    async onIdentifyRequested() {
        await windowService.showIdentifiersAsync();
    }
    async onDistributeChanged() {
        this.currSettings.distributeTab = this.chkDistribute.checked;
        await settings.setAsync(this.currSettings);
    }
    async onSinglePolicyChanged() {
        this.currSettings.singleScreenPrimary = this.isSinglePolicyPrimary;
        await settings.setAsync(this.currSettings);
    }
    async showStatesAsync(states) {
        const frag = new DocumentFragment();
        for (let state of states) {
            frag.appendChild(generateDisplayState(state));
        }
        this.lstStates.setContent(frag, true);
    }
    async onStateClicked(stateEl) {
        const state = stateEl.state;
        await windowService.arrangeAsync(state, this.chkDistribute.checked, this.isSinglePolicyPrimary);
    }
    initRateUs() {
        const updateUrl = chrome.runtime.getManifest().update_url?.toLowerCase();
        const id = chrome.runtime.id;
        const storeUrl = (updateUrl && updateUrl.includes("microsoft")) ?
            `https://microsoftedge.microsoft.com/addons/detail/` + id :
            "https://chrome.google.com/webstore/detail/" + id;
        document.querySelectorAll(".btn-rate").forEach(el => el.setAttribute("href", storeUrl));
    }
    get isSinglePolicyPrimary() {
        return this.cboSinglePolicy.value == "Primary";
    }
    set isSinglePolicyPrimary(value) {
        this.cboSinglePolicy.value = value ? "Primary" : "Current";
    }
}
new PopupPage().init();
//# sourceMappingURL=popup.js.map