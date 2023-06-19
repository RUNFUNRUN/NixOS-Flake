import { getDefaultDualScreenSettings, getDefaultSingleScreenSettings } from "../../config-default.js";
import { screenService } from "./ScreenService.js";
const StorageKey = "ExtSettings";
const StorageArea = chrome.storage.local;
class SettingsService {
    async getAsync() {
        const storage = await StorageArea.get(StorageKey);
        var result = storage[StorageKey] || await this.getDefaultSettingsAsync();
        result.states = await this.generateDefaultScreenStates();
        return result;
    }
    async setAsync(settings) {
        const obj = {};
        obj[StorageKey] = settings;
        await StorageArea.set(obj);
    }
    async clearAsync() {
        StorageArea.remove(StorageKey);
    }
    async getDefaultSettingsAsync() {
        const result = {
            states: await this.generateDefaultScreenStates(),
            distributeTab: false,
            singleScreenPrimary: false,
        };
        await this.setAsync(result);
        return result;
    }
    async generateDefaultScreenStates() {
        const bigPortion = .6;
        const smallPortion = 1 - bigPortion;
        if (await screenService.hasDualOrMoreAsync()) {
            return getDefaultDualScreenSettings();
        }
        else {
            return getDefaultSingleScreenSettings();
        }
    }
    generateSingleScreen(windows, name) {
        return {
            name,
            screens: [
                {
                    windows,
                }
            ]
        };
    }
    generateDualScreen(firstWindows, secondWindows, name) {
        return {
            name,
            screens: [
                {
                    windows: firstWindows,
                },
                {
                    windows: secondWindows,
                }
            ]
        };
    }
}
export const settings = new SettingsService();
//# sourceMappingURL=SettingsService.js.map