exports.execute = (message, isVs, Pfx) => {

    if (!message.author.bot && (isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--status') == 0 || message.content.indexOf('--Status') == 0 || message.content.indexOf('//status') == 0 || message.content.indexOf('//Status') == 0) ) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase(); //on retire "status" (ps: le ToLowerCase est un peu de trops)
        
        var allNya = client.channels.filter(f => {return (f.name == "nya-bot-vs-" + Pfx.name || f.name == "nya-bot-vs" && Pfx.name == "") && f.type == "text" && f.name != "nya-bot-vs-log"})
        
        if (args[0]) {
            vsStatus[message.author.id] = args.join(" ")
            
            if (message.author == botowner)
                client.channels.get('461052318532763666').setTopic(args.join(" "))
            
            //On créer l'embed
            
            var nbmois = new Date().getMonth();
            nbmois = nbmois+1;
            const embed = new Discord.RichEmbed()
                //.setTitle("Virtual Channel")
                .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
                .setColor("#FFFFFF")
                .setDescription("__Status:__\n\n" + args.join(" "))
                .setFooter("Le "+ UTCDate(Pfx.UTC).getDate()+"/"+ nbmois+"/"+ UTCDate(Pfx.UTC).getFullYear()+" à "+ UTCDate(Pfx.UTC).toLocaleTimeString()+` (UTC+${Pfx.UTC}) | `+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
                .setThumbnail(message.author.avatarURL);
                
            allNya.forEach( n => n.send({embed}).then(d => d.delete(20000)) )
                
        } else {
            if (message.author == botowner && client.channels.get('461052318532763666').topic != "461052318532763666" && client.channels.get('461052318532763666').topic != null) {
                
                if (!vsStatus[message.author.id] && client.channels.get('461052318532763666').topic != "461052318532763666" && client.channels.get('461052318532763666').topic != null)
                    vsStatus[message.author.id] = client.channels.get('461052318532763666').topic;
                else {
                    message.delete(500)
                    .then(msg => Nya.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
                    .catch(Nya.error);
                
                    return true
                }
                client.channels.get('461052318532763666').setTopic("461052318532763666");
                
            } else if (!vsStatus[message.author.id]) {
                message.delete(500)
                    .then(msg => Nya.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
                    .catch(Nya.error);
                
                return true
            }
            var oldVsStatus = vsStatus[message.author.id];
            vsStatus[message.author.id] = undefined
        
            //On créer l'embed
            
            var nbmois = new Date().getMonth();
            nbmois = nbmois+1;
            const embed = new Discord.RichEmbed()
                //.setTitle("Virtual Channel")
                .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
                .setColor("#FFFFFF")
                .setDescription(`Has no more the status "${oldVsStatus}"`)
                .setFooter("Le "+ UTCDate(Pfx.UTC).getDate()+"/"+ nbmois+"/"+ UTCDate(Pfx.UTC).getFullYear()+" à "+ UTCDate(Pfx.UTC).toLocaleTimeString()+` (UTC+${Pfx.UTC}) | `+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
                .setThumbnail(message.author.avatarURL);
            
            allNya.forEach( n => n.send({embed}).then(d => d.delete(20000)) )
        }
        message.delete(500)
            .then(msg => Nya.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
            .catch(Nya.error);
        return true;
    }
    else
        return false;
}
