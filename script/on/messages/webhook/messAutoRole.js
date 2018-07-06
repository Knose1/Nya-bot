exports.execute= () => {
    
    
    
    message.channel.fetchWebhooks().then(fw => {
        try {
        
        if (fw.filter( f => f.name.indexOf('messAutoRole ') == 0 && message.guild.roles.exists('id', f.name.slice('messAutoRole'.length)) ).length > 0) {
            fw.filter( f => f.name.indexOf('messAutoRole ') == 0 && message.guild.roles.exists('id', f.name.slice('messAutoRole'.length)) ).forEach(role => {
                message.guild.member(message.author).addRole(role, "Autorole").catch(e => message.channel.send("I don't have MANAGE_ROLES permission"))
            });
            message.delete(100)
        
        }
            
        } catch(e) {}    
            
            
        
    }) //Fin promise Webhook
    
}
