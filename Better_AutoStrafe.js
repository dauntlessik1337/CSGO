/* Script made by Dauntlessik */
/* Discord: Dauntlessik#0001 */

const gui = require("./storage/ui.js");
gui.AddSubTab(["Config"], "Autostrafer");
const speed = gui.AddSliderInt("Config", "Autostrafer", "Autostrafer", "Speed", 0, 500);

function draw() {
    gui.SetValue("Misc.", "Movement", "General", "Turn speed", UI.GetValue(speed))
}

Cheat.RegisterCallback("Draw", "draw");