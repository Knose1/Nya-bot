require('./config.js').load();

var errorCount = 0

myEmitter.on('error', (err) => {
    
    var e = err.error || err;
    try {
        if  (String(e).split("\n")[0].indexOf("Unknown Message") > -1) {
            err = {
                light: true, error: e
            }
        }
        
        //message.reply("Une ERREUR est survenue");
        
        var cleanERR = fulllog( util.inspect( clean(e), 1500 ) );
        
        if (undefined != cleanERR[0]) {
            client.channels.get(consoleChannel).send("```" + cleanERR[0] + "```");
            client.channels.get(errorChannel).send("```" + cleanERR[0] + "```");
        }
        if (undefined != cleanERR[1]) {
            client.channels.get(consoleChannel).send("```" + cleanERR[1] + "```");
            client.channels.get(errorChannel).send("```" + cleanERR[1] + "```");
        }
        
        if (!err.light) {
            errorCount += 1
            if (errorCount > 3) {
                haderror = true;
                client.user.setStatus('dnd');
                client.user.setActivity(`ERROR`,{type: "PLAYING"});
            } else if (errorCount > 100) {
                client.destroy();
            }
        }
    
    } catch(e) {}
});

myEmitter.on('log', (log) => {
    try {
        var cleanLog = fulllog( util.inspect( clean(log), 1500 ) );

        if (undefined != cleanLog[0]) {
            client.channels.get(consoleChannel).send("```" + cleanLog[0] + "```");
        }
        if (undefined != cleanLog[1]) {
            client.channels.get(consoleChannel).send("```" + cleanLog[1] + "```");
        }
  
    } catch(e) {}
});

var mainMessage = () => {
    //status check
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

    //If dm message
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

    var funcComm2 = String(require(`./on/messages/webhook/noNyaBotBefore.js`).execute);
    var toEv2 = funcComm2.slice(7, funcComm2.length - 1);
    //Nya.log(toEv);
    eval(toEv2);
    
    message.channel.fetchWebhooks().then(fw => {
        //execution de l'autorole
        /*if (!message.author.bot && fw.array().filter( f => f.name.indexOf('messAutoRole ') == 0 && message.guild.roles.exists('id', f.name.slice('messAutoRole '.length)) ).length > 0) {
            fw.array().filter( f => f.owner.id == client.user.id && f.name.indexOf('messAutoRole ') == 0 && message.guild.roles.exists('id', f.name.slice('messAutoRole '.length)) ).forEach(webhook => {
                message.guild.member(message.author).addRole(webhook.name.slice('messAutoRole '.length), "Autorole").then()
                    .catch(e => {message.channel.send("I don't have MANAGE_ROLES permission or the role is higher than mine").then(m => m.delete(15000))} )
            });
            message.delete(100);
        
        } else {*/
            //Execution par défaut
            try {

            if (fw.find('name', 'NoNya!Bot') != undefined)
                NoNyaWebhooks = true;
            else
                NoNyaWebhooks = false;
            } catch (e) {
                NoNyaWebhooks = false;
            }

            var options_pch2 = {
                permissions: ["MANAGE_CHANNELS","MANAGE_WEBHOOKS"],
                message: message,
            }

            check_perm(options_pch2)().then(pprm => {

                //Si ce n'est pas le nya!bot , qu'il n'as pas les perms et que le webhook est activé : Bang Bang ! Tu ne poourra pas acceder à la commande
                if (NoNyaWebhooks && !pprm && !(message.author.id == client.user.id) )
                    return;

                    messDefault()            




            }); //Fin promise (Permissions)
        //}
    }) //Fin promise Webhooks
    .catch(e => {messDefault()})
    
}

//lorsque Nya!bot est pret
client.on('ready', async function() {
    client.user.setStatus('online');

    CanReloading = true;
    Nya.log(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    //envoyer un message au server log
    var channel = client.channels.get(logserv);
    channel.send(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`).then(async function(m) {
    
        //m is the sended message
        
            //We are going to reload the last 10 messages (= create new message event) sended after the message "m" for each #nya-bot-vs (the nya!bot's messages wron't be resend
        
        
        //We wait 1.5sec else the bot wron't be able to delete the messages
        await resolveAfter(1.5);
        client.channels.array().filter(f => f.name.indexOf('nya-bot-vs') == 0).forEach(chann => {
            chann.fetchMessages({limit:10,before:m.id}).then(fv => {
                fv.array().filter(f => f.id != "377888169355640832").forEach(message => {
                    eval("const patch =" + String(mainMessage) + ";patch()")
                })
            })
        });
    
    });
    client.user.setActivity(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`, {type: "PLAYING"});

    require('./module/servban.js').load();

    client.channels.get('406802264540315648').send(`--Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);

    //Messages delect
    try {
        client.channels.get("420002162676858900").fetchMessages({ limit: 100 }).then(FM => {
            FM.forEach(m => m.delete(10));
        });
        await resolveAfter(10);

        client.channels.get("420002162676858900").fetchMessages({ limit: 100 }).then(FM => {
            FM.forEach(m => m.delete(10));
        });
        await resolveAfter(10);

        client.channels.get("420002162676858900").fetchMessages({ limit: 100 }).then(FM => {
            FM.forEach(m => m.delete(10));
        });
        await resolveAfter(15);

        client.channels.get("420002162676858900").send(listAnime.map(anime => {return `**N°${listAnime.indexOf(anime) + 1}** ${anime.name}`}).join("\n"),{split: true});
    } catch (err) {}

});

//Lorsque il a rejoins un serv
client.on("guildCreate", guild => {

    Nya.log(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
    var channel = client.channels.get(logserv);
    channel.send(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);

    require('./module/servban.js').load();
});

//Lorsqu'il a été kick d'un serv
client.on("guildDelete", guild => {


    Nya.log(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`);
    var channel = client.channels.get(logserv);
    channel.send(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`)
});

//lors de reconnection
client.on('reconnecting', reconnecting=> {

    client.user.setStatus('invisible');
    Nya.log('Reconnection');
    var channel = client.channels.get(logserv);
    if (CanReloading)
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

    
    CanReloading = true;
    client.user.setStatus('online');
    Nya.log('Reprise du nya!bot');
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
});



















/*  MESSAGE  */
client.on('message', message => {
    eval("const patch =" + String(mainMessage) + ";patch()")
});





//lors de déconection
client.on('disconnect', disconnect => {

    client.user.setStatus('invisible');
    Nya.log('déconnecté');
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


const DBL = require("dblapi.js");
const dbl = new DBL(﻿process.env.dblapitoken, client);

/*bot = new Discord.Client();
bot.on('ready', () => {
    console.log("OwO");
});
bot.on('message', message => {
    if (message.author.bot) return;
    if (message.guild) if (message.guild.id != "430843861326102529") return;
    
        if (message.guild && message.channel.name == "get-member-role") {
        
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
            
            } else if (message.content.indexOf("!CD_purge") == 0) {
			
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
        } 
            
        
        }if (message.content.indexOf("!CD_avatar") == 0) {
            var args = message.content.slice("!CD_avatar".length).trim().replace(/\n/g," \n").split(/ +/g);
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

bot.login(﻿process.env.TK2);*/

var bt = new Discord.Client();
bt.login(﻿process.env.BTFB_TOKEN);
