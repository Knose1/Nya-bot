exports.execute = () => {
    
    args = args.map(m => {return m.toLowerCase()});
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
            
            m.react('🇫🇷').then(() => m.react('🇬🇧'));
            const filter = (reaction, user) => user == message.author
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
                }
            });
        });
    }
}
