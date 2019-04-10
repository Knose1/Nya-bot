exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    
    //Commande NYA
        if (command == 'nya' && args.length == 0) {
            message.channel.send("Utilisation: \n\n\
        `cat:nya <message>`")
            .then(msg => msg.delete(20000));
        }
        else if (command == 'nya' && message.author.id == botownerid && (args[0].toLowerCase() == 'owner' || args[0].toLowerCase() == 'strict')) {
            args[0] = '';
            message.channel.send(args.join(' '));
            Nya.log('Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé: '+args.join(' '));
        }
        else if (command == 'nya' && message.author.id == botownerid && (args[0].toLowerCase() == 'redirect' || args[0].toLowerCase() == 'rd')) {
            args[0] = '';
            var channel = client.channels.get(args[1]);
            var argchan = args[1];
            args[1] = '';
            channel.send(args.join(' '));
            Nya.log('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
        }
        else if (command == 'nya' && args.length > 0) {
            message.channel.send(message.author+" : "+args.join(' '));
            Nya.log(message.author+'. Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send(message.author+'. Message envoyé: '+args.join(' '));
        }

}
