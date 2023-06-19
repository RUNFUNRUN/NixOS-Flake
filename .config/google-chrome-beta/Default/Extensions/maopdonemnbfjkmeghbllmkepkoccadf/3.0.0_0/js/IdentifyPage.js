class IdentifyPage {
    init() {
        const query = new URLSearchParams(window.location.search);
        const no = query.get("no");
        const primary = query.get("primary") == "true";
        if (!no) {
            window.close();
            return;
        }
        document.querySelector(".screen-primary").setDisplay(primary);
        document.querySelector(".screen-number").textContent = no;
        document.body.loc();
    }
}
new IdentifyPage().init();
//# sourceMappingURL=IdentifyPage.js.map