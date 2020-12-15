var variables = {
    recharge_time: Globals.Curtime() + 1,
    rage_target: -1,
    time_since_shot: -1,
    wasnt_dting: false
}
function trying_dt() {
    return UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Double tap"]) && UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "General", "Double tap"]) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])
}
function trying_hs() {
    return UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Hide shots"]) && UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "General", "Hide shots"]) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])
}
function rage_fire() {
    if (!trying_dt())
        return
    variables.rage_target = Event.GetInt("target_index")
}
function weapon_fire() {
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer())
        return

    var info = Entity.GetCCSWeaponInfo(Entity.GetLocalPlayer())
    variables.recharge_time = Globals.Curtime() + info.cycle_time / 2
    variables.time_since_shot = Globals.Curtime()
}
function cm() {
    if (!trying_dt()) {
        variables.wasnt_dting = true
        Exploit.EnableRecharge()
        return
    }
    if (variables.wasnt_dting) {
        variables.wasnt_dting = false
        variables.recharge_time = Globals.Curtime()
    }
    Exploit.DisableRecharge()
    var charge = Exploit.GetCharge()
    var time = Globals.Curtime()
    var bullet = []
    if (variables.rage_target != -1) {
        var pos = Entity.GetHitboxPosition(variables.rage_target, 3)
        bullet = Trace.Bullet(Entity.GetLocalPlayer(), variables.rage_target, Entity.GetEyePosition(Entity.GetLocalPlayer()), pos)
        if (bullet && bullet.length > 0) {
            var dmg = bullet[1]
            if (dmg > 0)
                return
        }
    }
    if (time > variables.recharge_time && (variables.rage_target == -1 || !Entity.IsAlive(variables.rage_target) || Entity.IsDormant(variables.rage_target) || Globals.Curtime() - variables.time_since_shot > 1)) {
        variables.time_since_shot = Infinity
        variables.rage_target = -1
        Exploit.Recharge()
        if (charge == 1) {
            variables.recharge_time = Infinity
        }
    }
}
function round_start() {
    variables.recharge_time = Globals.Curtime()
}
function unload() {
    Exploit.EnableRecharge()
}

Cheat.RegisterCallback("Unload", "unload")
Cheat.RegisterCallback("round_start", "round_start")
Cheat.RegisterCallback("CreateMove", "cm")
Cheat.RegisterCallback("ragebot_fire", "rage_fire")
Cheat.RegisterCallback("weapon_fire", "weapon_fire")