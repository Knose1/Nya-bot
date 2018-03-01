exports.execute = (message) => {
    
    var vsExecuted = false;
    
    //On passe aux conditions (soit on execute ... soit ... etc etc):
            
    if (require("./error_userBan.js").execute() ) vsExecuted = true; 
    else if (require("./error_command.js").execute()  ) vsExecuted = true;
    else if (require("./error_noPfix.js").execute() ) vsExecuted = true;
    else if (require("./command_nya.js").execute()  ) vsExecuted = true;
    else if (require("./command_purge.js").execute()    ) vsExecuted = true;
    else if (require("./command_ban.js").execute()  ) vsExecuted = true;
    else if (require("./command_unban.js").execute()  ) vsExecuted = true;
    else if (require("./finaly.js").execute()   ) vsExecuted = true;
    
    return vsExecuted;
}
