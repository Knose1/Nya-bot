exports.execute = (message) => {
    
    var vsExecuted = false;
    
    //On execute suffix.js pour récupérer le suffix du channel nya-bot-vs
    require("./suffix.js").then( () => {
    
        //On execute isbanned.js pour savoir s'il est ban ou non
        require("./isbanned.js").then( () => {
        
            //On passe aux conditions (soit on execute ... soit ... etc etc):
            
            if (require("./error_userBan.js").execute() ) vsExecuted = true; 
            else if (require("./error_command.js").execute()  ) vsExecuted = true;
            else if (require("./error_noPfix.js").execute() ) vsExecuted = true;
            else if (require("./command_nya.js").execute()  ) vsExecuted = true;
            else if (require("./command_purge.js").execute()    ) vsExecuted = true;
            else if (require("./command_ban.js").execute()  ) vsExecuted = true;
            else if (require("./command_unban.js").execute()  ) vsExecuted = true;
            else if (require("./finaly.js").execute()   ) vsExecuted = true;
            
        });
    });
    
    return vsExecuted;
}
