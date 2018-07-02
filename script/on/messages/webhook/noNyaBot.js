exports.execute = () => {
    function messDefault() {
        //On récupère le suffix du vs
            var isVs = false;
            if (message.channel.name.indexOf('nya-bot-vs') == 0) {
                var Pfx = message.channel.name.slice('nya-bot-vs'.length);
                if (Pfx == undefined) Pfx = '';
                if (Pfx.indexOf('-') == 0) Pfx = Pfx.slice('-'.length);
                if (Pfx == undefined) Pfx = '';

                var isPfx = false
                VsPrefixs.forEach( p => {
                    if (Pfx == p.name || Pfx == p) {
                        isPfx = true;
                        Pfx = p;
                    }
                });

                if (isPfx) 
                    isVs = true;

                //Nya.log(isVs+" ; "+Pfx);
            }

            
            
            
            
            //On récupère la liste des ban (du vs)
            var guild = client.guilds.get('406926403628695556');
            var vsban = new Array();
            var vsx = -1;
            guild.roles.forEach(function (role) {
                vsx = vsx+1;
                vsban[vsx] = role.name;
                //Nya.log(role.name);
            });
            //Nya.log(message.author.id);

            
            
            
            
            //On regarde si la personne est ban (du vs)
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
                                    .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                                    .catch(console.error);
                                return;
                            }
                            //Nya!bot commande
                            else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
                                message.delete(500)
                                    .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                                    .catch(console.error);
                                return;
                            }
                            //Si pas de -- et pas de // et différent de nya!bot
                            else if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--') != 0 && message.content.indexOf('//') != 0) && message.author.id != mention) {
                                message.delete(500)
                                    .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
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
                    .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                    .catch(console.error);
            }


            
            

            //VS
                if (require("./on/messages/vs/error_userBan.js").execute(message, isVs, isbanned) ) ;
                else if (require("./on/messages/vs/error_command.js").execute(message, isVs, iscommand)  ) ;
                else if (require("./on/messages/vs/error_noPfix.js").execute(message, isVs) ) ;
                else if (require("./on/messages/vs/command_nya.js").execute(message, isVs)  ) ;
                else if (require("./on/messages/vs/command_purge.js").execute(message, isVs, Pfx)    ) ;
                else if (require("./on/messages/vs/command_ban.js").execute(message, isVs, isbanned, vsban)  ) ;
                else if (require("./on/messages/vs/command_unban.js").execute(message, isVs, isbanned, vsban)  ) ;
                else if (require("./on/messages/vs/command_status.js").execute(message, isVs, Pfx)    ) ;
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
                            )
                    {
                        //il faut mettre le grand if car function async
                        require("./on/messages/vs/finaly.js").execute(message, isVs, Pfx)
                    }

            
            
            
            
            
                //RPG
                else if (message.content.indexOf("cat>") == 0 && (  (betaTest == 'off') || ( betaTest == 'on' && (isBTest) )  )/*Si le RPG est en vertion Test il faut être Béta testeur*/) 
                {
                    //Nya.log("rpg")
                    try {
                        var args = message.content.slice("cat>".length).trim().replace(/\n/g," ").split(/ +/g);
                        var command = args.shift().toLowerCase();

                        message.delete(500)
                            .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                            .catch(console.error);
                        var funcComm = String(require(`./on/messages/rpg/${command}/index.js`).execute);
                        var toEv = funcComm.slice(7, funcComm.length - 1)/*.replace(/\n/g,"").replace(/ +/g," ")*/;
                        //Nya.log(toEv);
                        eval(toEv);
                    } 
                    
                    catch (err) {

                        if (String(err).toLowerCase().indexOf(`Cannot find module './on/messages/rpg/${command}/index.js'`.toLowerCase()) == -1) {
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
                    
                }

            
            
            
            
            //COMMAND
            else if (iscommand == true) {
                //Nya.log("step1")

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
                    //Nya.log("step2")
                    var funcComm = String(require(`./on/messages/command/${command}/index.js`).execute);
                    var toEv = funcComm.slice(7, funcComm.length - 1)/*.replace(/\n/g,"").replace(/ +/g," ")*/;
                    //Nya.log(toEv);
                    eval(toEv);
                }
                
                
                catch (err) {
                        //Nya.log("step3")
                        if (String(err).toLowerCase().indexOf(`Cannot find module './on/messages/command/${command}/index.js'`.toLowerCase()) == -1) {
                            message.reply("Une ERREUR est survenue");

                            var cleanERR = fulllog( util.inspect( clean(err), 1500 ) );
                            client.users.get("375378900802338818").send(`__Une ERREUR est survenue:__ \n Auteur: ${message.author}\n Longueur de la commande: ${message.content.length}\n message: ${message.content.slice(0,1000)}`);
                            client.channels.get(consoleChannel).send(`__Une ERREUR est survenue:__ \n Auteur: ${message.author}\n Longueur de la commande: ${message.content.length}\n message: ${message.content.slice(0,1000)}`);

                            if (undefined != cleanERR[0]) {
                                client.users.get("375378900802338818").send("```" + cleanERR[0] + "```");
                                client.channels.get(consoleChannel).send("```" + cleanERR[0] + "```");
                            }
                            if (undefined != cleanERR[1]) {
                                client.users.get("375378900802338818").send("```" + cleanERR[1] + "```");
                                client.channels.get(consoleChannel).send("```" + cleanERR[1] + "```");
                            }
        
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
    }
    
    
    
    message.channel.fetchWebhooks().then(fw => {
        
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
    }) //Fin promise Webhook
    .catch(e => {messDefault()})
}
