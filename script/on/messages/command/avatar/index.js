exports.execute = () => {
    if(args[0]) {
        if (message.mentions) {
            if (message.mentions.users.array().length > 0) {
                message.channel.send(message.mentions.users.first().avatarURL);
                return;
            }
        }
        if(client.users.find('tag',args[0])) {
            message.channel.send(client.users.find('tag',args[0]).avatarURL);
        } else if(client.users.find('username',args[0])) {
            message.channel.send(client.users.find('tag',args[0]).avatarURL);
        }
    } else message.channel.send(message.author.avatarURL);
}
