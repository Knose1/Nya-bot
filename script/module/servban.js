exports.load = () => {
//Faux serveurs dans la DB
    client.guilds.get('410520625728323595').roles.forEach( gBan => {
        if (
            gBan.name == '377892426569744387' || /*Log serv*/
            gBan.name == '406926403628695556' || /*Nya!bot ban*/
            gBan.name == '410520625728323595' || /*Nya!bot ban serv*/
            gBan.name == '407142766674575361' || /*Nya!bot database*/
            gBan.name == '375434568980758528' || /*Mon serveur*/
            gBan.name == '375434568980758528' || /*La théière*/
            (NaN == Number(gBan.name) && gBan.name != "Nya!Bot" && gBan.name != "new role" && gBan.name != "@everyone")
            ){
					
                gBan.delete()
                    .then(r => {
                        console.log(`Deleted role ${r}; Raison: 'Ban interdit ou serveur inexistant'`);
                        client.channels.get('410520814920794133').send(`Deleted role \`${r.name}\`; __**Raison:**__ 'Ban interdit ou serveur inexistant'`);
                    })
                    .catch(console.error);
        }
    });
    
    //Serveur banni
        client.guilds.forEach(guild => {
            client.guilds.get('410520625728323595').roles.forEach( gBan => {
                if (
                        gBan.name == '377892426569744387' || /*Log serv*/
                        gBan.name == '406926403628695556' || /*Nya!bot ban*/
                        gBan.name == '410520625728323595' || /*Nya!bot ban serv*/
                        gBan.name == '407142766674575361' || /*Nya!bot database*/
                        gBan.name == '375434568980758528' || /*Mon serveur*/
                        gBan.name == '375434568980758528' || /*La théière*/
                        (undefined == client.guilds.get(gBan.name) && gBan.name != "Nya!Bot" && gBan.name != "@everyone" && undefined != client.guilds.get('410520625728323595').roles.get(gBan.id))
                   ){
                }
                else if (guild.available && guild.id == gBan.name && undefined != client.guilds.get('410520625728323595').roles.get(gBan.id) && undefined != client.guilds.get(gBan.name)) {
                    guild.leave()
                        .then(g => {
                            console.log(`Left the guild ${g.name}; Raison: 'Ban'`);
                            client.channels.get('410520814920794133').send(`Left the guild \`${g.name}\`; __**Raison:**__ 'Ban'`);
                            })
                        .catch(console.error);
                }
            });
        });
    
    //Fin de serveur banni
}
