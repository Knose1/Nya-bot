require('./config.js').load();

//lorsque Nya!bot est pret
client.on('ready', () => {
    client.user.setStatus('online');
    
    CanReloading = true;
    console.log(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    //envoyer un message au server log
    var channel = client.channels.get(logserv);
    channel.send(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    client.user.setGame(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`);

    require('./module/servban.js').load();
    
    client.channels.get('406802264540315648').send(`--Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    
});

//Lorsque il a rejoins un serv
client.on("guildCreate", guild => {
    
    console.log(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
    var channel = client.channels.get(logserv);
    channel.send(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
  
    require('./module/servban.js').load();
});

//Lorsqu'il a été kick d'un serv
client.on("guildDelete", guild => {
    
    
    console.log(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`);
    var channel = client.channels.get(logserv);
    channel.send(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`)
});

//lors de reconnection
client.on('reconnecting', reconnecting=> {
    
    client.user.setStatus('invisible');
    console.log('Reconnection');
    var channel = client.channels.get(logserv);
    channel.send('Reconnection');
    
    const embed = new Discord.RichEmbed()
            //.setTitle("Virtual Channel")
            .setAuthor("BOT: "+client.user.username+"#"+client.user.discriminator, "https://media.discordapp.net/attachments/407271018516971532/407272279416766475/BOT.png")
            .setColor("#DD00FF")
            .setDescription('Le nya!bot revien, veuillez patienter ...')
            .setFooter("Le "+new Date().getDate()+"/"+(new Date().getMonth() + 1)+"/"+new Date().getFullYear()+" à "+new Date().toLocaleTimeString()+" | "+client.guilds.get('377892426569744387').name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+client.user.id , client.guilds.get('377892426569744387').iconURL)
            .setThumbnail(client.user.avatarURL);
       
        
		
        /*Fin embed*/
        
        //Pour chaque serv:
     
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                if (CanReloading && channel.type == "text" && channel.name == "nya-bot-vs" || (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log")) {
                
                    //On envoie l'embed
                    channel.send({embed});
                }
            });
		});
        CanReloading = false;
    
});

client.on('resume', resume => {
    
    
    client.user.setStatus('online');
    console.log('Reprise du nya!bot');
    var channel = client.channels.get(logserv);
    channel.send('Reprise du nya!bot');
    
    const embed = new Discord.RichEmbed()
            //.setTitle("Virtual Channel")
            .setAuthor("BOT: "+client.user.username+"#"+client.user.discriminator, "https://media.discordapp.net/attachments/407271018516971532/407272279416766475/BOT.png")
            .setColor("#DD00FF")
            .setDescription('Le nya!bot est de retour !')
            .setFooter("Le "+new Date().getDate()+"/"+(new Date().getMonth() + 1)+"/"+new Date().getFullYear()+" à "+new Date().toLocaleTimeString()+" | "+client.guilds.get('377892426569744387').name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+client.user.id , client.guilds.get('377892426569744387').iconURL)
            .setThumbnail(client.user.avatarURL);
       
        
		
        /*Fin embed*/
        
        //Pour chaque serv:
     
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                if (channel.type == "text" && channel.name == "nya-bot-vs" || (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log")) {
                
                    //On envoie l'embed
                    channel.send({embed});
                }
            });
		});
        CanReloading = true;
});








client.on('message', message => {
    
    if (!message.author.bot){
        require('./module/servban.js').load();
    }
    if(message.guild) {} else return;
    
    //si c'est une commande, récupérer les arguments, la commande et supprimer le message
        if (message.content.indexOf(prefix) == 0) {
            var iscommand = true;
            var args = message.content.slice(prefix.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
    
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
        }
    
    if (noGame == 'activé' && !iscommand) 
        client.user.setGame(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`);
    
    require('./module/perm.js').load(message);
    
    //On récupère le suffix du vs
    var isVs = false;
    if (message.channel.name.indexOf('nya-bot-vs') == 0) {
        var Pfx = message.channel.name.slice('nya-bot-vs'.length);
        if (Pfx == undefined) Pfx = '';
        if (Pfx.indexOf('-') == 0) Pfx = Pfx.slice('-'.length);
        if (Pfx == undefined) Pfx = '';
    
        var isPfx = false
        VsPrefixs.forEach( p => {
            if (Pfx == p) isPfx = true;
        });
    
        if (isPfx) 
            isVs = true;
    
        //console.log(isVs+" ; "+Pfx);
    }
    
    //On récupère la liste des ban
    var guild = client.guilds.get('406926403628695556');
    var vsban = new Array();
    var vsx = -1;
    guild.roles.forEach(function (role) {
        vsx = vsx+1;
        vsban[vsx] = role.name;
        //console.log(role.name);
    });
    //console.log(message.author.id);
    
    //On regarde si la personne est ban
    var isbanned = false;
    vsban.forEach(function (banned) {
        if (message.author.id == banned && message.author != botowner && message.author.id != mention) {
            isbanned = true;
        }
    });
    
    /*DEBUT BOT*/
    //ignorer si c'est un bot (sauf s'il parle dans le vs sous certaines conditions
    if(message.author.bot == true) {

                
                    //Bot ban et bot différent de nya!bot
                    if (isVs && isbanned == true && message.author.id != mention) {
                        message.delete(500)
                            .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                            .catch(console.error);
                        return;
                    }
                    //Nya!bot commande
                    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
                        message.delete(500)
                            .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                            .catch(console.error);
                        return;
                    }
                    //Si pas de -- et pas de // et différent de nya!bot
                    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--') != 0 && message.content.indexOf('//') != 0) && message.author.id != mention) {
                        message.delete(500)
                            .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                            .catch(console.error);
                        return;
                    }
                    else if((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--') == 0 || message.content.indexOf('//') == 0)) {
                    } else return;
                });
            });
        });
    }
    /*Fin BOT*/
    
    /*if (message.author == botowner && (!isVs || (message.guild.id == "377892426569744387" && message.channel.name != "nya-bot-vs-log"))) {
        if (Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] != 'NaN') {
            Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].set([String(Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] + 1))]);
        
       	    if( Math.floor( (Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] ) +1) / 10 ) == (Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] ) +1)/ 10) {
                message.channel.send(`Bravo Knose1 tu as ${Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0]) + 1} xp`)
                    .then(msg => msg.delete(10000));
            }
        }
    }*/
    
    if (require("./on/messages/vs/index.js").execute(message)  );
    else if (require("./on/messages/rpg/index.js").execute(message)    );
    else if (iscommand == true) {
        //Commande GAME
        if (command == 'game' && message.author == botowner && args.length == 0) {
            client.user.setGame(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
            console.log('Changement du jeu: Par défaut');
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: Par défaut');
            noGame = 'activé';
        }
        else if (command == 'game' && message.author == botowner) {
            client.user.setGame(args.join(' '));
            console.log('Changement du jeu: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: '+args.join(' '));
            noGame = 'désactivé';
        }
        else if (command == 'game' && message.author != botowner) {
            message.channel.send(message.author+" vous n'avez pas le droit d'utiliser "+"\""+message.content+"\"")
                .then(msg => msg.delete(10000));
        }
        //Commande NYA
        else if (command == 'nya' && args.length == 0) {
            message.channel.send("Utilisation: \n\n\
        `cat:nya <message>`")
            .then(msg => msg.delete(20000));
        }
        else if (command == 'nya' && message.author == botowner && (args[0].toLowerCase() == 'owner' || args[0].toLowerCase() == 'strict')) {
            args[0] = '';
            message.channel.send(args.join(' '));
            console.log('Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé: '+args.join(' '));
        }
        else if (command == 'nya' && message.author == botowner && (args[0].toLowerCase() == 'redirect' || args[0].toLowerCase() == 'rd')) {
            args[0] = '';
            var channel = client.channels.get(args[1]);
            var argchan = args[1];
            args[1] = '';
            channel.send(args.join(' '));
            console.log('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
        }
        else if (command == 'nya' && args.length > 0) {
            message.channel.send(message.author+" : "+args.join(' '));
            console.log(message.author+'. Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send(message.author+'. Message envoyé: '+args.join(' '));
        }
        //Commande INVITE
        else if (command == 'invite') {
            message.channel.send(`Toi l'adorateur de chats, voila mon invite: \n ${invite}`);
            console.log('Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Invitation envoyé');
        }
        //Commande LOGSERV
        else if (command == 'logserv') {
            message.channel.send(`Voici le server log: \n https://discord.gg/HTZy7tB`);
            console.log('Log Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Log Invitation envoyé');
        }
        //Commande GIT
        else if (command == 'git' || command == 'github') {
            message.channel.send(message.author+", voici mon lien github \n https://github.com/Knose1/Nya-bot");
        }
        //Commande CAT
        else if (command == 'cat' && args.length == 0) {
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
        //Commande GUILDI
        else if (command == 'guildi' && message.author == botowner) {
            var guild = client.guilds.get(args[0]);
            if (guild.available) {
                if (guild.fetchInvites().length > 0) {
                    guild.fetchInvites().then(returned => message.author.send(returned.first().toString()) );
                } else {
                    message.author.send('No invite for the server '+ guild.name)
                }
            }
        }
        
        //Commande Serv
        else if ((command == 'guilds' || command == 'serv') && message.author == botowner) {
        var nyaguilds = '__Serveurs:__ \n\n';
        //console.log(client.guilds);
            
            client.guilds.forEach(function (guild) {
                nyaguilds = nyaguilds+` \`${guild.name.replace(/`/g,"")}\`      (${guild.id})\n`;
            });
            message.channel.send(nyaguilds);
        }
        else if ((command.toLowerCase() == 'channelget' || command.toLowerCase() == 'cg') && message.author == botowner && args.length == 1) {
            var guild = client.guilds.get(args[0]);
            if (guild != undefined) {
                var nyachannels = `__Serveur '${guild.name.replace(/`/g,"").replace(/_/g,"-")}' __:\n\
    __Channels__:\n\n`;
                
                guild.channels.forEach(channel => {
                    
                    if (channel.type == 'text') {
                        nyachannels = nyachannels+` \`${channel.name.replace(/`/g,"")}\`      (${channel.id})\n`;
                    }
                });
            message.channel.send(nyachannels);
            }
        }
        //Commande book
        else if (command.toLowerCase() == 'BOOK') {
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
                
                /*.then(m => {
                    m.react('🅰').then(m2 => m.react('⏹'));
                    
                    const filter = (reaction, user) => user == botowner
                    const collector = m.createReactionCollector(filter);
                    collector.on('collect', reaction => {
                        switch (reaction.emoji.name) {
                            
                            case '🅰' :
                                if (m.content.indexOf(clean(code)) != -1) {
                                    m.edit(clean(evaled), {code:"xl"});
                                    m.clearReactions().then( m2 => {
                                        m.react('🅱').then(m2 => m.react('⏹'));
                                    });
                                }
                                break;
                            case '🅱':
                                if (m.content.indexOf(clean(evaled)) != -1) {
                                    m.edit(clean(code), {code:"js"});
                                    m.clearReactions().then( m2 => {
                                        m.react('🅰').then(m2 => m.react('⏹'));
                                    });
                                }
                                break;
                                
                            case '⏹':
                                m.delete(500);
                                
                        }
                    });
                });*/
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
        
        //Commande emojiget
        else if ((command.toLowerCase() == 'emojiget' || command.toLowerCase() == 'emg') && (isMod || message.author == botowner)) {
            
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
        else if ((command.toLowerCase() == 'mathstest' || command.toLowerCase() == 'mt') && undefined != args[0]) {
            
            
            if (undefined == args[1]) {
                var ArrMin = 1;
                var ArrMax = args[0];
            } else {
                var ArrMin = args[0];
                var ArrMax = args[1];
            }
            let collect = false;
            let Operate = ['+','-','*','/'];
            let ArrNumbers = [0,0,0,0,0];
            ArrNumbers = ArrNumbers.map( () => {return rand(ArrMin,ArrMax)} );
            console.log(ArrNumbers);
            
            let question = ArrNumbers.join(' | ');
            let solution = '';
            
            let x = rand(0,ArrNumbers.length - 1);
            let solunum = ArrNumbers[x];
                delete ArrNumbers[x];
            
            let maxI = ArrNumbers.length;
            let i = 1;
            console.log(solunum);
            
            while (i < maxI) {
                i += 1;
                let x = rand(0,maxI + 1);
                console.log(ArrNumbers);
                while (ArrNumbers[x] == undefined) {
                    x = rand(0,maxI + 1);
                }
                let randOperat = Operate[rand(0,Operate.length - 1)];
                let randnumb = ArrNumbers[x];
                    delete ArrNumbers[x];
                console.log(randnumb);
                solution += `${solunum} ${randOperat} ${randnumb}`;
                if (randOperat == '+') solunum += randnumb;
                if (randOperat == '-') solunum -= randnumb;
                if (randOperat == '*') solunum *= randnumb;
                if (randOperat == '/') solunum /= randnumb;
                
                solution += ` = ${solunum}\n`;
            }
            question += "\n"+"Result: "+solunum+"\n\n"+"Try to find how to get the result";
            
            message.channel.send(`\`\`\`js\n
${question}\`\`\``)
                .then(msg => {
                    //On ajoute une réaction
                    msg.react('✅');
                
                    //On attend une réaction puis on del le message
                    const filter = (reaction,user) => {return reaction.emoji.name == '✅' && user.id != mention}
                    const collector = msg.createReactionCollector(filter, {time: 3600000, max:1});
                        collector.on('collect', r => {
                            collect = true;
                            msg.edit(`\`\`\`javascript\n\
${solution}\`\`\``);
                            msg.clearReactions();;
                            msg.delete(60000);
                        });
                        collector.on('end', e => {if (!collect) {msg.clearReactions(); msg.delete(500);}});
                    });
                        
        }
        else if ((command.toLowerCase() == 'mathstest' || command.toLowerCase() == 'mt')) {
            message.channel.send("use: 'sorry not done yet'")
                .then(msg => msg.delete(15000));
        }
        //commande help
        
        else if ((command == 'help' || command == 'aide') && args[0] == 'new(vs)') {
            message.channel.send("-----\n\
__**Virtual Server:**__ \n\n\
    Pour obtenir le virtual server il vous suffie simplement de créer un channel appelé `nya-bot-vs`\n\
https://media.discordapp.net/attachments/407271018516971532/409747122749964288/unknown.png\
")
            .then(msg => msg.delete(25000));
        }
        
        else if (command == 'help' && ((args[0]== 'vs' && args[1] == 'here') || (args[0] == 'here' && args[1] == 'vs'))) {
            message.channel.send('-----\n\
__Commandes utilisable **UNIQUEMENT** dans le nya!bot vs :__ \n\
\n\
:warning: Pour chaque commande les `--` peuvent être remplacés par des `//`\n\
\n\
Pour envoyer une vidéo youtube `----yt:<url>`\n\
\n\
Pour envoyer une vidéo youtube avec du text: `--<message> --yt:<url>`\n\
\n\
Pour envoyer des images `----img:<url>`\n\
\n\
Pour envoyer des images avec du text: `--<message> --img:<url>`\n\
\n\
\n\
(bien évidement vous remplacez les `<blablabla>` par leur valeur et vous retirer les <>)\n\
\n\
-----------------------\n\
\n\
__Uniquement pour les **MODÉRATEURS DU BOT** :__ \n\
\n\
--ban <id de l\'utilisateur> (les -- peuvent être remplacé par des //)\n\
--unban <id de l\'utilisateur> (les -- peuvent être remplacé par des //)\n\
--nya <message>(les -- peuvent être remplacé par des //)\n\
\n\
Les id sont marqués en bas des messages du VirtualServeur (VS)');
        }
        
        else if (command == 'help' && args[0] == 'vs') {
            message.author.send('-----\n\
__Commandes utilisable **UNIQUEMENT** dans le nya!bot vs :__ \n\
\n\
:warning: Pour chaque commande les `--` peuvent être remplacés par des `//`\n\
\n\
Pour envoyer une vidéo youtube `----yt:<url>`\n\
\n\
Pour envoyer une vidéo youtube avec du text: `--<message> --yt:<url>`\n\
\n\
Pour envoyer des images `----img:<url>`\n\
\n\
Pour envoyer des images avec du text: `--<message> --img:<url>`\n\
\n\
\n\
(bien évidement vous remplacez les `<blablabla>` par leur valeur et vous retirer les <>)\n\
\n\
-----------------------\n\
\n\
__Uniquement pour les **MODÉRATEURS DU BOT** :__ \n\
\n\
--ban <id de l\'utilisateur> (les -- peuvent être remplacé par des //)\n\
--unban <id de l\'utilisateur> (les -- peuvent être remplacé par des //)\n\
--nya <message>(les -- peuvent être remplacé par des //)\n\
\n\
Les id sont marqués en bas des messages du VirtualServeur (VS)');
        }
	    
        else if ((command == 'help' || command == 'aide') && args[0] == 'here' ) {
        message.channel.send("-----\n\
__**Commandes:**__ \n\n\
    `cat:help new(vs)` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    `cat:help vs` Obtenir les commandes du Virtual Server\n\
    \n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:nya` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    \n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\
");
        }
        
        else if ((command == 'help' || command == 'aide') && message.author == botowner) {
        message.author.send("-----\n\
__**Commandes:**__ \n\n\
    `cat:help new(vs)` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    `cat:help vs` Obtenir les commandes du Virtual Server\n\
    \n\
    `cat:serv` Voir tout les serv de nya!bot\n\
    `cat:channelGet <id du serveur>` Récupère les channels textuels\n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:game <Jeu>` Changer le jeu du bot\n\
    `cat:guildi <serv>` Obtenir une invitation au serveur\n\
    \n\
    `cat:nya <message>` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    `cat:nya owner <message>` Envoyer des messages en tant que bot\n\
    `cat:nya redirect <channel> <message>` Envoyer des messages en tant que bot dans d'autre channel\n\
    \n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\
");
        }
        
        else if (command == 'help' || command == 'aide') {
        message.author.send("-----\n\
__**Commandes bot owner:**__ \n\n\
    `cat:help new(vs)` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    `cat:help vs` Obtenir les commandes du Virtual Server\n\
    \n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:nya` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    \n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\
");
        }
        
        //pas de commande -> ne rien faire
        else if (command == '') {
        }
        else if (message.guild.id != '110373943822540800') {
            message.channel.send('"'+message.content+' "'+" n'est pas une commande")
                .then(msg => msg.delete(15000));
        }
        iscommand = false;
    }
    
});







//lors de déconection
client.on('disconnect', disconnect => {
    
    client.user.setStatus('invisible');
    console.log('déconnecté');
    var channel = client.channels.get(logserv);
    channel.send('Déconnecté');
})

client.login(key);
