exports.execute = () => {
    if (args[1] && args[1] != "anime_ref" && args[2] /*&& String(Number(args[2])) != "NaN"*/) {
        var anGuild = client.guilds.get("456965774452719619");
        var anCategID = anGuild.channels.find("name","anime_ref").parentID;
        
        var foundedChannels = anGuild.channels.findAll("name",args[1]).filter( c => {
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
            animeChannel.edit({ topic: 'Dernière épisode vu: ' + args[2] });
            message.channel.send("L'anime a bien été modifiée").then(m => m.delete(20000));
            
        } else {
            anGuild.createChannel(args[1], 'text').then( async (animeChannel) => {
                if (args[3])
                    await animeChannel.send(args[3]);
                    
                await animeChannel.edit({ topic: 'Dernière épisode vu: ' + args[2] });
                await animeChannel.setParent(anCategID);
                message.channel.send("L'anime a bien été crée").then(m => m.delete(20000));
            });
        }
    } else {
        message.channel.send("__Utilisation:__\n`cat:animeList create <titre> <episode> [Petite image si possible ^^]`").then(m => m.delete(10000))
    }
}
