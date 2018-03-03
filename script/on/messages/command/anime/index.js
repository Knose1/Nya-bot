exports.execute = () => {
    
    if (args.length != 0)
        args[0] = args[0].toLowerCase();
    
    if (args.length == 0) {
        var randAnime = Math.floor(Math.random() * listAnime.length);
        var anime = listAnime[randAnime];
        
        var embedfr = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription("__Synopsis:__ \n" + anime.story_fr)
            .setColor("RANDOM")
            .addBlankField()
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",`[Opening](${anime.op})\n[Opening Full](${anime.opFull})`, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",`[Ending](${anime.ed})\n[Opening Full](${anime.edFull})`, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__Voir les épisodes:__\n\n" + anime.anime_fr, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        var embeden = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription("__Synopsis:__ \n" + anime.story_en)
            .setColor("RANDOM")
            .addBlankField()
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",`[Opening](${anime.op})\n[Opening Full](${anime.opFull})`, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",`[Ending](${anime.ed})\n[Opening Full](${anime.edFull})`, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__See the episodes:__\n\n" + anime.anime_en, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        message.channel.send(embedfr)
        .then(m => {
            
            m.react('🇫🇷').then(() => m.react('🇬🇧').then( () => m.react("⏹") ) );
            const filter = (reaction, user) => user == message.author || user == botowner || user.id == message.guild.ownerID
            const collector = m.createReactionCollector(filter);
            collector.on('collect', reaction => {
                switch (reaction.emoji.name) {
                    case '🇫🇷':
                        m.edit(embedfr);
                        reaction.remove(message.author);
                        break;
                    case '🇬🇧':
                        m.edit(embeden);
                        reaction.remove(message.author);
                        break;
                    case '⏹':
                        m.delete(500);
                        collector.stop();
                }
            });
        });
    }
    else if (args[0] == "purpose" && args.length >= 2) {
        
        args.shift();
        
        var TIsOK = true;
        client.channels.get("419534136672518156").fetchMessages({ limit: 20 }).then( FM => {
            
            
            var nb_m = 0;
            //Anti spam (utilisateur spam)
            FM.forEach( m => {
                if (m.author.id == mention)
                    if (m.embeds[0] != undefined)
                        if (m.embeds[0].footer.text == message.author.tag)
                            nb_m += 1;
                
            }); 
            var time_m = new Date() - FM.first().createdAt; //Anti spam (time)
            
            //12 sec ou plus de 8 purpose en moin d'1h parmi les 20 derniers messages
            if (Number(time_m) < 12000) {TIsOK = false}
            if (Number(time_m) < 360000 && nb_m > maxAnPurpose) {TIsOK = false}
            console.log(nb_m, time_m, TIsOK)
        });
        
        if (TIsOK || message.author == botowner) {
            var embed = new Discord.RichEmbed()
                .setTitle("Purpose Anime")
                .setDescription(args.join(" "))
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL);
            client.channels.get("419534136672518156").send(embed);
        } else {
            message.channel.send("Please wait before purposing new animes !").then(m => m.delete(15000));
        }
        
    }
    else if ((args[0] == "query" || args[0] == "find") && args.length > 2) {
        
        
        
    } else {
        
        
        
    }
}
