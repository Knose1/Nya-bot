exports.execute = () => {

    //Commande GUILDI
        if (message.author == botowner) {
            var guild = client.guilds.get(args[0]);
            if (guild) {
                if (guild.available) {
                    
                    var options_nyach = {
                        permissions: ["CREATE_INSTANT_INVITE"],
                        message: message,
                        guild: guild,
                        author: client.user
                    }
                    var perm_nyach = new check_perm(options_nyach);
                    
                    perm_nyach.check().then(nnya => {
                        if (nnya) {
                        
                            guild.fetchInvites().then(invites => {
                                if (invites.size > 0) {
                                    message.author.send(`__**Invite for the server ${guild.name}:**__\n${String(invites.first())}`);
                                } else {
                                    message.author.send('No invite for the server '+ guild.name);
                                }
                            });
                        } else message.author.send(`I don't have CREATE_INSTANT_INVITE in "${guild.name}"`)
                    }).catch(console.error);
                } else message.author.send(`${args[0]} is unavailable`);
            } else message.author.send(`${args[0]} is not a guild`);
        }

}
