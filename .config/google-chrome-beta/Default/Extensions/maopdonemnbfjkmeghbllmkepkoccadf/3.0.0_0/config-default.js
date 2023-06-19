const bigPortion = .6;
const smallPortion = 1 - bigPortion;
export function getDefaultSingleScreenSettings() {
    return [
        generateSingleScreen([[0, 0, .5, 1], [.5, 0, .5, 1],], "Half & Half"),
        generateSingleScreen([[0, 0, bigPortion, 1], [bigPortion, 0, smallPortion, 1],], "Big & Small"),
        generateSingleScreen([[0, 0, smallPortion, 1], [smallPortion, 0, bigPortion, 1],], "Small & Big"),
        generateSingleScreen([
            [0, 0, .5, .5], [.5, 0, .5, .5],
            [0, .5, .5, .5], [.5, .5, .5, .5],
        ], "The Four"),
        generateSingleScreen([
            [0, 0, 1, .5],
            [0, .5, .5, .5], [.5, .5, .5, .5],
        ], "Heads Up"),
        generateSingleScreen([
            [0, 0, .5, .5], [.5, 0, .5, .5],
            [0, .5, 1, .5],
        ], "Heads Down"),
    ];
}
export function getDefaultDualScreenSettings() {
    return [
        generateSingleScreen([[0, 0, .5, 1], [.5, 0, .5, 1],], "Half & Half"),
        generateSingleScreen([[0, 0, bigPortion, 1], [bigPortion, 0, smallPortion, 1],], "Big & Small"),
        generateDualScreen([[0, 0, 1, 1],], [[0, 0, 1, 1],], "One & One"),
        generateDualScreen([
            [0, 0, .5, 1], [.5, 0, .5, 1],
        ], [
            [0, 0, .5, 1], [.5, 0, .5, 1],
        ], "The Four"),
        generateSingleScreen([
            [0, 0, .5, .5], [.5, 0, .5, .5],
            [0, .5, .5, .5], [.5, .5, .5, .5],
        ], "Compacted Four"),
        generateSingleScreen([
            [0, 0, 1, .5],
            [0, .5, .5, .5], [.5, .5, .5, .5],
        ], "Heads Up"),
        generateDualScreen([
            [0, 0, 1, 1]
        ], [
            [0, 0, .5, 1], [.5, 0, .5, 1],
        ], "Secondary Sides"),
        generateDualScreen([
            [0, 0, .5, 1], [.5, 0, .5, 1],
        ], [
            [0, 0, 1, 1]
        ], "Reversed Secondary Sides"),
    ];
}
function generateSingleScreen(windows, name) {
    return {
        name,
        screens: [
            {
                windows,
            }
        ]
    };
}
function generateDualScreen(firstWindows, secondWindows, name) {
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
//# sourceMappingURL=config-default.js.map