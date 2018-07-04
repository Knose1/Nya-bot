exports.execute = () => {
    if (args[0].toLowerCase() == "add") {
        let eee = "cat:animelist add";
        var args = message.content.slice(eee.length).split("\n::")
    }
    else if (args[0].toLowerCase() == "create") {
        let eee = "cat:animelist add";
        var args = message.content.slice(eee.length).split("\n::")
    }
    args[1] = args[1].replace(/ +/g,"-");
    Nya.log
    if (args[1] && args[1] != "anime_ref" && args[2] /*&& String(Number(args[2])) != "NaN"*/) {
        var anGuild = client.guilds.get("456965774452719619");
        var anCategID = anGuild.channels.find("name","anime_ref").parentID;
        
        var foundedChannels = anGuild.channels.findAll("name",args[1].toLowerCase()).filter( c => {
            return c.parentID != anGuild.channels.find("name","général").parentID && c.type == "text"
        });
        
        if (foundedChannels.length != 0) {
            if (args[3])
                message.channel.send("L'anime existe déjà ; Donc l'image/text ne sera pas pris en compte").then(m => m.delete(10000));
                
            var animeChannel = foundedChannels.pop(); //1 channel conservé
            if (foundedChannels.length != 0) {
                
                foundedChannels.forEach(c => {
                    c.delete("Anime founded twice");
                }); // les autres supprimés
            
            }
            animeChannel.edit({ topic: 'Dernière épisode vu: ' + args[2].replace(/_/g," ") });
            message.channel.send("L'anime a bien été modifiée").then(m => m.delete(20000));
            
        } else {
            anGuild.createChannel(args[1], 'text').then( async (animeChannel) => {
                if (args[3])
                    await animeChannel.send(args[3]);
                await resolveAfter(1.5);
                await animeChannel.edit({ topic: 'Dernière épisode vu: ' + args[2].replace(/_/g," ") });
                await animeChannel.setParent(anCategID);
                message.channel.send("L'anime a bien été crée").then(m => m.delete(20000));
            });
        }
    } else {
        message.channel.send("__Utilisation:__\n`cat:animeList create \n\
::<titre>\n\
::<épisode>\n\
::[Petite image si possible ^^]`").then(m => m.delete(10000))
    }
}
