exports.execute = () => {
    
    if (args.length != 0)
        args[0] = args[0].toLowerCase();
    
    if (args.length == 0) {
        var randAnime = Math.floor(Math.random() * listAnime.length);
        var anime = listAnime[randAnime];
        
        var AnOp = "";
        var AnEd = "";
        var i = -1;
        while (i < anime.op.length -1 || i < anime.opFull.length -1 || i < anime.edFull.length -1 || i < anime.edFull.length -1) {
            
            i += 1;
            AnOp += `[Opening ${i + 1}](${anime.op[i]})\n`+
                    `[Opening ${i + 1} Full](${anime.opFull[i]})\n\n`;
            AnEd += `[Ending ${i + 1}](${anime.ed})\n`+
                    `[Ending ${i + 1} Full](${anime.edFull})\n\n`
                    
        
        }
        if (anime.story_fr_source != `undefined`)
            var story_fr = `${anime.story_fr}\n\n[Source: ${anime.story_fr_source[0]}](${anime.story_fr_source[1]})`;
        else
            var story_fr = anime.story_fr;
        
        if (anime.story_en_source != `undefined`)
            var story_en = `${anime.story_en}\n\n[Source: ${anime.story_en_source[0]}](${anime.story_en_source[1]})`;
        else
            var story_en = anime.story_en;
        
        var embedfr = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription("__Synopsis:__ \n" + story_fr)
            .setColor("RANDOM")
            .addBlankField()
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__Voir les épisodes:__\n\n" + anime.anime_fr, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        var embeden = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription("__Synopsis:__ \n" + story_en)
            .setColor("RANDOM")
            .addBlankField()
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
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
                        try{reaction.remove(message.author)} catch (err) {}
                        try{reaction.remove(botowner)} catch (err) {}
                        try{reaction.remove(message.guild.owner)} catch (err) {}
                        break;
                    case '🇬🇧':
                        m.edit(embeden);
                        try{reaction.remove(message.author)} catch (err) {}
                        try{reaction.remove(botowner)} catch (err) {}
                        try{reaction.remove(message.guild.owner)} catch (err) {}
                        break;
                    case '⏹':
                        m.delete(500);
                        collector.stop();
                }
            });
        });
    }
    else if ((args[0] == "purpose" || args[0] == "add")&& args.length >= 2) {
        
        args.shift();
        
        var TIsOK = true;
        client.channels.get("419534136672518156").fetchMessages({ limit: 20 }).then( FM => {
            
            
            var nb_m = 0;
            //Anti spam (utilisateur spam)
            FM.forEach( m => {
                if (m.author.id == mention)
                    if (m.embeds[0] != undefined)
                        if (m.embeds[0].footer != undefined)
                            if (m.embeds[0].footer.text.indexOf(message.author.id) != -1)
                                nb_m += 1;
                
            }); 
            var time_m = new Date() - FM.first().createdAt; //Anti spam (time)
            
            //12 sec ou plus de 8 purpose en moin d'1h parmi les 20 derniers messages
            if (Number(time_m) < 15000) {TIsOK = false}
            if (Number(time_m) < 360000 && nb_m > maxAnPurpose) {TIsOK = false}
            
            if (TIsOK || message.author == botowner) {
                var embed = new Discord.RichEmbed()
                    .setTitle("Purpose Anime")
                    .setDescription(args.join(" "))
                    .setColor("RANDOM")
                    .setFooter(message.author.tag + " || " + message.author.id, message.author.avatarURL);
                client.channels.get("419534136672518156").send(embed);
                message.channel.send("The anime has been successfully purposed to the owner ! :cat:").then(m => m.delete(30000));
            } else {
                message.channel.send("Please wait before purposing new animes !").then(m => m.delete(15000));
            }
        });
    }
    else if ((args[0] == "query" || args[0] == "find") && args.length >= 2) {
        
        args.shift();
        args = args.map(m => m.toLowerCase());
        
        var allFounded = new Array(); //Liste de match
        var hig = 0; //Plus grand nb de match
        listAnime.forEach(an => {
            
            //On sépare les mots pour pouvoir comparer les 2 array
            var arrAn = an.name.toLowerCase().split(/ +/g);
            var pushMe = args.filter(m => {return arrAn.includes(m)});
            
            pushMe = pushMe.concat( args.filter(m => {return an.name.toLowerCase().indexOf(m) != -1 }) );
            
            if ((pushMe.length/2) > hig) hig = (pushMe.length / 2);
            
            allFounded.push({anime:an , name: an.name, match: (pushMe.length / 2) });
        });
        
        
        allFounded = allFounded.filter(m => m.match == hig && m.match != 0);
        
        var allFoundedAnime = allFounded.map(m => m.anime);
        //console.log(allFoundedAnime);
        var allFoundedName = allFounded.slice(0, 9);
        //console.log("It work here");
        
        allFoundedName = allFoundedName.map(m => `${allFoundedName.findIndex(j => j == m)}) ${m.name}`);
        
        console.log(allFoundedName);
        
        if (allFounded.length != 1) {
            if (allFounded.length == 0) 
                var anDesc = "null";
        
            else
                var anDesc = allFoundedName.join("\n");
            
            const embed = new Discord.RichEmbed()
                .setTitle(`Found ${allFounded.length} animes:`)
                .setDescription(anDesc)
                .setFooter(message.author.tag, message.author.avatarURL);
            message.channel.send(embed)
            .then(m => {
                if (allFounded.length == 0) return;
                
                m.react("0⃣")   
                    .then( m.react("1⃣")
                        .then( () => {if (allFoundedAnime.length > 2) m.react("2⃣")
                            .then( () => {if (allFoundedAnime.length > 3) m.react("3⃣")
                                .then( () => {if (allFoundedAnime.length > 4) m.react("4⃣")
                                    .then( () => {if (allFoundedAnime.length > 5) m.react("5⃣")
                                        .then( () => {if (allFoundedAnime.length > 6) m.react("6⃣")
                                            .then( () => {if (allFoundedAnime.length > 7) m.react("7⃣")
                                                .then( () => {if (allFoundedAnime.length > 8) m.react("8⃣")
                                                    .then( () => {if (allFoundedAnime.length > 9) m.react("9⃣")
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    )
                var emjS = "0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣";
                const filter = (reaction, user) => user == message.author && reaction.emoji.name != " " && reaction.emoji.name != "" && emjS.indexOf(reaction.emoji.name) != -1
                const collector = m.createReactionCollector(filter);
                var x = allFoundedAnime.length;
                var anime;
                collector.on('collect', reaction => {
                    
                    const ffff = () => {
                        
                        /*Embed*/
                    
                        
                        var AnOp = "";
                        var AnEd = "";
                        var i = -1;
                        while (i < anime.op.length -1 || i < anime.opFull.length -1 || i < anime.edFull.length -1 || i < anime.edFull.length -1) {
            
                            i += 1;
                            AnOp += `[Opening ${i + 1}](${anime.op[i]})\n`+
                                    `[Opening ${i + 1} Full](${anime.opFull[i]})\n\n`;
                            AnEd += `[Ending ${i + 1}](${anime.ed})\n`+
                                    `[Ending ${i + 1} Full](${anime.edFull})\n\n`
                    
        
                        }
                        
                        if (anime.story_fr_source != `undefined`)
                            var story_fr = `${anime.story_fr}\n\n[Source: ${anime.story_fr_source[0]}](${anime.story_fr_source[1]})`;
                        else
                            var story_fr = anime.story_fr;
                        
                        if (anime.story_en_source != `undefined`)
                            var story_en = `${anime.story_en}\n\n[Source: ${anime.story_en_source[0]}](${anime.story_en_source[1]})`;
                        else
                            var story_en = anime.story_en;
                
                        var embedfr = new Discord.RichEmbed()
                            .setTitle(anime.name)
                            .setThumbnail(anime.image)
                            .setDescription("__Synopsis:__ \n" + story_fr)
                            .setColor("RANDOM")
                            .addBlankField()
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__Voir les épisodes:__\n\n" + anime.anime_fr, false)
                            .setFooter(message.author.tag, message.author.avatarURL);
        
                        var embeden = new Discord.RichEmbed()
                            .setTitle(anime.name)
                            .setThumbnail(anime.image)
                            .setDescription("__Synopsis:__ \n" + story_en)
                            .setColor("RANDOM")
                            .addBlankField()
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
                            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__See the episodes:__\n\n" + anime.anime_en, false)
                            .setFooter(message.author.tag, message.author.avatarURL);
                    
                        /*Fin embed*/
                        m.channel.send(embedfr)
                        .then(m2 => {
                    
                            m2.react('🇫🇷').then(() => m2.react('🇬🇧').then( () => m2.react("⏹") ) );
                            const filter2 = (reaction, user) => user == message.author || user == botowner || user.id == message.guild.ownerID
                            const collector2 = m2.createReactionCollector(filter2);
                            collector2.on('collect', reaction2 => {
                                switch (reaction2.emoji.name) {
                                    case '🇫🇷':
                                        m2.edit(embedfr);
                                        try{reaction2.remove(message.author)} catch (err) {}
                                        try{reaction2.remove(botowner)} catch (err) {}
                                        try{reaction2.remove(message.guild.owner)} catch (err) {}
                                        break;
                                    case '🇬🇧':
                                        m2.edit(embeden);
                                        try{reaction2.remove(message.author)} catch (err) {}
                                        try{reaction2.remove(botowner)} catch (err) {}
                                        try{reaction2.remove(message.guild.owner)} catch (err) {}
                                        break;
                                    case '⏹':
                                        m2.delete(500);
                                        collector2.stop();
                                }
                            });
                        });
                        m.delete(500);
                        collector.stop();
                    }
                        
                    
                    
                    switch (reaction.emoji.name) {
                        case '0⃣':
                            anime = allFoundedAnime[0];
                            ffff();
                            break;
                        case '1⃣':
                            anime = allFoundedAnime[1];
                            ffff();
                            break;
                        case '2⃣':
                            if (x <= 2) return;
                            anime = allFoundedAnime[2];
                            ffff();
                            break;
                        case '3⃣':
                            if (x <= 3) return;
                            anime = allFoundedAnime[3];
                            ffff();
                            break;
                        case '4⃣':
                            if (x <= 4) return;
                            anime = allFoundedAnime[4];
                            ffff();
                            break;
                        case '5⃣':
                            if (x <= 5) return;
                            anime = allFoundedAnime[5];
                            ffff();
                            break;
                        case '6⃣':
                            if (x <= 6) return;
                            anime = allFoundedAnime[6];
                            ffff();
                            break;
                        case '7⃣':
                            if (x <= 7) return;
                            anime = allFoundedAnime[7];
                            ffff();
                            break;
                        case '8⃣':
                            if (x <= 8) return;
                            anime = allFoundedAnime[8];
                            ffff();
                            break;
                        case '9⃣':
                            if (x <= 9) return;
                            anime = allFoundedAnime[9];
                            ffff();
                    };
                    
                });
            });
            
        } else {
            
            anime = allFoundedAnime[0];
            
            var AnOp = "";
            var AnEd = "";
            var i = -1;
            while (i < anime.op.length -1 || i < anime.opFull.length -1 || i < anime.edFull.length -1 || i < anime.edFull.length -1) {
            
                i += 1;
                AnOp += `[Opening ${i + 1}](${anime.op[i]})\n`+
                        `[Opening ${i + 1} Full](${anime.opFull[i]})\n\n`;
                AnEd += `[Ending ${i + 1}](${anime.ed})\n`+
                        `[Ending ${i + 1} Full](${anime.edFull})\n\n`
                
                
            }
            
            if (anime.story_fr_source != `undefined`)
                var story_fr = `${anime.story_fr}\n\n[Source: ${anime.story_fr_source[0]}](${anime.story_fr_source[1]})`;
            else
                var story_fr = anime.story_fr;
        
            if (anime.story_en_source != `undefined`)
                var story_en = `${anime.story_en}\n\n[Source: ${anime.story_en_source[0]}](${anime.story_en_source[1]})`;
            else
                var story_en = anime.story_en;
            
            var embedfr = new Discord.RichEmbed()
                .setTitle(anime.name)
                .setThumbnail(anime.image)
                .setDescription("__Synopsis:__ \n" + story_fr)
                .setColor("RANDOM")
                .addBlankField()
                .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
                .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
                .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "__Voir les épisodes:__\n\n" + anime.anime_fr, false)
                .setFooter(message.author.tag, message.author.avatarURL);
            
            var embeden = new Discord.RichEmbed()
                .setTitle(anime.name)
                .setThumbnail(anime.image)
                .setDescription("__Synopsis:__ \n" + story_en)
                .setColor("RANDOM")
                .addBlankField()
                .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnOp, true)
                .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬",AnEd, true)
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
                            try{reaction.remove(message.author)} catch (err) {}
                            try{reaction.remove(botowner)} catch (err) {}
                            try{reaction.remove(message.guild.owner)} catch (err) {}
                            break;
                        case '🇬🇧':
                            m.edit(embeden);
                            try{reaction.remove(message.author)} catch (err) {}
                            try{reaction.remove(botowner)} catch (err) {}
                            try{reaction.remove(message.guild.owner)} catch (err) {}
                            break;
                        case '⏹':
                            m.delete(500);
                            collector.stop();
                    }
                });
            });
        }
        
        
        
    } else {
        
        
        
    }
}
