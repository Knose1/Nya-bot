exports.execute = () => {

    //On check les permissions
    let check_perm = (permissions, mms, Fauthor, Fguild, Fchannel) => {
        
        let prms = new Promise(function(resolve, reject) {
            
            if (Array.isArray(permissions)) {
                
                if (message == undefined && mms == undefined) {
                
                    reject( new Error("message is not defined, please define mms at check_perm(permission, author, mms)") );
                    return;
                    
                } else if (mms != undefined) {
                    const message = mms;
                    try {
                        //On test si message est un vrai message
                        var testtest = (
                            message.author.lastMessage.guild.owner
                            && message.channel.send
                            && message.autor.id
                            && message.guild.ownerID
                        );
                        
                    } catch (err) {
                        reject( new Error("mms isn't a real message") );
                        return;
                    }
                    if (!testtest) {
                        reject( new Error("mms isn't a real message") );
                        return;
                    }
                }
                if (Fauthor == undefined)
                    Fauthor = message.autor;
                
                if (Fguild == undefined)
                    Fguild = message.guild;
                if (Fchannel == undefined)
                    Fchannel = message.channel;
                if (Fchannel.type != "text") {
                    reject( new Error("Fchannel is not a textual channel") );
                    return;
                }
                
                try {
                    var x = Fguild.member(Fauthor).hasPermissions(permissions);
                    
                    var y = Fchannel.permissionsFor(Fauthor).has(permissions);
                    resolve(new Boolean(x && y));
                
                } catch (err) {
                    if (message.autor.id != message.guild.ownerID) {
                        message.channel.send("Sorry I don't have the permission to check permissions.").then(m => m.delete(6000));
                        reject(new Error("permission MANAGE_WEBHOOKS denied to the bot"));
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
        check_perm(["MANAGE_WEBHOOKS"],message, client.user).then( nyaPerm => {
            
            if (!nyaPerm) {
                message.channel.send("Sorry I don't have the permission MANAGE_WEBHOOKS for this channel").then( m => m.delete(6000) )
            }
            
            if (perm) {
                if (NoNyaWebhooks) {
                    message.channel.fetchWebhooks()
                        .then(FW => {
                            FW.find('name', 'NoNya!Bot').delete(`Removed by ${message.author.tag}`)
                                .then( message.channel.send("Webhook \"NoNya!Bot\" removed !").then(m => m.delete(6000)) );
                        })
                } else {
                    message.channel.createWebhook("NoNya!Bot",null,`Added by ${message.author.tag}`)
                        .then( message.channel.send("Webhook \"NoNya!Bot\" added !").then(m => m.delete(6000)) );
                }
            
            } else {
                message.channel.reply("Sorry you don't have the permissions MANAGE_CHANNELS and MANAGE_WEBHOOKS.").then(m => m.delete(6000));
            }
        });
    });

    
}
