exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    //Commande emojiget
        if ((command.toLowerCase() == 'emojiget' || command.toLowerCase() == 'emg') && (isMod || message.author.id == botownerid)) {
            
            let collect = false;
            message.channel.send(`\`Add a reaction to get emoji's name\``)
            .then(msg => {
                
                //On attend une réaction puis on del le message
                const filter = (reaction,user) => {return user.id == message.author.id}
                const collector = msg.createReactionCollector(filter, {time: 60000, max:1});
                collector.on('collect', r => {
                    collect = true;
                    msg.edit(`\`${r.emoji.name}\``);
                    msg.clearReactions();;
                    msg.delete(8000);
                });
                collector.on('end', e => {if (!collect) {msg.clearReactions(); msg.delete(500);}});
                
            });
        }

}
