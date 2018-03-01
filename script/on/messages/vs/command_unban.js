exports.execute = (message, isVs, isbanned) => {

    /*DEBUT DU UNBAN*/
    
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--unban') == 0 || message.content.indexOf('--Unban') == 0 || message.content.indexOf('//unban') == 0 || message.content.indexOf('//Unban') == 0) && (message.author == botowner || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase(); //On retire le "unban" en début de commande
        
        var guild = client.guilds.get('406926403628695556');
        // On regarde pour chaque argument
        var stop = 0;
        args.forEach(id => {
            if (stop == 0) {
                var undefvar = 0;
                var isgood = false;
                var foundedOne = 0;
                //Si la personne à mis 2 fois le même ID en arg
                args.forEach( id2 => {
                    if (id == id2 && foundedOne == 0) {
                        foundedOne = 1;
                    }
                    else if (id == id2 && foundedOne == 1 && stop == 0) {
                        message.author.send('Impossible d\'executer la commande `--unban`: un argument à été trouvé en __doublon__');
                        stop = 1;
                        return true;
                    }
                });
                //On regarde si la personne existe
                client.users.forEach(user => {
                    if (user.id == id) {
                        isgood = true
                    }
                });
            
                if (isgood == true && stop == 0) {
                
                    isgood = false;
                    vsban.forEach(banned => {
                    
                        //On regarde si la personne est dans la liste de ban
                        if (id == banned) {
                            isgood = true;
                        }
                    });
                } else if (stop == 0) {
                    message.author.send(`L' id '${id}'est introuvable`);
                    var undefvar = 1;
                }
                if (isgood == true && stop == 0) {
                    //On regarde si les conditions pour unban la personnes (qui est ban) sont ok:
                    
                        //Si la personne esseille de s'unban lui-même
                            if (id == message.author.id) {
                                message.author.send('Vous ne pouvez pas vous unban vous-même');
                                isgood = false;
                            }
                
                            //Si l'utilisateur est un modérateur mais que ce n'est pas l'owner du bot
                            else if (message.author != botowner && isMod) {
                
                                var banIsMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(id);
                
                                //Si l'utilisateur esseille de unban l'owner
                                if ("<@"+id+">" == botowner) {
                                    message.author.send('L\'owner du nya!bot ne peux ni être ban ni être unban\'');
                                    isgood = false;
                                }
                                //Si l'utilisateur esseille de unban un modérateur
                                else if (undefined != banIsMod) {
                                    message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est un modérateur du nya!bot, vous ne pouvez pas l\'unban');
                                    isgood = false;
                                }
                            }
                    /*Fin de conditions de unban*/
                } else if (undefvar == 0 && stop == 0) {
                    var user = client.users.get(id);
                    message.author.send(`${user.username}#${user.discriminator} n'est pas ban`);
                }
			    
                if (client.users.get(id) != undefined && isgood == true && stop == 0) {
                    //console.log("id = "+id);
                    //console.log(client.users.get(id));
                    guild.roles.find('name', id).delete()
                        //.then(r => console.log(`Deleted role ${r}`))
                        .catch(console.error);
                    
    				var unbanuser = client.users.get(id);
                    var channel = client.channels.get('407169845889597440');
                    channel.send('Personne unbaned du VS: '+unbanuser.username+"#"+unbanuser.discriminator+" ("+id+")");
                }
            }
        });
	    message.delete(500)
                    .then(msg => console.log(`Message supprimé, raison: Unban Virtual channel; Auteur: ${msg.author}`))
                    .catch(console.error);
        return true;
    } else return false;
    /*Fin du UNBAN*/


}
