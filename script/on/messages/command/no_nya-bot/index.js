exports.execute = () => {

    //On check les permissions
    let check_perm = (permissions, mms) => {
        
        let prms = new Promise(function(resolve, reject) {
            
            if (Array.isArray(permissions)) {
                
                if (message == undefined && mms == undefined) {
                
                    reject( new Error("message is not defined, please define mms at check_perm(permission, mms)") );
                    return;
                    
                } else if (mms != undefined) {
                    const message = mms;
                    try {
                        //On test si message est un vrai message
                        var testtest = (message.author.lastMessage.guild.owner
                        && message.channel.send
                        && message.autor.id
                        && message.guild.ownerID);
                        
                    } catch (err) {
                        reject( new Error("mms isn't a real message") );
                        return;
                    }
                    if (!testtest) {
                        reject( new Error("mms isn't a real message") );
                        return;
                    }
                }
                try {
                    message.guild.member(message.author).hasPermissions(permissions)
                
                } catch (err) {
                    if (message.autor.id != message.guild.ownerID) {
                        message.channel.send("Sorry I don't have the permission to check permissions.").delete(6000);
                    } else
                        resolve(true);
                }
              
                    
            } else {
                reject( new Error('permissions is not an Array') );
            }
        });
        
        return prms
    }
    
    

    if (NoNyaWebhooks) {
        
    }
}
