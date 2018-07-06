exports.execute = () => {
    
    message.channel.fetchWebhooks().then(fw => {
        
        try {
        
        if (fw.find('name', 'NoNya!Bot') != undefined)
            NoNyaWebhooks = true;
        else
            NoNyaWebhooks = false;
        } catch (e) {
            NoNyaWebhooks = false;
        }
            
        var options_pch2 = {
            permissions: ["MANAGE_CHANNELS","MANAGE_WEBHOOKS"],
            message: message,
        }
        
        check_perm(options_pch2)().then(pprm => {
            
            //Si ce n'est pas le nya!bot , qu'il n'as pas les perms et que le webhook est activé : Bang Bang ! Tu ne poourra pas acceder à la commande
            if (NoNyaWebhooks && !pprm && !(message.author.id == client.user.id) )
                return;

                messDefault()            
            
            
            
            
        }); //Fin promise (Permissions)
    }) //Fin promise Webhook
    .catch(e => {messDefault()})
}
