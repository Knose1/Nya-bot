exports.execute = () => {
    
    args = args.map(m => {return m.toLowerCase()});
    if (args.length == 0) {
        var randAnime = Math.floor(Math.random() * listAnime.length);
        var anime = listAnime[randAnime];
        
        var embedfr = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription(anime.story_fr)
            .setColor("RANDOM")
            .addBlankField()
            .addField("\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_",`[Opening](${anime.op})\n[Opening Full](${anime.opFull})`, true)
            .addField("\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_",`[Ending](${anime.ed})\n[Opening Full](${anime.edFull})`, false)
            .addField("\n\nVoir les épisodes:", anime.anime_fr, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        var embeden = new Discord.RichEmbed()
            .setTitle(anime.name)
            .setThumbnail(anime.image)
            .setDescription(anime.story_en)
            .setColor("RANDOM")
            .addBlankField()
            .addField("\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_",`[Opening](${anime.op})\n[Opening Full](${anime.opFull})`, true)
            .addField("\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_",`[Ending](${anime.ed})\n[Opening Full](${anime.edFull})`, false)
            .addField("\n\nSee the episodes:", anime.anime_en, false)
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
