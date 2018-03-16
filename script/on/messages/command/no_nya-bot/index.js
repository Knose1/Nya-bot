exports.execute = () => {

    var perm_check = new check_perm(["MANAGE_CHANNELS","MANAGE_WEBHOOKS"], message);
    var nya_check = new check_perm(["MANAGE_WEBHOOKS"], message, client.user);
    
    perm_check.check().then( perm => {
        nya_check.check().then( nyaPerm => {
            
            if (!nyaPerm) {
                message.channel.send("Sorry I don't have the permission MANAGE_WEBHOOKS for this channel").then( m => m.delete(6000) )
                return
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
        })
        .catch(err => message.channel.send(util.inspect(err), {split:true}));
    })
    .catch(err => message.channel.send(util.inspect(err), {split:true}));

    
}
