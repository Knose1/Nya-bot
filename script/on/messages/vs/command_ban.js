exports.execute = () => {

    /*ON VAS BAN DES GENS !!! */
    
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--ban') == 0 || message.content.indexOf('--Ban') == 0 || message.content.indexOf('//ban') == 0 || message.content.indexOf('//Ban') == 0) && (message.author == botowner || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase();
        var guild = client.guilds.get('406926403628695556');
        // On regarde pour chaque argument
        var stop = 0;
        args.forEach(id => {
            if (stop == 0) {
                var isgood = false;
                var foundedOne = 0;
                //Si la personne à mis 2 fois le même ID en arg
                args.forEach( id2 => {
                    if (id == id2 && foundedOne == 0) {
                        foundedOne = 1;
                    }
                    else if (id == id2 && foundedOne == 1 && stop == 0) {
                        message.author.send('Impossible d\'executer la commande `--ban`: un argument à été trouvé en __doublon__');
                        stop = 1;
                        return true;
                    }
                });
                //On regarde si la personne existe
                client.users.forEach(user => {
                    if (user.id == id && stop == 0) {
                        isgood = true;
                    }
                });
            
                if (isgood == true) {
                    //Si la personne est déjà ban
                    vsban.forEach(banned => {
            
                        //Si la personne est déja ban
                        if (id == banned) {
                            message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+' est déja ban');
                            isgood = false;
                        }
                    });
                } else if (stop == 0) {
                    message.author.send(`L'id  \`${id}\`  est introuvable`);
                }
            
                if (isgood == true) {
                    //On regarde si les conditions pour ban la personnes (qui n'est pas ban) sont ok:

                        //Si la personne esseille de se ban lui-même
                            if (id == message.author.id) {
                                message.author.send('Vous ne pouvez pas vous ban vous-même');
                                isgood = false;
                            }
                        
                            //Si l'utilisateur est un modérateur mais que ce n'est pas l'owner du bot
                            else if (message.author != botowner && isMod) {
                                
                                var banIsMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(id);
                                
                                //Si l'utilisateur esseille de ban l'owner
                                if ("<@"+id+">" == botowner) {
                                    message.author.send('L\'owner du nya!bot ne peux ni être ban ni être unban\'');
                                    isgood = false;
                                }
                                //Si l'utilisateur esseille de ban un modérateur
                                else if (banIsMod) {
                                    message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est un modérateur du nya!bot, vous ne pouvez pas le ban');
                                    isgood = false;
                                }
                            }
                    /*Fin de conditions de ban*/
                }
			
                if (client.users.get(id) != undefined && isgood == true && stop == 0) {
                    //console.log("id = "+id);
                    //console.log(client.users.get(id));
                    guild.createRole({
                        name: id,
                    })
                    //.then(role => console.log(`Created role ${role}`))
                    .catch(console.error);
                    var banuser = client.users.get(id);
                    var channel = client.channels.get('407169845889597440');
                    channel.send('Personne banni du VS: '+banuser.username+"#"+banuser.discriminator+" ("+id+")");
                }
            }
        });
	    message.delete(500)
                    .then(msg => console.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
                    .catch(console.error);
    return true;
    } else return false;
    /*Fin du BAN*/

}
