exports.execute = () => {

    //Commande LOGSERV
        else if (command == 'logserv') {
            message.channel.send(`Voici le server log: \n https://discord.gg/HTZy7tB`);
            console.log('Log Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Log Invitation envoyé');
        }

}
