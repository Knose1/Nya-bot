exports.execute = () => {
    
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    
    /*
        permissions = options.permissions;
        message = options.message;
        Fauthor = options.author;
        Fguild = options.guild;
        Fchannel = options.channel;
    */
    
    var options_pch = {
        permissions: ["MANAGE_CHANNELS","MANAGE_WEBHOOKS"],
        message: message,
    }
    var options_nyach = {
        permissions: ["MANAGE_WEBHOOKS"],
        message: message,
        author: client.user
    }
    var perm_check = check_perm(options_pch);
    var perm_nyach = check_perm(options_nyach);
    
    perm_nyach().then( nya => {
        if (!nya) {
            message.channel.send("Sorry I don't have the permissions MANAGE_WEBHOOKS.").then(m => m.delete(6000));
        }
        perm_check().then( perm => {
            
            if (perm && nya) {
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
            
            } else if (!perm) {
                message.channel.send( String(message.user) + "\n Sorry you don't have the permissions MANAGE_CHANNELS and MANAGE_WEBHOOKS.").then(m => m.delete(6000));
            }
        })
    })
}
