exports.execute = () => {
    try {
        if(args[0]) {
            if (message.mentions) {
                if (message.mentions.users.array().length > 0) {
                    message.channel.send(message.mentions.users.first().avatarURL);
                }
            
            } else if(client.users.find('tag',args.join(" "))) {
                message.channel.send(client.users.find('tag',args.join(" ")).avatarURL);
            } else if(client.users.find('username',args.join(" "))) {
                message.channel.send(client.users.find('username',args.join(" ")).avatarURL);
            } else {
                message.channel.send("Sorry I can't find " + args.join(" "))
            }
        } else message.channel.send(message.author.avatarURL);
    } catch (err) {}
}
