exports.execute = () => {

    //Commande eval
        else if (command.toLowerCase() == 'eval' && message.author != botowner) {
            message.reply('You can\'t use eval command ! :pouting_cat:')
            .then(m => m.delete(6000));
        }
        else if (command.toLowerCase() == 'eval' && message.author == botowner) {
            /*Source of clean: 'https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/making-an-eval-command.html' */
            const clean = text => {
                if (typeof(text) === "string")
                    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                    return text;
            }
            /**/
            
            
            /**/
             function fulllog(FuncArgument1, max) {
    			if (max == undefined) {max = 1000}
                let i = 0;
                var popout = new Array();
                
                if (FuncArgument1.length <= max) {
                    popout[0] = FuncArgument1;
                }
                else
                while (FuncArgument1.length > max && i < 100) {
                    popout[i] = FuncArgument1.slice(0,4);
                    
					
					if (popout[i].lastIndexOf(" ") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(" ") + 1);
                        
                    else if (popout[i].lastIndexOf(";") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(";") + 1);
                        
					else if (popout[i].lastIndexOf(",") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(",") + 1);
                    else {
                    
                    	popout[i] = FuncArgument1.slice(0,10 + max);
                    
					
						if (popout[i].lastIndexOf(" ") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(" ") + 1);
                        
                    	else if (popout[i].lastIndexOf(";") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(";") + 1);
                        
						else if (popout[i].lastIndexOf(",") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(",") + 1);
                    
                    }
                    
                    
                    FuncArgument1 = FuncArgument1.slice(popout[i].length);
                    if (FuncArgument1.length != 0) 
	                    popout[i + 1] = FuncArgument1;
                    
                    i += 1;
                };
                var i2 = 0;
                while (i2 < 20) {
                    popout.forEach( m => {
                        if (m.length == 0 || m.replace(/ +/g,"").length == 0)
    		                popout.splice(popout.indexOf(m), 1);
                    });
                    i2 += 1;
                }
                return popout;
            }
            /**/
            
            
            const code = args.join(" ");
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
