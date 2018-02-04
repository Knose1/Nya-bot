/*key is the bot's token; mention is the bot @mention*; logserv is the server for bot log*/
var key = ﻿process.env.TOKEN;
var mention = ﻿process.env.BOTMENTION;
var mention2 = "<@"+mention+">"
var logserv = process.env.LOGSERV;
var botowner = process.env.BOTW;
var invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=67628096';
const Discord = require('discord.js');
const client = new Discord.Client();
const token = key;
var prefix = new Object();
var isasked = new Object();
var userasked = new Object();
userasked = undefined;
isasked = false;
nprefix ='cat:';
prefix = nprefix;







var catimg = new Array() ;
catimg = [
    "https://yt3.ggpht.com/-xMN6CtD0oAM/AAAAAAAAAAI/AAAAAAAAAAA/3rguRakaom8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    "https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Anime-Cat-Full-HD-Wallpaper-PIC-WPC0012460.jpg",
    "https://i.pinimg.com/736x/a6/8b/fb/a68bfb3aa12707c10335a4b40611719e--black-cat-anime-anime-cat.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6AnbOswJ5Z3UIAyMxgb-hO0l4X7fLz4e1YlmnLxjCsmUR5vq",
    "http://www.flipcat.us/wp-content/uploads/2017/11/captivating-artwork-cat-anime-glowing-clouds-apofiss-wallpapers-hd-also-marvelous-cat-wallpaper-anime.jpg",
    "J'ai la flemme, si tu veux une image fait le toi même",
    "https://pbs.twimg.com/profile_images/1798927817/Chi001.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4G02HepCrUM_JswsuADFZFf4OUyMrXyDpEF_7m-jNEpTJRgO",
    "https://media.giphy.com/media/A6JOgQslWdYqI/giphy-facebook_s.jpg",
    "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1449565712-5aafae0c93dc1277f3b714736537eb1d.gif",
    "https://i.imgur.com/vs2IkYB.gif",
    "http://clipground.com/images/cute-anime-cat-clipart-19.jpg",
    "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Cute-Anime-Cat-Background-HQ-PIC-WPC001902.jpg",
    "http://i.imgur.com/kkqZHi8.jpg",
    "https://data.whicdn.com/images/21075753/original.png",
    "J'ai la flemme, si tu veux une image fait le toi même",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvORlETA2KGz95tGZHAGti4TWphRYTHc-H14niFvHYk-3-tEK",
	"https://i.pinimg.com/736x/0f/00/9b/0f009b24bb1c63a1bc56fd2580ea813c--chibi-kawaii-neko-girl-kawaii.jpg",
	"https://i.ytimg.com/vi/4Ns47GgF4D4/maxresdefault.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtWEOgHUdqyhR2LLkj3jstn0Q4uWyyJj7lizS018dyaFrCoFA",
	"https://i.pinimg.com/736x/a3/a1/4a/a3a14a447d1fd26b0292d55c5441e92a--anime-cat-boy-neko-boy.jpg",
	"https://media.tenor.com/images/88333dc3104dd8d20ad51b0c48d8149d/tenor.png",
	"https://orig00.deviantart.net/0616/f/2014/025/d/c/anime_neko_girl_with_mouse_by_renxrin-d73nhhj.jpg",
	"https://orig00.deviantart.net/ae61/f/2014/326/9/d/anime_chibi_neko_girl_5_by_taemin4ever-d87925n.png",
	"https://ae01.alicdn.com/kf/HTB1bo5gIFXXXXbRXXXXq6xXFXXXG/Cosplay-Neko-Anime-fantaisie-parti-Costume-Set-Lolita-gants-en-peluche-chat-kitty-Paw-cadeau.jpg_640x640.jpg",
	"http://www.kinyu-z.net/data/wallpapers/190/1368393.jpg",
	"http://38.media.tumblr.com/55b3f960c1c65aa9fc5d3468c4a754ef/tumblr_nqbqy3lH9Z1uo3jaho1_500.gif",
	"https://rainbowgram.files.wordpress.com/2015/01/6f858-10903668_1538496133081588_481229092_n.jpg",
	"https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=118655064",
	"http://i0.kym-cdn.com/photos/images/original/000/936/630/24f.gif",
	"https://data.whicdn.com/images/52275745/original.jpg",
	"https://orig00.deviantart.net/1a7b/f/2017/296/7/7/neko_girl_chibi_by_mysticalily-dbrj1dj.jpg",
	"https://orig00.deviantart.net/c15a/f/2016/286/b/a/c__inirvanna_by_nekogirl_san-d9femg4.png",
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/862/883/c6b.png",
	"https://media1.tenor.com/images/9c93248d94cfc9fb4a6895f6f08c7b61/tenor.gif?itemid=7556300",
	"https://data.whicdn.com/images/66559264/large.jpg"
];






//lorsque Nya!bot est pret
client.on('ready', () => {
    console.log(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    //envoyer un message au server log
    var channel = client.channels.get(logserv);
    channel.send(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
    client.user.setGame(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
});

//Lorsque il a rejoins un serv
client.on("guildCreate", guild => {
  console.log(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
  var channel = client.channels.get(logserv);
  channel.send(`Nouveau serv: ${guild.name} (id: ${guild.id}). Nmb de membres: ${guild.memberCount}`);
});

//Lorsqu'il a été kick d'un serv
client.on("guildDelete", guild => {
  console.log(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`);
  var channel = client.channels.get(logserv);
  channel.send(`Un server a suppr nya!bot: ${guild.name} (id: ${guild.id})`)
});

//lors de reconnection
client.on('reconnecting', reconnecting=> {
console.log('Reconnection')
var channel = client.channels.get(logserv);
channel.send('Reconnection')
});









client.on('message', message => {
    if(message.guild) {} else {return;}
    //On regarde si l'utilisateur est un modérateur
    var isMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(message.author.id);
    
    //si c'est une commande, récupérer les arguments, la commande et supprimer le message
        if (message.content.indexOf(prefix) == 0) {
            var iscommand = true;
            var args = message.content.slice(prefix.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
    
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
        }
	
    /*DEBUT BOT*/
    //ignorer si c'est un bot (sauf s'il parle dans le vs sous certaines conditions
    if(message.author.bot == true) {
        //Bot ban et bot différent de nya!bot
        if (message.channel.name == 'nya-bot-vs' && isbanned == true && message.author.id != mention) {
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
            return;
        }
        //Nya!bot commande
        else if ((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
            return;
        }
        //Si pas de -- et pas de // et différent de nya!bot
	    else if ((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--') != 0 && message.content.indexOf('//') != 0) && message.author.id != mention) {
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
            return;
        }
        else if((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--') == 0 || message.content.indexOf('//') == 0)) {
        }
        else {
            return;
        }
    }
    /*Fin BOT*/
    
    /*Virtual Channel*/
    
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
    if (message.channel.name == 'nya-bot-vs' && isbanned == true  && message.author.id != mention  && message.author != botowner) {
        message.author.sendMessage(message.author+' vous êtes ban du Virtual server et ne pouvez donc pas parler dans le VS');
		message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
	}
    
	//Si (Commande Nya!bot)
	else if ((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
		message.author.send(message.author+' les commandes sont interdits dans se channel');
		message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
	}
    //Si (pas de -- et pas de //)
    else if (
                ( //Un channel nya!bot VS
                message.channel.name == 'nya-bot-vs'
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
    
    else if ((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--nya') == 0 || message.content.indexOf('--Nya') == 0 || message.content.indexOf('//nya') == 0 || message.content.indexOf('//Nya') == 0) && (message.author == botowner || undefined != isMod)) {
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
    
    
    /*ON VAS BAN DES GENS !!! */
    
    else if ((message.channel.name == 'nya-bot-vs' || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--ban') == 0 || message.content.indexOf('--Ban') == 0 || message.content.indexOf('//ban') == 0 || message.content.indexOf('//Ban') == 0) && (message.author == botowner || undefined != isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        
        args.shift().toLowerCase();
        var guild = client.guilds.get('406926403628695556');
        // On ajoute les personnes à la liste des ban
        args.forEach(function (id) {
            var isgood = true;
            
            //Si la personne est déjà ban
            vsban.forEach(function (banned) {
            
                //Si la personne est déja ban
                if (id == banned) {
                    message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est déja ban');
                    isgood = false;
                }
            });
            
            if (isgood == true) {
                //On regarde si les conditions pour ban la personnes (qui n'est pas ban) sont ok:

                    //Si la personne esseille de se ban lui-même
                        if (id == message.author.id) {
                            message.author.send('Vous ne pouvez pas vous ban vous-même');
                            isgood = false;
                        }
                
                        //Si l'utilisateur est un modérateur mais que ce n'est pas l'owner du bot
                        else if (message.author != botowner && undefined != isMod) {
                
                            var banIsMod = client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(id);
                
                        //Si l'utilisateur esseille de ban l'owner
                        if ("<@"+id+">" == botowner) {
                            message.author.send('Vous ne pouvez pas ban l\'owner du nya!bot');
                            isgood = false;
                        }
                        //Si l'utilisateur esseille de ban un modérateur
                        else if (undefined != banIsMod) {
                            message.author.send(client.users.get(id).username+"#"+client.users.get(id).discriminator+'est un modérateur du nya!bot, vous ne pouvez pas le ban');
                            isgood = false;
                        }
                    }
                /*Fin de conditions de ban*/
            }
			
            if (client.users.get(id) != undefined && isgood == true) {
                //console.log("id = "+id);
                //console.log(client.users.get(id));
                guild.createRole({
                    name: id,
                })
                //.then(role => console.log(`Created role ${role}`))
                //.catch(console.error);
				var banuser = client.users.get(id);
                var channel = client.channels.get('407169845889597440');
                channel.send('Personne banni du VS: '+banuser.username+"#"+banuser.discriminator+" ("+id+")");
            }
        });
	message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Ban Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
    }
    /*Fin du BAN*/
	
    //Commande-VS = Ok
    else if     (
                    (
                        message.channel.name == 'nya-bot-vs' || 
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
        
    if (message.attachments.size == 0) {
        words.forEach(word => {
            wordsIndex = wordsIndex + 1 ;
            if (!vsIsImage && word.indexOf('//img:http') == 0) {
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
    
    if (vsIsImage) {
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
            .setFooter("Le "+new Date().getDate()+"/"+ nbmois+"/"+new Date().getFullYear()+" à "+new Date().toLocaleTimeString()+" | "+message.guild.name+" | "+message.author.id , message.guild.iconURL)
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
        else if (undefined != isMod) {
            embed.setAuthor("MOD: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/409108258989539349/Mod.png");
            embed.setColor("#0077DD");
        }
		
		
        /*Fin embed*/
        
        //Pour chaque serv:
     
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                if (channel.name == "nya-bot-vs" || (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log")) {
                
                    //On envoie l'embed
                    channel.send({embed});
                }
            });
	    });
    message.delete(1000)
        .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
        .catch(console.error);
	}
	
	/*End of Virtual Channel*/
	
    //Say hello to bot
    else if (message.content == "Bonjour "+mention2 || message.content == "bonjour "+mention2 || message.content == "bjr "+mention2 || message.content == "Bjr "+mention2) {
    message.channel.send('Bonjour '+message.author+" !")
    }
    else if (message.content == "Coucou "+mention2 || message.content == "coucou "+mention2 || message.content == "cc "+mention2 || message.content == "Cc "+mention2) {
    message.channel.send('Nyon '+message.author+" !")
    }
    else if (message.content == "Salut "+mention2 || message.content == "salut "+mention2 || message.content == "slt "+mention2 || message.content == "Slt "+mention2) {
    message.channel.send('Salut '+message.author+" !")
    }
    else if (message.content == "Yo "+mention2 || message.content == "yo "+mention2){
    message.channel.send('Yoplait '+message.author+" !")
    }
    else if (message.content == "Hi "+mention2 || message.content == "hi "+mention2){
    message.channel.send('Hi '+message.author+" !")
    }
    else if (message.content == "Hello "+mention2 || message.content == "hello "+mention2){
    message.channel.send('Hello '+message.author+" !")
    }
    else if ( message.content == "Ohayô "+mention2 || message.content == "ohayô "+mention2 || message.content == "Ohayo "+mention2 || message.content == "ohayo "+mention2){
    message.channel.send('Ohayô gozaimasu '+message.author+" !")
    }
    //end say hello to bot
    //Réponses random:
    else if (message.content == "Nya "+mention2 || message.content == "nya "+mention2 || message.content == "Nya! "+mention2 || message.content == "nya! "+mention2 || message.content == "Nya ! "+mention2 || message.content == "nya! "+mention2 || message.content == "Nya "+mention2+" !" || message.content == "nya "+mention2+" !" || message.content == "Nya "+mention2+"!" || message.content == "nya "+mention2+"!") {
        message.channel.send(message.author+", ne m'insulte pas !!! Nyon! <:Tsuuuuu:378668647809417226>")
    }
    
    else if (message.content == mention2+" fait son thug" || message.content == mention2+" Fait son thug" || message.content == mention2+" fais son thug" || message.content == mention2+" Fais son thug." || message.content == mention2+" fait son thug." || message.content == mention2+" Fait son thug." || message.content == mention2+" fais son thug." || message.content == mention2+" Fais son thug." || message.content == mention2+" fait son thug ." || message.content == mention2+" Fait son thug ." || message.content == mention2+" fais son thug ." || message.content == mention2+" fait son thug!" || message.content == mention2+" Fait son thug!" || message.content == mention2+" fais son thug!" || message.content == mention2+" fait son thug !" || message.content == mention2+" Fait son thug !" || message.content == mention2+" fais son thug !" || message.content == mention2+" fait son thug ?" || message.content == mention2+" Fait son thug ?" || message.content == mention2+" fais son thug ?" || message.content == mention2+" fait son thug?" || message.content == mention2+" Fait son thug?" || message.content == mention2+" fais son thug?") {
        message.channel.send(message.author+", Ouais et alors ?! <:sealO:378292331473797120>");
    }
    
    else if (message.content == mention2+" t'es nul" || message.content == mention2+" T'es nul" || message.content == mention2+" t'es nulle" || message.content == mention2+" T'es nulle" || message.content == mention2+" t'es nule" || message.content == mention2+" T'es nule" || message.content == mention2+" t'es nul." || message.content == mention2+" T'es nul." || message.content == mention2+" t'es nulle." || message.content == mention2+" T'es nulle." || message.content == mention2+" t'es nule." || message.content == mention2+" T'es nule." || message.content == mention2+" t'es nul ." || message.content == mention2+" T'es nul ." || message.content == mention2+" t'es nulle ." || message.content == mention2+" T'es nulle ." || message.content == mention2+" t'es nule ." || message.content == mention2+" T'es nule .") {
        message.channel.send("Chute ! C'est une diversion ! :cat: :Fuse:");
    }
    //end réponses random
    
    /**/
    var isaskactivated = 'désactivé';
     //start isasked
    else if (isasked == true && isaskactivated != 'désactivé') {
        if (userasked == message.author && (message.content == 'quelle heur est-il ?' || message.content == 'quelle heur est il ?' || message.content == 'quel heur est-il ?' || message.content == 'quel heur est il ?' || message.content == 'quelle heure est-il ?' || message.content == 'quelle heure est il ?' || message.content == 'quel heure est-il ?' || message.content == 'quel heure est il ?' || message.content == 'Quelle heur est-il ?' || message.content == 'Quelle heur est il ?' || message.content == 'Quel heur est-il ?' || message.content == 'Quel heur est il ?' || message.content == 'Quelle heure est-il ?' || message.content == 'Quelle heure est il ?' || message.content == 'Quel heure est-il ?' || message.content == 'Quel heure est il ?' || message.content == 'Heure ?' || message.content == 'heure ?')) {
        
            //Demande l'heure
        console.log(userasked+" a demandé l'heure");
        var channel = client.channels.get(logserv);
        channel.send(userasked+" a demandé l'heure")
        var day;
	       switch (new Date().getDay()) {
	       case 0:
	           day = "dimanche";
        	   break;
	       case 1:
		      day = "lundi";
		      break;
	       case 2:
		      day = "mardi";
		      break;
	       case 3:
		      day = "mercedi";
		      break;
	       case 4:
		      day = "jeudi";
		      break;
	       case 5:
		      day = "vendredi";
		      break;
	       case  6:
		      day = "samedi";
            }
			
            var month;
            switch (new Date().getMonth()) {
	        case 0:
              month = "décembre";
		      break;
	        case 1:
		      month = "janvier";
		      break;
	        case 2:
		      month = "février";
		      break;
	        case 3:
		      month = "mars";
		      break;
	        case 4:
		      month = "avril";
		      break;
	        case 5:
		      month = "mai";
		      break;
	        case 6:
		      month = "juin";
	          break;
	        case 7:
		      month = "juillet";
		      break;
	        case 8:
		      month = "août";
		      break;
	        case 9:
		      month = "septembre";
		      break;	
	        case 10:
		      month = "octobre";
		      break;
	        case 11:
		      month = "novembre";
            }
 message.reply("Nya ! Nous sommes le " + day + " " + new Date().getDate()+ " " + month + " " + new Date().getFullYear() + " et il est " + new Date().toLocaleTimeString());
            userasked = undefined;
            isasked = false;
            }
                //déconection autorisé
            else if (userasked == botowner && userasked == message.author && (message.content == 'Disconect' || message.content == 'disconect')) {
            message.channel.send("D'accord, au revoir @here")
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            client.destroy();
            }
                //déconection interdit
            else if (userasked != botowner && userasked == message.author && (message.content == 'Disconect' || message.content == 'disconect')) {
            message.channel.send("Désolé je ne peux pas faire ça !")
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            }
                //Tait-toi (Maitre)
            else if (userasked == message.author && (message.content == 'tait-toi' || message.content == 'tait-toi !' || message.content == 'tait-toi!' || message.content == 'Tait-Toi' || message.content == 'Tait-Toi !' || message.content == 'Tait-Toi!' || message.content == 'Tait-toi' || message.content == 'Tait-toi !' || message.content == 'Tait-toi!' || message.content == 'tait-toi' || message.content == 'tait-toi !' || message.content == 'tait-toi!' || message.content == 'Tait Toi' || message.content == 'Tait Toi !' || message.content == 'Tait Toi!' || message.content == 'Tait toi' || message.content == 'Tait toi !' || message.content == 'Tait toi!' ||message.content == 'tait toi' || message.content == 'tait toi !' || message.content == 'tait toi!') && userasked == botowner) {
            message.channel.send("Oui maitre vénéré ! https://orig00.deviantart.net/979a/f/2012/100/1/4/_acchi_kocchi__twitchy_twitchy_by_tach_ko-d4vo596.gif")
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            }
                //Tait-toi (Pas Maitre)
            else if (userasked == message.author && (message.content == 'tait-toi' || message.content == 'tait-toi !' || message.content == 'tait-toi!' || message.content == 'Tait-Toi' || message.content == 'Tait-Toi !' || message.content == 'Tait-Toi!' || message.content == 'Tait-toi' || message.content == 'Tait-toi !' || message.content == 'Tait-toi!' || message.content == 'tait-toi' || message.content == 'tait-toi !' || message.content == 'tait-toi!' || message.content == 'Tait Toi' || message.content == 'Tait Toi !' || message.content == 'Tait Toi!' || message.content == 'Tait toi' || message.content == 'Tait toi !' || message.content == 'Tait toi!' ||message.content == 'tait toi' || message.content == 'tait toi !' || message.content == 'tait toi!') && userasked != botowner) {
            message.channel.send("Non j'ai pas envie, t'es pas mon maître ! <:Tsuuuuu:378668647809417226>")
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            }
                //Non rien
            else if (userasked == message.author && (message.content == 'annuler' || message.content == 'non rien' || message.content == 'Non rien' || message.content == 'Annuler')) {
            message.channel.send("D'accord")
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            }
                //Impossible de répondre      
            else if (userasked == message.author){
            message.channel.send(userasked+' désolé je ne peux vous répondre')
                .then(message => console.log(`Message: ${message.content}`))
                .catch(console.error);
            userasked = undefined;
            isasked = false;
            }
            
            
}
    //Nya bot mentioné
    else if (message.isMentioned(mention) == 1 && message.content === mention2 && userasked === undefined) {
        userasked = message.author;
        isasked = true;
        message.reply('que puis-je faire pour vous ?');
        console.log('Nya!Bot a été mentioné par '+userasked);
        var channel = client.channels.get(logserv);
        channel.send('Nya!Bot a été mentioné par '+userasked);
    }
    
    /*Commandes*/
    
    else if (iscommand == true) {
        //Changer le jeu
        if (command == 'game' && message.author == botowner && args.length == 0) {
            client.user.setGame(`Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} servers.`);
            console.log('Changement du jeu: Par défaut');
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: Par défaut');
        }
	else if (command == 'game' && message.author == botowner) {
            client.user.setGame(args.join(' '));
            console.log('Changement du jeu: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: '+args.join(' '));
        }
        else if (command == 'game' && message.author != botowner) {
            message.author.send("Vous n'avez pas le droit d'utiliser "+"\""+message.content+"\"");
        }
        else if (command == 'nya' && message.author == botowner && (args[0] == 'owner' || args[0] == 'strict')) {
            args[0] = '';
            message.channel.send(args.join(' '));
            console.log('Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé: '+args.join(' '));
        }
        else if (command == 'nya' && message.author == botowner && (args[0] == 'redirect' || args[0] == 'rd')) {
            args[0] = '';
            var channel = client.channels.get(args[1]);
            var argchan = args[1];
            args[1] = '';
            channel.send(args.join(' '));
            console.log('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Message envoyé channel \''+argchan+'\' : '+args.join(' '));
        }
        else if (command == 'nya') {
            message.channel.send(message.author+" : "+args.join(' '));
            console.log(message.author+'. Message envoyé: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send(message.author+'. Message envoyé: '+args.join(' '));
        }
        else if (command == 'invite') {
            message.channel.send("Je sers un peu à rien mais bon voila mon invite:");
            message.channel.send(invite);
            console.log('Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Invitation envoyé');
        }
        else if (command == 'logserv') {
            message.channel.send("Voici le server log:");
            message.channel.send("https://discord.gg/HTZy7tB");
            console.log('Log Invitation envoyé');
            var channel = client.channels.get(logserv);
            channel.send('Log Invitation envoyé');
        }
        else if (command == 'git' || command == 'github') {
            message.channel.send(message.author+", voici mon lien git");
            message.channel.send("https://github.com/Knose1/Nya-bot");
        }
        else if (command == 'cat' && args.length == 0) {
        var randcat = Math.floor(Math.random() * catimg.length);
        message.channel.send(message.author+", "+catimg[randcat]);
        }
        else if (command == 'cat' && (args[0] == 'length' || args[0] == 'size')) {
        message.channel.send(message.author+", il y a "+catimg.length+" images dans cat:cat");
        }
        else if (command == 'cat' && args.length == 2 && (args[0] == 'purpose' || args[0] == 'share')) {
        var channel = client.channels.get('405119142962659350');
        channel.send(message.author+': \n\
    '+args[1]);
        }
        else if (command == 'cat' && args.length != 2 && (args[0] == 'purpose' || args[0] == 'share')) {
        message.author.send("Utilisation: \n\n\
        `cat:cat`\n\
        `cat:cat purpose <url>` \n\
        `cat:cat share <url>`");
        }
        else if (command == 'cat') {
        message.author.send("Utilisation: \n\n\
        `cat:cat`\n\
        `cat:cat purpose <url>` \n\
        `cat:cat share <url>`");
        }
        
        else if ((command == 'guilds' || command == 'serv') && message.author == botowner) {
        var nyaguilds = '__Serveurs:__ \n\n';
        //console.log(client.guilds);
             client.guilds.forEach(function (guild) {
                //var guild = client.guilds.get(chid);
                nyaguilds = nyaguilds+guild.name+"\n";
            });
            message.channel.send(nyaguilds);
        }
        
        //commande help
        
	else if ((command == 'help' || command == 'aide') && args[0] == 'Vs' || args[0] == 'VS' || args[0] == 'vs' || args[0] == 'vS') {
        message.channel.send("__**Virtual Server:**__ \n\n\
     Pour obtenir le virtual server il vous suffie simplement de créer un channel appelé `nya-bot-vs`\n\
https://media.discordapp.net/attachments/407271018516971532/409747122749964288/unknown.png\
");
        }
	    
        else if ((command == 'help' || command == 'aide') && args[0] == 'here' ) {
        message.channel.send("__**Commandes:**__ \n\n\
    `cat:help vs` Obtenir de l'aide sur la mise en place du Virtual Server\n\
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
        message.author.send("__**Commandes:**__ \n\n\
    `cat:help vs` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    \n\
    `cat:serv` Voir tout les serv de nya!bot\n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:game <Jeu>` Changer le jeu du bot\n\
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
        message.author.send("__**Commandes bot owner:**__ \n\n\
    `cat:help vs` Obtenir de l'aide sur la mise en place du Virtual Server\n\
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
        else {
            message.author.send('"'+message.content+' "'+" n'est pas une commande");
        }
        iscommand = false;
    }
    
});







//lors de déconection
client.on('disconnect', disconnect => {
console.log('déconecté');
var channel = client.channels.get(logserv);
channel.send('Déconecté');
})

client.login(key);
