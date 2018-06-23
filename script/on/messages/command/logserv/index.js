exports.execute = () => {

    //Commande LOGSERV
        if (command == 'logserv') {
            message.channel.send(`Voici le server log: \n https://discord.gg/HTZy7tB`);
            Nya.log('Log Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Log Invitation envoyé');
        }

}
