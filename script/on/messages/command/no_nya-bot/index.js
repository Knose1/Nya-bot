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
                    var x = message.guild.member(message.author).hasPermissions(permissions);
                    resolve(x);
                
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
    
    check_perm(["MANAGE_CHANNELS","MANAGE_WEBHOOKS"]).then( perm => {
        if (perm) {
            if (NoNyaWebhooks) {
                message.channel.fetchWebhooks()
                    .then(FW => {
                        FW.find('name', 'NoNya!Bot').delete(`Removed by ${message.author.tag}`)
                            .then( message.channel.send("Webhook \"NoNya!Bot\" removed !").delete(6000) );
                    })
                    .catch( message.channel.send("Sorry I don't have the permission MANAGE_WEBHOOKS for this channel").delete(6000) );
            } else {
                message.channel.createWebhook("NoNya!Bot",null,`Added by ${message.author.tag}`)
                    .then( message.channel.send("Webhook \"NoNya!Bot\" added !").delete(6000) )
                    .catch( message.channel.send("Sorry I don't have the permission MANAGE_WEBHOOKS for this channel").delete(6000) );
            }
            
        } else {
            message.channel.reply("Sorry you don't have the permissions MANAGE_CHANNELS and MANAGE_WEBHOOKS.").delete(6000);
        }
    });

    
}
