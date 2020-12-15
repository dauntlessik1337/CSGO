UI.AddHotkey(["Rage", "Anti Aim", "General", "Key assignment"], "Legit AA", "Legit AA");

function legitAA() {
    var weapon = Entity.GetWeapon(Entity.GetLocalPlayer());
    var e = UserCMD.GetButtons();
    if (weapon != null && Entity.GetClassName(weapon) == "CC4") return;
    if (localplayer_index = Entity.GetLocalPlayer(), 1 == UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Legit AA"], "Legit AA")
        && 1 == UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"])) UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0),
            UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 180), UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 0), AntiAim.SetOverride(1), AntiAim.SetFakeOffset(0), AntiAim.SetRealOffset(-60), AntiAim.SetLBYOffset(120);
    else if (1 == UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Legit AA"], "Legit AA")) {
        UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0), UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 180), UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 0), AntiAim.SetOverride(1), AntiAim.SetFakeOffset(0), AntiAim.SetRealOffset(60), AntiAim.SetLBYOffset(-120)
    } else UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 1), UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 0),
        UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 1)
}
Cheat.RegisterCallback("CreateMove", "legitaa");