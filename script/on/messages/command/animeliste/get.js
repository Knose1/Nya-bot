exports.execute = () => {

    var anGuild = client.guilds.get("456965774452719619");

    var foundedChannels = anGuild.channels.array.filter( c => {
        return c.name != "anime_ref" && c.parentID != anGuild.channels.find("name","général").parentID && c.type == "text"
    });
    message.channel.send(`<@${botowner}>` + foundedChannels.join("\n"), {split:true}).then(m => m.delete(30000));
    
}
