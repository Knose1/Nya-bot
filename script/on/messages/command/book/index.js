exports.execute = () => {

    //Commande book
        if (command.toLowerCase() == 'BOOK') {
            message.channel.send('#Are you ready to get DM ? / Est-tu prêt à recevoir un MP ?',{code:'md'})
            .then(m => {
                m.react('✔').then(m2 => m.react('✖'));
            
                const filter = (reaction, user) => user.id == message.author.id
                const collector = m.createReactionCollector(filter, {time:3600000});
                collector.on('collect', reaction => {
                    switch (reaction.emoji.name) {
                        case '✔':
                            /*message.author.send('#Langage ?', {code:'md'}).then(botDM => {
                                botDM.react('🇫🇷').then(botdm2 => botDM.react('🇬🇧'));
                                
                                const filter2 = (reaction, user) => user.id == message.author.id
                                const collector2 = botDM.createReactionCollector(filter2, {time:10000});
                                collector2.on('collect', reactionDM => {
                                    switch (reactionDM.emoji.name) {
                                        case '🇫🇷':
                                            botDM.clearReactions();
                                            
                                            client.on('message', dm => {
                                                if(!dm.guild && dm.author == message.author && dm.channel.messages.get(botDM)) {
                                                dm.channel.send('Hi');
                                                } else if (!dm.guild && dm.author == message.author) dm.channel.send('Nope');
                                            });
                                            break;
                                        case '🇬🇧':
                                            botDM.clearReactions();
                                            
                                
                                    }
                                collector2.on('end', e => {if (e.size == 0) {botDM.delete(500);}});
                                });
                            });*/
                            m.delete(500);
                            collector.stop();
                            break;
                        case '✖':
                            m.delete(500);
                            collector.stop();
                    }
                });
                collector.on('end', e => {if (e.size == 0) {m.delete(500);}});
            }); 
        }

}
