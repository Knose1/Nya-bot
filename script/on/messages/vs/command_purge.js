exports.execute = (message, isVs, Pfx) => {
    
	try{ Pfx = Pfx.name } catch(e) {}
    
    /*On vas purge car c'est l'enfer*/
    if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name != "nya-bot-vs-log")) && (message.content.indexOf('--suppr') == 0 || message.content.indexOf('--Suppr') == 0 || message.content.indexOf('//suppr') == 0 || message.content.indexOf('//Suppr') == 0 || /**/ message.content.indexOf('--purge') == 0 || message.content.indexOf('--Purge') == 0 || message.content.indexOf('//purge') == 0 || message.content.indexOf('//Purge') == 0) && (message.author.id == botownerid || isMod)) {
        let Nmessage = message;
        let args = message.content.slice('--suppr'.length).trim().split(/ +/g);
        /*if (Pfx == 'nsfw') {
            message.author.send('Tu ne peux pas purge le nsfw');
            message.delete(1000)
                .then(msg => Nya.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                .catch(Nya.error);
            return true;
        }*/
        if (args.length == 1) {
            if (String(Number(args[0])) != 'NaN') {
                if ( message.author.id != botownerid && (Number(args[0]) < 1 || Number(args[0]) > 10)) {
                    message.author.send('Nan mais wtf pk tu veux purge un tel nombre de message ! -.-');
                    message.delete(1000)
                        .then(msg => Nya.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                        .catch(Nya.error);
                    return true;
                } else if (message.author.id == botownerid && (Number(args[0]) < 1 || Number(args[0]) > 49)) {
                    message.author.send('Nan mais wtf pk tu veux purge un tel nombre de message ! -.-');
                    message.delete(1000)
                        .then(msg => Nya.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                        .catch(Nya.error);
                    return true;
                }
                let i = Number(args[0]);
                
                var all_vs = new Array();
                client.guilds.forEach(guild => {
			        //Pour chaque channel
            
                    guild.channels.forEach(channel => {
                        //On regarde s'il se nome nya-bot-vs + préfix (sans log serv)
                        if (channel.name == "nya-bot-vs"+Pfx || channel.name == "nya-bot-vs-"+Pfx) 
                            all_vs.push(channel); 
                
                    });
                });
                
                all_vs.forEach(ch => {
                    if (ch.type == 'text')
                        ch.fetchMessages({limite:100}).then(m => {
                            var a = 0
                            m.filterArray(p => p.author.id == client.user.id && p.embeds.length > 0).forEach(p => {
                                a += 1;
                                if (a <= i)
                                    try {p.delete(500)} catch (err) {}
                            });
                        });
                });
                
                client.channels.get('414179723720130560').send(`${Nmessage.author.username}#${Nmessage.author.discriminator} à utilisé **--purge** dans le channel ${message.channel.name}: '${Nmessage.content}'`);
            } else {
                message.author.send(`__Error, vous n'avez pas entré de nombre; **Utilisation --suppr** :__\n\n \`//suppr <nombre>\` \n\n alias: \`//purge <nombre>\``);
            }
        } else {
            message.author.send(`__Utilisation **--suppr**:__\n\n \`//suppr <nombre>\` \n\n alias: \`//purge <nombre>\``);
        }
        message.delete(1000)
            .then(msg => Nya.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
            .catch(Nya.error);
            
    return true;
    } else return false;
    /*Fin de purge*/

}
