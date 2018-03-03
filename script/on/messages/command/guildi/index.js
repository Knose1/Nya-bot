exports.execute = () => {

    //Commande GUILDI
        if (command == 'guildi' && message.author == botowner) {
            var guild = client.guilds.get(args[0]);
            if (guild.available) {
                if (guild.fetchInvites().length > 0) {
                    guild.fetchInvites().then(returned => message.author.send(returned.first().toString()) );
                } else {
                    message.author.send('No invite for the server '+ guild.name)
                }
            }
        }

}
