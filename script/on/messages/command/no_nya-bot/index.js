exports.execute = () => {

    check_perm(["MANAGE_CHANNELS","MANAGE_WEBHOOKS"], message).then( perm => {
        check_perm(["MANAGE_WEBHOOKS"], message, client.user).then( nyaPerm => {
            
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
        })
        .catch(err => message.channel.send(util.inspect(err), {split:true}));
    })
    .catch(err => message.channel.send(util.inspect(err), {split:true}));

    
}
