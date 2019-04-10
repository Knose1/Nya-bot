exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    //Commande GAME
        if (command == 'game' && message.author.id == botownerid && args.length == 0) {
            client.user.setGame(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
            console.log('Changement du jeu: Par défaut');
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: Par défaut');
            noGame = 'activé';
        }
        else if (command == 'game' && message.author.id == botownerid) {
            client.user.setGame(args.join(' '));
            console.log('Changement du jeu: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: '+args.join(' '));
            noGame = 'désactivé';
        }
        else if (command == 'game' && message.author.id != botownerid) {
            message.channel.send(message.author+" vous n'avez pas le droit d'utiliser "+"\""+message.content+"\"")
                .then(msg => msg.delete(10000));
        }

}
