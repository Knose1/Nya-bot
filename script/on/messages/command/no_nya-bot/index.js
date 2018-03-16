exports.execute = () => {

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
        permissions: ["MANAGE_CHANNELS","MANAGE_WEBHOOKS"],
        message: message,
        author: client.user
    }
    var perm_check = new check_perm(options_pch);
    var perm_nyach = new check_perm(options_nyach);
    
    perm_nyach.check().then( nya => {
        if (!nya) {
            message.channel.send("Sorry I don't have the permissions MANAGE_WEBHOOKS.");
            return;
        }
        perm_check.check().then( perm => {
            
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
}
