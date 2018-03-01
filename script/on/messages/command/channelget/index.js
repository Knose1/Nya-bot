exports.execute = () => {

    if ((command.toLowerCase() == 'channelget' || command.toLowerCase() == 'cg') && message.author == botowner && args.length == 1) {
            var guild = client.guilds.get(args[0]);
            if (guild != undefined) {
                var nyachannels = `__Serveur '${guild.name.replace(/`/g,"").replace(/_/g,"-")}' __:\n\
    __Channels__:\n\n`;
                
                guild.channels.forEach(channel => {
                    
                    if (channel.type == 'text') {
                        nyachannels = nyachannels+` \`${channel.name.replace(/`/g,"")}\`      (${channel.id})\n`;
                    }
                });
            message.channel.send(nyachannels);
            }
        }

}
