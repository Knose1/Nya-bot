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
    else if (require("./on/messages/rpg/index.js").execute(message)    );
    
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
            var toEv = `${funcComm.slice(7, funcComm.length - 1).replace(/\n/g,"")/*.replace(/ +/g," ")*/} ;console.log(g)`;
            eval(toEv);
        }
        catch (err) {
            
                if (String(err).indexOf("Cannot find module") == -1) {
                    message.channel.send("Une ERREUR est survenue");
                    console.log(err);
                } else {
                    if (message.guild.id != '110373943822540800') {
                        message.channel.send('"'+message.content+' "'+" n'est pas une commande")
                            .then(msg => msg.delete(15000));
                    }
                }
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
