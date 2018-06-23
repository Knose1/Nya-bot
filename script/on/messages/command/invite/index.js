exports.execute = () => {

  //Commande INVITE
        if (command == 'invite') {
            message.channel.send(`Toi l'adorateur de chats, voila mon invite: \n ${invite}`);
            Nya.log('Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Invitation envoyé');
        }

}
