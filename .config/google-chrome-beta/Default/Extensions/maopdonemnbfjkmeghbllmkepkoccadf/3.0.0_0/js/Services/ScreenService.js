class ScreenService {
    async getMonitorsAsync() {
        return await chrome.system.display.getInfo();
    }
    async hasDualOrMoreAsync() {
        return (await this.getMonitorsAsync()).length > 1;
    }
}
export const screenService = new ScreenService();
//# sourceMappingURL=ScreenService.js.map