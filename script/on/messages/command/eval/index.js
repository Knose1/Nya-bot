exports.execute = () => {
    
    message.delete(500)
                    .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                    .catch(e => Nya.error(e,true));
    
    //Commande eval
        if (command.toLowerCase() == 'eval' && message.author != botowner) {
            message.reply('You can\'t use eval command ! :pouting_cat:')
            .then(m => m.delete(6000));
        }
        else if (command.toLowerCase() == 'eval' && message.author == botowner) {
            
            
            const code = args.join(" ").replace(/​/g, "");
            try {
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);
                
                var cleanEVAL = fulllog(clean(evaled));
                cleanEVAL.unshift(clean(code));
                //console.log(cleanEVAL);
                
                message.channel.send(`\'EXECUTION\'\n\n\n CODE:\n\n  ${cleanEVAL[0]} \n\n\nPage 1/${cleanEVAL.length}`, {code:"js"})
                .then(m => {
                    var page = 1;
                    if (cleanEVAL.length == 1) {
                        m.react('⏹');
                    } else {
                        //⬅ ➡
                        m.react('➡').then(m2 => m.react('⏹'));
                    }
                    
                    const filter = (reaction, user) => user == botowner
                    const collector = m.createReactionCollector(filter);
                    collector.on('collect', reaction => {
                        switch (reaction.emoji.name) {
                            case '⬅':
                                if (page != 1) {
                                    if (cleanEVAL[page - 2] == clean(code)) {
                                        var codeA = 'js';
                                        var Title = '\'EXECUTION\'\n\n\n CODE:\n\n';
                                    } else { 
                                        var codeA = 'xl';
                                        var Title = '\'EXECUTION\'\n\n\n OUTPUT:\n\n';
                                    }
                                    m.edit(`${Title}  ${cleanEVAL[page - 2]} \n\n\nPage ${page - 1}/${cleanEVAL.length}`, {code:codeA});
                                    m.clearReactions().then( m2 => {
                                        if (page > 1) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('➡').then(m3 => m.react('⏹'));
                                        }
                                    })
                                    .catch(m2 => {
                                        if (page > 1) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('➡').then(m3 => m.react('⏹'));
					                    }
                                    });
                                    page -= 1;
                                }
                                
                                break;
                            case '➡':
                                if (page < cleanEVAL.length) {
                                    if (cleanEVAL[page] == clean(code)) {
                                       var codeA = 'js';
                                        var Title = '\'EXECUTION\'\n\n\n CODE:\n\n';
                                    } else { 
                                        var codeA = 'xl';
                                        var Title = '\'EXECUTION\'\n\n\n OUTPUT:\n\n';
                                    }
                                    m.edit(`${Title}  ${cleanEVAL[page]} \n\n\nPage ${page + 1}/${cleanEVAL.length}`, {code:codeA});
                                    m.clearReactions().then( m2 => {
                                        if (page < cleanEVAL.length) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('⬅').then(m3 => m.react('⏹'));
                                        }
                                    })
                                    .catch(m2 => {
                                        if (page < cleanEVAL.length) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('⬅').then(m3 => m.react('⏹'));
                                        }
                                    });
                                    page += 1;
                                }
                                break;
                            case '⏹':
                                m.delete(500);
                                
                        }
                    });
                });
                
                /**/
            } catch (err) {
                
                var cleanERR = fulllog( util.inspect( clean(err) ) );
                cleanERR.unshift(clean(code));
                message.channel.send(`\'UNE ERREUR EST SURVENUE !\'\n\n\n CODE:\n\n  ${cleanERR[0]} \n\n\nPage 1/${cleanERR.length}`, {code:"js"})
                .then(m => {
                    var page = 1;
                    if (cleanERR.length == 1) {
                        m.react('⏹');
                    } else {
                        //⬅ ➡
                        m.react('➡').then(m2 => m.react('⏹'));
                        
                    }
                    
                    const filter = (reaction, user) => user == botowner
                    const collector = m.createReactionCollector(filter);
                    collector.on('collect', reaction => {
                        switch (reaction.emoji.name) {
                            case '⬅':
                                if (page != 1) {
                                    if (cleanERR[page - 2] == clean(code)) {
                                        var codeA = 'js';
                                        var Title = '\'UNE ERREUR EST SURVENUE !\'\n\n\n CODE:\n\n';
                                    } else { 
                                        var codeA = 'xl';
                                        var Title = '\'UNE ERREUR EST SURVENUE !\'\n\n\n ERROR:\n\n';
                                    }
                                    m.edit(`${Title}  ${cleanERR[page - 2]} \n\n\nPage ${page - 1}/${cleanERR.length}`, {code:codeA});
                                    m.clearReactions().then( m2 => {
                                        if (page > 1) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('➡').then(m3 => m.react('⏹'));
                                        }
                                    })
                                    .catch( m2 => {
                                        if (page > 1) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('➡').then(m3 => m.react('⏹'));
                                        }
                                    });
                                    page -= 1;
                                }
                                
                                break;
                            case '➡':
                                if (page < cleanERR.length) {
                                    if (cleanERR[page] == clean(code)) {
                                       var codeA = 'js';
                                        var Title = '\'UNE ERREUR EST SURVENUE !\'\n\n\n CODE:\n\n';
                                    } else { 
                                        var codeA = 'xl';
                                        var Title = '\'UNE ERREUR EST SURVENUE !\'\n\n\n ERROR:\n\n';
                                    }
                                    m.edit(`${Title}  ${cleanERR[page]} \n\n\nPage ${page + 1}/${cleanERR.length}`, {code:codeA});
                                    m.clearReactions().then( m2 => {
                                        if (page < cleanERR.length) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('⬅').then(m3 => m.react('⏹'));
                                        }
                                    })
                                    .catch( m2 => {
                                        if (page < cleanERR.length) {
                                            m.react('⬅').then(m3 => m.react('➡').then(m4 => m.react('⏹') )  );
                                        } else {
                                            m.react('⬅').then(m3 => m.react('⏹'));
                                        }
                                    });
                                    page += 1;
                                }
                                break;
                            case '⏹':
                                m.delete(500);
                                
                        }
                    });
                });
            }
        }

}
