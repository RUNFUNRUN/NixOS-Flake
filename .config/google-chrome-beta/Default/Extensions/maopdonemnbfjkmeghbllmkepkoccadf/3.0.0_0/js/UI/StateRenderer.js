export function generateDisplayState(state) {
    const stateEl = document.createElement("div");
    stateEl.className = "display-state";
    stateEl.state = state;
    const stateContentEl = stateEl.createElement("div");
    stateContentEl.className = "state-content";
    for (let screen of state.screens) {
        const screenEl = stateContentEl.createElement("div");
        screenEl.className = "monitor";
        const screenContentEl = screenEl.createElement("div");
        screenContentEl.className = "monitor-content";
        for (let win of screen.windows) {
            const winEl = screenContentEl.createElement("div");
            winEl.className = "window";
            winEl.style.left = win[0] * 100 + "%";
            winEl.style.top = win[1] * 100 + "%";
            winEl.style.width = win[2] * 100 + "%";
            winEl.style.height = win[3] * 100 + "%";
        }
    }
    return stateEl;
}
//# sourceMappingURL=StateRenderer.js.map