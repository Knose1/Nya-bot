exports.execute = () => {
    if(args[0]) {
        if(client.users.find('tag',args[0])) {
            message.channel.send(client.users.find('tag',args[0]).avatarURL);
        }
    } else message.channel.send(message.author.avatarURL);
}
