require('./config.js').load();
var events = require('events');
var NoNyaWebhooks;

//lorsque Nya!bot est pret
client.on('ready', () => {
    client.user.setStatus('online');
    
    CanReloading = true;
    console.log(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    //envoyer un message au server log
    var channel = client.channels.get(logserv);
    channel.send(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    client.user.setActivity(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`, {type: "PLAYING"});

    require('./module/servban.js').load();
    
    client.channels.get('406802264540315648').send(`--Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    
    client.channels.get("420002162676858900").fetchMessage("424973658210041866").then(m => {
        m.edit(listAnime.map(anime => {return `**N°${listAnime.indexOf(anime) + 1}** ${anime.name}`}).join("\n"))
    });
    
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
    
    if (haderror && message.author != botowner && message.author.id != mention) {
        client.user.setStatus('dnd');
        client.user.setActivity(`ERROR`,{type: "PLAYING"});
        noGame = 'activé'
        return;
    } else if (BotOnDev && message.author != botowner && message.author.id != mention) {
        client.user.setStatus('idle');
        client.user.setActivity(`Developping . . .`,{type: "PLAYING"});
        noGame = 'activé'
        return;
    } else if (!haderror && !BotOnDev && noGame == 'activé') {
        client.user.setStatus('online');
        client.user.setActivity(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`,{type: "PLAYING"});
    
    }
    
    if (!message.author.bot){
        require('./module/servban.js').load();
    }
    if(!message.guild) {
        if (message.content.toLowerCase() == "clear") {
            message.channel.fetchMessages({ limit: 100 }).then(f => {
                
                
                
                message.channel.fetchMessages({ limit: 100, before: f.first().id }).then(ms => ms.forEach( m => {
                    if (m.author.id == mention) m.delete(10);
                }));
                message.channel.fetchMessages({ limit: 100, before: f.last().id }).then(ms => ms.forEach( m => {
                    if (m.author.id == mention) m.delete(10);
                }));
            });
        }
        return;
    }
    
    
    
    
        
    require('./module/perm.js').load(message);
    
    
    
    const fuNoNyaWebhooks = async () => {
        try {
            let fw = await message.channel.fetchWebhooks();
            if (fw.find('name', 'NoNya!Bot') != undefined)
                NoNyaWebhooks = true;
            else
                NoNyaWebhooks = false;
        } catch (err) {
            NoNyaWebhooks = false;
        }
    var options_pch2 = {
        permissions: ["MANAGE_CHANNELS","MANAGE_WEBHOOKS"],
        message: message,
    }
    var perm_checking = new check_perm(options_pch2);
    perm_checking.check().then(pprm => {
        if (NoNyaWebhooks && !pprm && !(message.author.id == client.user.id) )
            return;
    
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
            
        }
        /*Fin BOT*/
    
        //si c'est une commande, récupérer les arguments, la commande et supprimer le message
            if (message.content.indexOf(prefix) == 0) {
                var iscommand = true;
                var args = message.content.slice(prefix.length).trim().replace(/\n/g," \n").split(/ +/g);
                var command = args.shift().toLowerCase();
        
                message.delete(500)
                    .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                    .catch(console.error);
            }
    
        /*if (message.author == botowner && (!isVs || (message.guild.id == "377892426569744387" && message.channel.name != "nya-bot-vs-log"))) {
            if (Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] != 'NaN') {
                Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].set([String(Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] + 1))]);
        
               if( Math.floor( (Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] ) +1) / 10 ) == (Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0] ) +1)/ 10) {
                    message.channel.send(`Bravo Knose1 tu as ${Number(Database('407142766674575361',['user:','xp:']).get('user:',message.author.id,['xp:'])['xp:'].value[0]) + 1} xp`)
                        .then(msg => msg.delete(10000));
                }
            }
        }*/
    
        //VS
            if (require("./on/messages/vs/error_userBan.js").execute(message, isVs, isbanned) );
            else if (require("./on/messages/vs/error_command.js").execute(message, isVs, iscommand)  );
            else if (require("./on/messages/vs/error_noPfix.js").execute(message, isVs) );
            else if (require("./on/messages/vs/command_nya.js").execute(message, isVs)  );
            else if (require("./on/messages/vs/command_purge.js").execute(message, isVs, Pfx)    );
            else if (require("./on/messages/vs/command_ban.js").execute(message, isVs, isbanned, vsban)  );
            else if (require("./on/messages/vs/command_unban.js").execute(message, isVs, isbanned, vsban)  );
            else if (require("./on/messages/vs/finaly.js").execute(message, isVs, Pfx)   );
     
        
        //RPG
        //else if (require("./on/messages/rpg/index.js").execute(message)    );
        
        //COMMAND
        else if (iscommand == true) {
            
            
           if (command == "github") {
                command = "git";
            }
            if (command == "guilds") {
                command = "serv"
            }
            if (command == "cg") {
                command = "channelget"
            }
            if (command == "emg") {
                command = "emojiget"
            }
            if (command == "mt") {
                command = "mathstest"
            }
            
            //pas de commande -> ne rien faire
            if (command == '') {
            
            return;
            }
            try {
                var funcComm = String(require(`./on/messages/command/${command}/index.js`).execute);
                var toEv = funcComm.slice(7, funcComm.length - 1)/*.replace(/\n/g,"").replace(/ +/g," ")*/;
                //console.log(toEv);
                eval(toEv);
            }
            catch (err) {
            
                    if (String(err).toLowerCase().indexOf(`Cannot find module './on/messages/command/${command}/index.js'`.toLowerCase()) == -1) {
                        message.reply("Une ERREUR est survenue");
                    
                        var cleanERR = fulllog( util.inspect( clean(err), 1500 ) );
                        client.users.get("375378900802338818").send(`__Une ERREUR est survenue:__ \n Auteur: ${message.author}\n Longueur de la commande: ${message.content.length}\n Commande: ${message.content.slice(0,1000)}`);
                    
                        if (undefined != cleanERR[0])
                            client.users.get("375378900802338818").send(cleanERR[0]);
                        if (undefined != cleanERR[1])
                            client.users.get("375378900802338818").send(cleanERR[1]);
                    
                        haderror = true;
                        client.user.setStatus('dnd');
                        client.user.setActivity(`ERROR`,{type: "PLAYING"});
                    
                    } else {
                        if (message.guild.id != '110373943822540800') {
                            message.channel.send('"'+message.content+' "'+" n'est pas une commande")
                                .then(msg => msg.delete(15000));
                        }
                    }
            }
            iscommand = false;
        }
    })
    };
    fuNoNyaWebhooks();
});







//lors de déconection
client.on('disconnect', disconnect => {
    
    client.user.setStatus('invisible');
    console.log('déconnecté');
    var channel = client.channels.get(logserv);
    channel.send('Déconnecté');
})

client.login(key);

/**/
/**/
/**/
/**/
/**/

function haveRole(user,role) {
        var guild = client.guilds.get('430843861326102529');
        
        if (user.id)
            var v1 = guild.members.get(user.id);
        else
            var v1 = guild.members.get(user);
        
        
        if (role.id) 
            return Boolean( v1.roles.get(role.id) );
        else
            return Boolean( v1.roles.get(role) );
}

function resolveAfter(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('');
        },x*1000);
    });
}

bot = new Discord.Client();
bot.setInterval(() => {
    var guild = bot.guilds.get('430843861326102529');
    guild.members.forEach(member => {
         if (haveRole(member,"431001790474092545") || member == botowner) return;
         else if (member.roles.find('name',"Muted")) {
            if (member.roles.find('name',"Mod violation 2") && new Date(new Date() - new Date(member.nickname)) > new Date(0,1,0,0,0,0,0)) {
                if (haveRole(member,guild.roles.find('name','Invalide nickname'))) {
                    member.setNickname("_");
                } else {
                    member.setNickname(member.username);
                }
                member.removeRole(guild.roles.find('name','Muted'));
                member.addRole(guild.roles.find('name','Members'));
            } else if (member.roles.find('name',"Mod violation 1") && new Date(new Date() - new Date(member.nickname)) > new Date(0,0,1,0,0,0,0)) {
                if (haveRole(member,guild.roles.find('name','Invalide nickname'))) {
                    member.setNickname("_");
                } else {
                    member.setNickname(member.username);
                }
                member.removeRole(guild.roles.find('name','Muted'));
                member.addRole(guild.roles.find('name','Members'));
            }
        }
    });
}, 2000)
bot.on('message', message => {
    if (message.author.bot) return;
    if (message.guild) if (message.guild.id != "430843861326102529") return;
    
        function Alert(FUmess) {
            this.report = FUmess;
            this.message = FUmess;
            this.type = "alert";
            this.channel = message.channel;
            this.user = message.author;
            this.send = function() {
                if (this.type == "alert")
                    this.channel.fetchWebhooks().then(FW => {
                        
                        if (FW.find('name','Warning') == undefined) {
                            this.channel.createWebhook("Warning","https://media.discordapp.net/attachments/407271018516971532/431071685609783296/a62382b45276d7fe3b01f4e0c7c2f072.png");
                        } else if (this.message)
                            FW.find('name','Warning').send(this.message);
                    });
                else if (this.type == "report")
                    this.channel.fetchWebhooks().then(FW => {
                        
                        if (FW.find('name','Warning') == undefined) {
                            this.channel.createWebhook("Warning","https://media.discordapp.net/attachments/407271018516971532/431071685609783296/a62382b45276d7fe3b01f4e0c7c2f072.png");
                        } else if (this.message)
                            FW.find('name','Warning').send(this.message);
                       
                        try {
                           this.user.send(this.report);
                        } catch (err) {}
                    });
            }
            this.setMessage = function(a) {
                this.message = a
                return this
            }
            this.setType = function(a) {
                this.type = a
                return this
            }
            this.setChannel = function(a) {
                this.channel = a
                return this
            }
            this.setUser = function(a) {
                this.user = a
                return this
            }
            this.setReport = function(a) {
                this.report = a
                return this
            }
            return this;
        }
        
        //Augmenter le modViolation
        function increaseMod(Reason) {
            
                message.guild.fetchMember(message.author).then(member => {
                    if (message.channel.name == "get-member-role") {
                        Reason = "Mod violation on spawn, " + Reason;
                        async function FireBan() {
                            Alert()
                                .setType("report")
                                .setReport(`Your mod violation level curently is 4: Ban 7 days\n\n Reason: ${Reason}`)
                                .send();
                            await resolveAfter(1);
                            member.ban({days:7,reason:Reason});
                        }
                        FireBan();
                        return;
                            
                    } else {
                    
                    var modViolation = 0.5;
                    var vvv = true
                    while (modViolation < 4 && vvv) {
                        vvv = member.roles.find('name',`Mod violation ${modViolation}`);
                        
                        //message.channel.send(Boolean(vvv != undefined) + "\n" + typeof(vvv));
                        
                        if (!vvv && modViolation < 4) 
                            member.addRole(message.guild.roles.find('name',`Mod violation ${modViolation}`));
                        else 
                            modViolation *=2;
                    }
                    //console.log("Ok first");
                    var modType = "";
                    if (modViolation == 1) {
                        modType = ": Mute 1 day";
                        member.setNickname( String(Number(new Date())) );
                        member.addRole(message.guild.roles.find('name','Muted'));
                        member.removeRole(message.guild.roles.find('name','Members'));
                    }
                    else if (modViolation == 2) {
                        modType = ": Mute 1 month";
                        member.setNickname( String(Number(new Date())) );
                        member.addRole(message.guild.roles.find('name','Muted'));
                        member.removeRole(message.guild.roles.find('name','Members'));
                    }
                    else if (modViolation == 4)
                        modType = ": Ban 7 days";
                        
                    //console.log("Ok Final");
                    Alert(`${message.author.toString()} ${Reason}, your mod violation level has been increased`)
                        .setType("report")
                        .setReport(`Your mod violation level curently is ${modViolation}${modType}\n\n Reason: ${Reason}`)
                        .send();
                    //console.log("Ok Alert");
                    if (modViolation == 4)
                        member.ban({days:7,reason:"4rd mod violation"});
                    }
                });
        }
    	if (message.guild && !(haveRole(message.author,"431001790474092545") || message.author == botowner)) {
            
            //Reglement
            if (message.content.toLowerCase().indexOf("https://discordapp.com/invite/") > -1 || message.content.toLowerCase().indexOf("discord.gg") > -1 || message.content.toLowerCase().indexOf("discordapp.com/oauth2") > -1 || message.content.toLowerCase().indexOf("discordapp.com\oauth2") > -1) {
                message.delete(500);
                increaseMod("invite links are not allowed");
				return;
            } 
            var Bad_words = ["fuck","nigger","pussy","vaggina","penis"];
            
            Bad_words.map(BW => {
                var scoreBW = 0;
                var BWG = / eval(BW) /g;
                if (message.content.toLowerCase().indexOf(BW) > -1)
                    scoreBW = message.content.toLowerCase().match(BWG).length;
                if (message.content.indexOf(" " + BW + " ") > -1)
                    scoreBW = 100;
                return scoreBW;
            });
            var nbBW = 0;
            Bad_words.forEach(m)
            if (nbBW > 15) {
                message.delete(500);
                increaseMod("watch your language");
				return;
            }
                
        } if (message.guild && message.channel.name == "get-member-role") {
        
            message.guild.fetchMember(message.author).then(member => {
                if (member.roles.find('name','Members') == undefined) {
                    member.addRole(message.guild.roles.find('name','Members').id);
                    message.delete(50);
                    message.guild.channels.find('name',"welcome").fetchWebhooks().then(fw =>
                            fw.get("431075044639375360").send(`Welcome ${message.author.toString()}`)
                    )
                }
            });
        
        } if (message.author == botowner) {
        
            if(!message.guild) {
                if (message.content.toLowerCase() == "clear") {
                    message.channel.fetchMessages({ limit: 100 }).then(f => {
                        message.channel.fetchMessages({ limit: 100, before: f.first().id }).then(ms => ms.forEach( m => {
                            if (m.author.id == bot.user.id) m.delete(10);
                        }));
                        message.channel.fetchMessages({ limit: 100, before: f.last().id }).then(ms => ms.forEach( m => {
                            if (m.author.id == bot.user.id) m.delete(10);
                        }));
                    });
                }
            } else if (message.content.indexOf("CD_") == 0) {
                
                message.delete(500);
                message.channel.send(message.content.slice("CD_".length));
            
            }
            
        
        } if (message.content.indexOf("!CD_purge") == 0 && (haveRole(message.author,"431001790474092545") || message.author == botowner)) {
			
            if (message.content.slice("!CD_purge".length).trim().length != 0) {
                if ("NaN" != String(Number( message.content.slice("!CD_purge".length).trim() )) ) {
                    if ( Math.floor( Number(message.content.slice("!CD_purge".length).trim() ) ) <= 100 && Math.floor( Number(message.content.slice("!CD_purge".length).trim() ) ) > 0 ) {     
                        message.delete(500);
                        message.channel.fetchMessages({before: message.id, limit: Math.floor( Number(message.content.slice("!CD_purge".length).trim() ) ) }).then(ms => ms.forEach( m => {
                            m.delete(10);
                        }));
                    } else {
                        message.channel.send("Please enter a number between 1 and 100").then(m => m.delete(8000))
                    }
                } else {
                    message.channel.send("Please enter a number to purge").then(m => m.delete(8000))
                }
            } else {
                message.channel.send("Please enter a number to purge").then(m => m.delete(8000))
            }
			
			message.delete(500);
        } if (message.content.indexOf("!CD_avatar") == 0) {
            var args = message.content.slice("!CD_purge".length).trim().replace(/\n/g," \n").split(/ +/g);
            message.channel.send(args.join);
            try {
                if(args[0]) {
                    if (message.mentions) {
                        if (message.mentions.users.array().length > 0) {
                            message.channel.send(message.mentions.users.first().avatarURL);
                    
                        } else if(bot.users.find('tag',args[0])) {
                            message.channel.send(bot.users.find('tag',args[0]).avatarURL);
                        } else if(bot.users.find('username',args[0])) {
                            message.channel.send(bot.users.find('tag',args[0]).avatarURL);
                        }
                    
                    } else if(bot.users.find('tag',args[0])) {
                        message.channel.send(bot.users.find('tag',args[0]).avatarURL);
                    } else if(bot.users.find('username',args[0])) {
                        message.channel.send(bot.users.find('tag',args[0]).avatarURL);
                    }
                } else message.channel.send(message.author.avatarURL);
            } catch (err) {
                message.channel.send("The user don't exist");
            }
            message.delete(500);
        }
});

bot.login(﻿process.env.TK2);
