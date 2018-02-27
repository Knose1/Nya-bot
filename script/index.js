const Discord = require('discord.js');
const util = require('util');
const client = new Discord.Client();

import './functions.js';
import './config.js';
const catimg = require('./on/messages/command/cat/images.js').load(3);

var invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=67628096';


//lorsque Nya!bot est pret
client.on('ready', () => {
    client.user.setStatus('online');
    
    CanReloading = true;
    console.log(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    //envoyer un message au server log
    var channel = client.channels.get(logserv);
    channel.send(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    client.user.setGame(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`);

    import '/modules/servban.js';
    
    client.channels.get('406802264540315648').send(`--Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    
});

//Lorsque il a rejoins un serv
client.on("guildCreate", guild => {
  console.log(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
  var channel = client.channels.get(logserv);
  channel.send(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
  
  import '/modules/servban.js';
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
    import '/modules/servban.js';
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
    
    import '/modules/perm.js';
    
    
    
    
	
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
        }
        else {
            return;
        }
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
    
    
    
    
    
    
    
    /*Virtual Channel*/
    
    import '/on/messages/vs/suffix.js';
    
    
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
    
    //Si (Personne Ban)
    if (isVs && isbanned == true  && message.author.id != mention  && message.author != botowner) {
        message.author.sendMessage(message.author+' vous êtes ban du Virtual server et ne pouvez donc pas parler dans le VS');
        message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    
    //Si (Commande Nya!bot)
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
        message.author.send(message.author+' les commandes sont interdits dans se channel');
        message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    //Si (pas de -- et pas de //)
    else if (
                ( //Un channel nya!bot VS
                isVs
                    || 
                    ( //ou le serveur log de nya!bot
                    message.guild.id == "377892426569744387" && 
                    message.channel.name == "nya-bot-vs-log"
                    )
                ) && 
                (
                //Si ce n'est pas nya!bot
                message.author.id != mention &&
                    (
                        (//S'il n'y a pas d'attachement et qu'il n'y a pas le préfix du VS
                        message.attachments.size == 0 &&
                        message.content.indexOf('--') != 0 && 
                        message.content.indexOf('//') != 0 
                        )
                          || 
                        (//S'il y a au moin un attachement et un text mais que le txt n'as pas le préfix du VS
                        message.attachments.size != 0 &&
                        message.content.length != 0 &&
                        message.content.indexOf('--') != 0 &&
                        message.content.indexOf('//') != 0
                        )
                    )
                )
            ){
        
        message.author.send(message.author+' utilisez -- ou // pour parler dans le vs');
        message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    /*On envoie des messages en tant que nya!bot*/
    
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--nya') == 0 || message.content.indexOf('--Nya') == 0 || message.content.indexOf('//nya') == 0 || message.content.indexOf('//Nya') == 0) && (message.author == botowner || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        args.shift().toLowerCase();
        
        message.channel.send("--"+args.join(' '));
        message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Nya Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    /*FIN DE --NYA*/
    
    /*On vas purge car c'est l'enfer*/
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name != "nya-bot-vs-log")) && (message.content.indexOf('--suppr') == 0 || message.content.indexOf('--Suppr') == 0 || message.content.indexOf('//suppr') == 0 || message.content.indexOf('//Suppr') == 0 || /**/ message.content.indexOf('--purge') == 0 || message.content.indexOf('--Purge') == 0 || message.content.indexOf('//purge') == 0 || message.content.indexOf('//Purge') == 0) && (message.author == botowner || isMod)) {
        let Nmessage = message;
        let args = message.content.slice('--suppr'.length).trim().split(/ +/g);
        /*if (Pfx == 'nsfw') {
            message.author.send('Tu ne peux pas purge le nsfw');
            message.delete(1000)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                .catch(console.error);
            return;
        }*/
        if (args.length == 1) {
            if (String(Number(args[0])) != 'NaN') {
                if ( message.author != botowner && (Number(args[0]) < 1 || Number(args[0]) > 10)) {
                    message.author.send('Nan mais wtf pk tu veux purge un tel nombre de message ! -.-');
                    message.delete(1000)
                        .then(msg => console.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                        .catch(console.error);
                    return;
                } else if (message.author == botowner && (Number(args[0]) < 1 || Number(args[0]) > 49)) {
                    message.author.send('Nan mais wtf pk tu veux purge un tel nombre de message ! -.-');
                    message.delete(1000)
                        .then(msg => console.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
                        .catch(console.error);
                    return;
                }
                let i = Number(args[0]);
                
                var all_vs = new Array();
                client.guilds.forEach(guild => {
			        //Pour chaque channel
            
                    guild.channels.forEach(channel => {
                        //On regarde s'il se nome nya-bot-vs + préfix (sans log serv)
                        if (channel.name == "nya-bot-vs"+Pfx || channel.name == "nya-bot-vs-"+Pfx) 
                            all_vs.push(channel); 
                
                    });
                });
                
                all_vs.forEach(ch => {
                    if (ch.type == 'text')
                        ch.fetchMessages().then(m => {
                            let a = 0;
                            if (ch == message.channel)
                                a = 1;
                            
                            m.first(i + a).forEach(p => {
                                try {p.delete(500)} catch (err) {}
                            });
                        });
                });
                
                client.channels.get('414179723720130560').send(`${Nmessage.author.username}#${Nmessage.author.discriminator} à utilisé **--purge** dans le channel ${message.channel.name}: '${Nmessage.content}'`);
            } else {
                message.author.send(`__Error, vous n'avez pas entré de nombre; **Utilisation --suppr** :__\n\n \`//suppr <nombre>\` \n\n alias: \`//purge <nombre>\``);
            }
        } else {
            message.author.send(`__Utilisation **--suppr**:__\n\n \`//suppr <nombre>\` \n\n alias: \`//purge <nombre>\``);
        }
        message.delete(1000)
            .then(msg => console.log(`Message supprimé, raison: Virtual channel --suppr; Auteur: ${msg.author}`))
            .catch(console.error);
    }
    /*Fin de purge*/
    
    /*ON VAS BAN DES GENS !!! */
    
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--ban') == 0 || message.content.indexOf('--Ban') == 0 || message.content.indexOf('//ban') == 0 || message.content.indexOf('//Ban') == 0) && (message.author == botowner || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase();
        var guild = client.guilds.get('406926403628695556');
        // On regarde pour chaque argument
        var stop = 0;
        args.forEach(id => {
            if (stop == 0) {
                var isgood = false;
                var foundedOne = 0;
                //Si la personne à mis 2 fois le même ID en arg
                args.forEach( id2 => {
                    if (id == id2 && foundedOne == 0) {
                        foundedOne = 1;
                    }
                    else if (id == id2 && foundedOne == 1 && stop == 0) {
                        message.author.send('Impossible d\'executer la commande `--ban`: un argument à été trouvé en __doublon__');
                        stop = 1;
                        return;
                    }
                });
                //On regarde si la personne existe
                client.users.forEach(user => {
                    if (user.id == id && stop == 0) {
                        isgood = true;
                    }
                });
            
                if (isgood == true) {
                    //Si la personne est déjà ban
                    vsban.forEach(banned => {
            
                        //Si la personne est déja ban
                        if (id == banned) {
                            message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+' est déja ban');
                            isgood = false;
                        }
                    });
                } else if (stop == 0) {
                    message.author.send(`L'id  \`${id}\`  est introuvable`);
                }
            
                if (isgood == true) {
                    //On regarde si les conditions pour ban la personnes (qui n'est pas ban) sont ok:

                        //Si la personne esseille de se ban lui-même
                            if (id == message.author.id) {
                                message.author.send('Vous ne pouvez pas vous ban vous-même');
                                isgood = false;
                            }
                        
                            //Si l'utilisateur est un modérateur mais que ce n'est pas l'owner du bot
                            else if (message.author != botowner && isMod) {
                                
                                var banIsMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(id);
                                
                                //Si l'utilisateur esseille de ban l'owner
                                if ("<@"+id+">" == botowner) {
                                    message.author.send('L\'owner du nya!bot ne peux ni être ban ni être unban\'');
                                    isgood = false;
                                }
                                //Si l'utilisateur esseille de ban un modérateur
                                else if (banIsMod) {
                                    message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est un modérateur du nya!bot, vous ne pouvez pas le ban');
                                    isgood = false;
                                }
                            }
                    /*Fin de conditions de ban*/
                }
			
                if (client.users.get(id) != undefined && isgood == true && stop == 0) {
                    //console.log("id = "+id);
                    //console.log(client.users.get(id));
                    guild.createRole({
                        name: id,
                    })
                    //.then(role => console.log(`Created role ${role}`))
                    .catch(console.error);
                    var banuser = client.users.get(id);
                    var channel = client.channels.get('407169845889597440');
                    channel.send('Personne banni du VS: '+banuser.username+"#"+banuser.discriminator+" ("+id+")");
                }
            }
        });
	message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    /*Fin du BAN*/
	
    
    
    
    /*DEBUT DU UNBAN*/
    
    else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--unban') == 0 || message.content.indexOf('--Unban') == 0 || message.content.indexOf('//unban') == 0 || message.content.indexOf('//Unban') == 0) && (message.author == botowner || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase(); //On retire le "unban" en début de commande
        
        var guild = client.guilds.get('406926403628695556');
        // On regarde pour chaque argument
        var stop = 0;
        args.forEach(id => {
            if (stop == 0) {
                var undefvar = 0;
                var isgood = false;
                var foundedOne = 0;
                //Si la personne à mis 2 fois le même ID en arg
                args.forEach( id2 => {
                    if (id == id2 && foundedOne == 0) {
                        foundedOne = 1;
                    }
                    else if (id == id2 && foundedOne == 1 && stop == 0) {
                        message.author.send('Impossible d\'executer la commande `--unban`: un argument à été trouvé en __doublon__');
                        stop = 1;
			return;
                    }
                });
                //On regarde si la personne existe
                client.users.forEach(user => {
                    if (user.id == id) {
                        isgood = true
                    }
                });
            
                if (isgood == true && stop == 0) {
                
                    isgood = false;
                    vsban.forEach(banned => {
                    
                        //On regarde si la personne est dans la liste de ban
                        if (id == banned) {
                            isgood = true;
                        }
                    });
                } else if (stop == 0) {
                    message.author.send(`L' id '${id}'est introuvable`);
                    var undefvar = 1;
                }
                if (isgood == true && stop == 0) {
                    //On regarde si les conditions pour unban la personnes (qui est ban) sont ok:
                    
                        //Si la personne esseille de s'unban lui-même
                            if (id == message.author.id) {
                                message.author.send('Vous ne pouvez pas vous unban vous-même');
                                isgood = false;
                            }
                
                            //Si l'utilisateur est un modérateur mais que ce n'est pas l'owner du bot
                            else if (message.author != botowner && isMod) {
                
                                var banIsMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(id);
                
                                //Si l'utilisateur esseille de unban l'owner
                                if ("<@"+id+">" == botowner) {
                                    message.author.send('L\'owner du nya!bot ne peux ni être ban ni être unban\'');
                                    isgood = false;
                                }
                                //Si l'utilisateur esseille de unban un modérateur
                                else if (undefined != banIsMod) {
                                    message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est un modérateur du nya!bot, vous ne pouvez pas l\'unban');
                                    isgood = false;
                                }
                            }
                    /*Fin de conditions de unban*/
                } else if (undefvar == 0 && stop == 0) {
                    var user = client.users.get(id);
                    message.author.send(`${user.username}#${user.discriminator} n'est pas ban`);
                }
			    
                if (client.users.get(id) != undefined && isgood == true && stop == 0) {
                    //console.log("id = "+id);
                    //console.log(client.users.get(id));
                    guild.roles.find('name', id).delete()
                        //.then(r => console.log(`Deleted role ${r}`))
                        .catch(console.error);
                    
    				var unbanuser = client.users.get(id);
                    var channel = client.channels.get('407169845889597440');
                    channel.send('Personne unbaned du VS: '+unbanuser.username+"#"+unbanuser.discriminator+" ("+id+")");
                }
            }
        });
	message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Unban Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    /*Fin du UNBAN*/
    
    
    
    
    //Commande-VS = Ok
    else if     (
                    (
                        isVs || 
                        (
                            message.guild.id == "377892426569744387" && 
                            message.channel.name == "nya-bot-vs-log"
                        )
                    ) //Conditions du channel (nya-bot-vs)
                        && 
                    (
                        message.content.indexOf('--') == 0 ||   /**/
                        message.content.indexOf('//') == 0 ||   /*Préfix ou attachement*/
                        message.attachments.size != 0 &&        /**/
                        (
                            message.content.length == 0 //Si c'est un attachement sans préfix il faut pas de contenu
                        )
                    )
                ){
    if (message.content.indexOf('//') == 0){
        var words = message.content.slice('//'.length).trim().split(/ +/g);
    }
    else {
        var words = message.content.slice('--'.length).trim().split(/ +/g);
    }
    
    //On regarde s'il y a une image à ajouter à l'embed
    var vsIsImage = false;
    var wordsIndex = -1;
    var newwords = new Array();
    var vsImage = new Array();
    var yLink = false;
    var vEqual = new String();
    if (message.attachments.size == 0) {
        words.forEach(word => {
            wordsIndex = wordsIndex + 1 ;
   //YT avec des ' // '
            //Si c'est une video Youtube cas 1
            if (!vsIsImage && word.indexOf('//img:https://www.youtube.com/watch?v=') == 0) {
                vsImage = word.slice('//img:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
                
            }
            //Si c'est une video Youtube cas 2
            else if (!vsIsImage && word.indexOf('//yt:https://www.youtube.com/watch?v=') == 0) {
                vsImage = word.slice('//yt:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 3
            else if (!vsIsImage && word.indexOf('//yt:v=') == 0) {
                vsImage = word.slice('//yt:v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 4
            else if (!vsIsImage && word.indexOf('//yt:https://youtu.be/') == 0) {
                vsImage = word.slice('//yt:https://youtu.be/'.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 5
            else if (!vsIsImage && word.indexOf('//img:https://youtu.be/') == 0) {
                vsImage = word.slice('//img:https://youtu.be/'.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
   //YT avec des ' -- '
            //Si c'est une video Youtube cas 1
            if (!vsIsImage && word.indexOf('--img:https://www.youtube.com/watch?v=') == 0) {
                vsImage = word.slice('--img:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
                
            }
            //Si c'est une video Youtube cas 2
            else if (!vsIsImage && word.indexOf('--yt:https://www.youtube.com/watch?v=') == 0) {
                vsImage = word.slice('--yt:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 3
            else if (!vsIsImage && word.indexOf('--yt:v=') == 0) {
                vsImage = word.slice('--yt:v='.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 4
            else if (!vsIsImage && word.indexOf('--yt:https://youtu.be/') == 0) {
                vsImage = word.slice('--yt:https://youtu.be/'.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est une video Youtube cas 5
            else if (!vsIsImage && word.indexOf('--img:https://youtu.be/') == 0) {
                vsImage = word.slice('--img:https://youtu.be/'.length).trim().split(/ +/g);
                vEqual = vsImage[0];
                vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                vsIsImage = true;
                yLink = true;
            }
            //Si c'est un lien autre que YT
            else if (!vsIsImage && word.indexOf('//img:http') == 0) {
                vsImage = word.slice('//img:'.length).trim().split(/ +/g);
                vsImage = vsImage[0];
                vsIsImage = true;
            }
            else if (!vsIsImage && word.indexOf('--img:http') == 0) {
                vsImage = word.slice('--img:'.length).trim().split(/ +/g);
                vsImage = vsImage[0];
                vsIsImage = true;
            }
            if (!vsIsImage) {newwords[wordsIndex] = word;}
        });
    } else {
        message.attachments.forEach(attachment => {
            wordsIndex = wordsIndex + 1 ;
            vsImage[wordsIndex] = attachment.url;
        });
        vsImage = vsImage.join('\n');
        vsIsImage = true;
        newwords = words;
    }
    if (vsIsImage && yLink) {
        var vsmessage = newwords.join(' ') + "\n\n" + "https://www.youtube.com/watch?v=" + vEqual;
    }
    else if (vsIsImage) {
        var vsmessage = newwords.join(' ') + "\n\n" + vsImage;
    } else {
        var vsmessage = words.join(' ');
    }
        //On créer un embed
        
        var nbmois = new Date().getMonth();
	    nbmois = nbmois+1;
        const embed = new Discord.RichEmbed()
            //.setTitle("Virtual Channel")
            .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
            .setColor("#ff1a8c")
            .setDescription(vsmessage)
            .setFooter("Le "+new Date().getDate()+"/"+ nbmois+"/"+new Date().getFullYear()+" à "+new Date().toLocaleTimeString()+" | "+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
            .setThumbnail(message.author.avatarURL);
        
        if (vsIsImage) {
            embed.setImage(vsImage);
        }
		
        if (message.author.bot == true) {
            embed.setAuthor("BOT: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/407272279416766475/BOT.png");
            if (message.author.id == mention) {embed.setColor("#DD00FF");}
            else {embed.setColor("#FFFFFF");}
        }
        else if (message.author == botowner) {
            embed.setAuthor("OWNER: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/409108259069231115/Owner.png");
            embed.setColor("#D84D35");
        }
        else if (isMod) {
            embed.setAuthor("MOD: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/409108258989539349/Mod.png");
            embed.setColor("#0077DD");
        }
        else if (isBTest) {
            embed.setAuthor("β-Testeur:"+message.author.username+"#"+message.author.discriminator);
            embed.setColor("#ff8c1a");
        }
		else if (isADev) {
            embed.setAuthor(message.author.username+"#"+message.author.discriminator);
            embed.setColor("#2ecc71");
        }
        
        /*Fin embed*/
        
        //Pour chaque serv:
        const ci = () => {
            var tr;
            try {
                tr = Database('415208185616531456', ['count:'])['count:'].length;
            } catch (err) {
                tr = 0;
            }
            return tr;
        };
        var cid = ci();
        var countMess = 0;
        var IdMess = 0;
        /*var countR = client.guilds.get('415208185616531456').createRole({
            name: `count:${cid} ${countMess}`,
            color: 'GOLD',
        })*/
        
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                if (channel.name == "nya-bot-vs"+Pfx || channel.name == "nya-bot-vs-"+Pfx ) {
                    
                    
                    //On envoie l'embed
                    channel.send({embed})
                    /*.then(msg => {
                        client.guilds.get('415208185616531456').createRole({
                            name: `mess ${cid}:${IdMess} ${msg.id}`,
                            color: 'BLUE',
                            });
                        IdMess += 1;
                    });
                    countMess += 1;
                    countR.then(role => {role.edit({
                        name: `count:${cid} ${countMess}`,
                        color: 'GOLD',
                        })
                    });*/
                }
                else if (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log" && Pfx != 'nsfw') {
                    
                    
                    //On envoie l'embed
                    channel.send(`__Virtual Channel: ${Pfx}__`,{embed})
                    /*.then(msg => {
                        client.guilds.get('415208185616531456').createRole({
                            name: `mess ${cid}:${IdMess} ${msg.id}`,
                            color: 'BLUE',
                            });
                        IdMess += 1;
                    });
                    countMess += 1;
                    countR.then(role => {role.edit({
                        name: `count:${cid} ${countMess}`,
                        color: 'GOLD',
                        })
                    });*/
                }
            });
		});
    message.delete(1000)
        .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
        .catch(console.error);
	}
	
    /*End of Virtual Channel*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* RPG */
    else if (message.content.indexOf('cat-') == 0) {
        let isWhitelisted = Database('407142766674575361',['user:','whitelist:']).get('user:', String(message.author.id), ['whitelist:']);
        if (isWhitelisted != undefined) {
            if(isWhitelisted['whitelist'] != undefined) {
                isWhitelisted = ('true' == isWhitelisted['whitelist'].value[0]);
            }
        }
        if  ( 
                (betaTest == 'off') ||
                (betaTest == 'on' && (isBTest || (isWhitelisted))) //Si le RPG est en vertion Test il faut être Béta testeur
            ) {

            //on récupère les arguments
            var args = message.content.slice('cat-'.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
            
            if (command = 'db' && (message.author == botowner || isWhitelisted) && args[0] != undefined) {
                if (args[0].toLowerCase() == 'display') {
                    
                }
                else if (args[1] != undefined && args[2] != undefined && args[0].toLowerCase() == 'execute') {
                    var arg1Defaut = args[1];
                    var arg1 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    
                    var arg2Defaut = args[2];
                    var arg2 = args[2].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    
                    if (args[3] != undefined) {
                    var arg3Defaut = args[3];
                    var arg3 = args[3].replace(/```/g,"\\\`\\\`\\\`");
                    } else {
                    var arg3Defaut = args[1];
                    var arg3 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    }
                    
                    var ctbe = `\
:tools:  __**Code to be executed :**__\n\
\`\`\`javascript\n\
Database('407142766674575361',${arg1});\n\
Database('407142766674575361',${arg1}).get(${arg1}[0],'${arg2}',${arg3});\`\`\`\n\
:speech_left:  __**Result 1 :**__`;
                    
                    arg1Defaut = arg1Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    arg2Defaut = arg2Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    arg3Defaut = arg3Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    var result1 = TestDatabase(arg1Defaut,'noFunction');
                    if (result1[1] == '') {
                        var error2 = '';
                        if ('' != TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[1]) {
                            error2 = `:exclamation: __**Error log:**__\n\
\`\`\`${TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[1]}\`\`\``;
                        }
                        
                        message.channel.send(ctbe+'\n'+`\`\`\`javascript\n\
${util.inspect( result1[0] )}\`\`\`\n\
:speech_left:  __**Result 2 :**__\n\
\`\`\`javascript\n\
${util.inspect( TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[0] )}\`\`\`\n\
`+error2);
                        
                    } else {
                        message.channel.send(ctbe+'\n'+`\`\`\`javascript\n\
Undefined\`\`\`\n\
:exclamation: __**Error log:**__\n\
\`\`\`${ result1[1] }\`\`\``);
                    }
                }
                else if (args[0].toLowerCase() == 'set' && args[1] != undefined && args[2] != undefined && args[3] != undefined && args[4] != undefined) {
                    
                    /*Type = array*/
                    var arg1Defaut = args[1];
                    var arg1 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    arg1Defaut = arg1Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    /*Type = string*/
                    var arg2Defaut = args[2];
                    var arg2 = args[2].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    arg2Defaut = arg2Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    
                    /*Type = string*/
                    var arg3Defaut = args[3];
                    var arg3 = args[3].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    arg3Defaut = arg3Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    
                    /*Type = array*/
                    var arg4Defaut = args[4];
                    var arg4 = args[4].replace(/```/g,"\\\`\\\`\\\`");
                    arg4Defaut = arg4Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    /*Type = array*/
                    if (args[5] != undefined) {
                        var arg5Defaut = args[5];
                        var arg5 = args[5].replace(/```/g,"\\\`\\\`\\\`");
                    } else {
                        var arg5Defaut = args[1];
                        var arg5 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    }
                    arg5Defaut = arg5Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    
                    
                    var ctbe = `\
:tools:  __**Code to be executed :**__\n\
\`\`\`javascript\n\
TestDatabase(${arg1},'noSet').get(${arg1}[0],'${arg2}',${arg5})['${arg3}'].set(${arg4});\`\`\`\n\
:speech_left:  __**Console :**__`;
                
                    if (TestDatabase(arg1Defaut,'noFunction')[1] == '') {
                        
                        if('' == TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[1]) {
                            
                            if (TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[0][arg3Defaut] != undefined ){
                                
                                message.channel.send(ctbe+"\n```"+TestDatabase(arg1Defaut)[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[0][arg3Defaut].set(arg4Defaut)+"```");
                            }
                            else {
                                message.channel.send(ctbe+"\n"+`\`\`\`Error: ${arg3Defaut} not found at Database().get()[${arg3Defaut}] \`\`\``);
                            }
                        } else {
                            message.channel.send(ctbe+"\n"+'```'+TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[1]+'```');
                        }
                        
                    } else {
                        message.channel.send(ctbe+"\n"+'```'+TestDatabase(arg1Defaut,'noFunction')[1]+'```');
                    }
                }
                
                //HELP Utilisation des commandes
                else {
                    message.channel.send('__**use of cat-db :**__ \n\n\
    `cat-db execute <array1> <string> [array2]` \n\
        ```javascript\n\
        //If array2 isn\'t set, array1 will set array2 \n\
        console.log(TestDatabase(<array1>,\'noFunction\')); \n\
        console.log(TestDatabase(<array1>,\'noSet\').get(<array1>[0], <string>, [array2]));```\n\
\n\
    `cat-db set <array1> <string1> <string2> <array2> [array3]` \n\
        ```javascript\n\
        //If array3 isn\'t set, array1 will set array3 \n\
        TestDatabase(<array1>).get(<array1>[0], <string1>, [array3])[<string2>].set(<array2>);```')
                    .then(msg => msg.delete(60000));
                }
            }
            else if (command = 'db' && (message.author == botowner || isWhitelisted) && args[0] == undefined) {
                message.channel.send('__**use of cat-db :**__ \n\n\
    `cat-db execute <array1> <string> [array2]` \n\
        ```javascript\n\
        //If array2 isn\'t set, array1 will set array2 \n\
        console.log(TestDatabase(<array1>,\'noFunction\')); \n\
        console.log(TestDatabase(<array1>,\'noSet\').get(<array1>[0], <string>, [array2]));```\n\
\n\
    `cat-db set <array1> <string1> <string2> <array2> [array3]` \n\
        ```javascript\n\
        //If array3 isn\'t set, array1 will set array3 \n\
        TestDatabase(<array1>).get(<array1>[0], <string1>, [array3])[<string2>].set(<array2>);```')
                .then(msg => msg.delete(60000));;
            }
            else {
                /*J'ai pas de compte 0.0 INSCRIT TOI ESCLAVE ! xD*/
                
                //var Userdb = TestDatabase(['user:'],'')[0].get('user:', message.author.id, ['']);
                //if (Userdb[1] != '') {
                    //TestDatabase(['user:'],'').createForEach('user',[], [datas]);/*ICI ICI ICI ICI ICI*//*Aussi: créer la fonction*/
                    message.delete(500)
                        .then(msg => console.log(`Message supprimé, raison: rpg; Auteur: ${msg.author}`))
                        .catch(console.error);
                //}
                /*Fin de "J'ai pas de compte"*/
                
            }
        } else {
            message.channel.send('Désolé le RPG nya!bot est en vertion béta test')
                .then(msg => msg.delete(5000));
            
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: rpg; Auteur: ${msg.author}`))
                .catch(console.error);
            
        }
    }
    /* FIN DE RPG */
    
    
    
    
  
    
    
    
    
    
    /*Commandes*/
    
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
