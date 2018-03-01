exports.execute = () => {

    //Commande CAT
        if (command == 'cat' && args.length == 0) {
            var randcat = Math.floor(Math.random() * catimg.length);
            message.channel.send(message.author+", "+catimg[randcat]);
        }
        else if (command == 'cat' && (args[0].toLowerCase() == 'length' || args[0].toLowerCase() == 'size')) {
            message.channel.send(message.author+", il y a "+catimg.length+" images dans cat:cat");
        }
        else if (command == 'cat' && args.length == 2 && (args[0].toLowerCase() == 'purpose' || args[0].toLowerCase() == 'share')) {
        var channel = client.channels.get('405119142962659350');
        channel.send(message.author+': \n\
    '+args[1]);
        }
        else if (command == 'cat' && args.length != 2 && (args[0].toLowerCase() == 'purpose' || args[0].toLowerCase() == 'share')) {
        message.channel.send("Utilisation: \n\n\
        `cat:cat`\n\
        `cat:cat size` \n\
        `cat:cat share <url>`")
            .then(msg => msg.delete(20000));
        }
        else if (command == 'cat' && args.length > 0) {
        message.channel.send("Utilisation: \n\n\
        `cat:cat`\n\
        `cat:cat size` \n\
        `cat:cat share <url>`")
            .then(msg => msg.delete(20000));
        }

}
