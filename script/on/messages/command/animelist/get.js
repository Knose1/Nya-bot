exports.execute = () => {

    var anGuild = client.guilds.get("456965774452719619");

    var foundedChannels = anGuild.channels.array().filter( c => {
        return c.name != "anime_ref" && c.parentID != anGuild.channels.find("name","général").parentID && c.type == "text"
    });
    message.channel.send(`${botowner}\n\n\n` + foundedChannels.map(m => {try {return m + " " + m.topic} catch(e) {}}).join("\n\n"), {split:true}).then(m => m.delete(Number(foundedChannels.length) * 2000));
    
}
