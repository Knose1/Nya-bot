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
    
    //ignorer si c'est un bot
    if(message.author.bot) return;
    
    //si c'est une commande, récupérer les arguments, la commande et supprimer le message
        if (message.content.indexOf(prefix) == 0) {
            var iscommand = true;
            var args = message.content.slice(prefix.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
    
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
                .catch(console.error);
        }
    
	
    //Virtual Channel
	if (message.channel.name == 'nya-bot-vs' && iscommand == true) {
		message.channel.send(message.author+' les commandes sont interdits dans se channel');
		message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
	}
	else if (message.channel.name == 'nya-bot-vs' && message.content.indexOf('--') != 0) {
		message.channel.send(message.author+' utilisez -- pour parler dans le vs');
		message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
	}
	else if (message.channel.name == 'nya-bot-vs' && message.content.indexOf('--') == 0) {
	var words = message.content.slice('--'.length).trim().split(/ +/g);
	var vsmessage = words.join(' ');
        //Pour chaque serv:
        
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                
                if (channel.name == "nya-bot-vs" || (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log")) {
                    
                    //On envoie une bare latéral (----)
			        channel.send("---------------------------------------------------------------------------------------------------------");
				    
                    //On envoie l'image de l'utilisateur    
                    new Discord.Attachment(message.author.avatarURL);
                    attachment.message = message.author.username;
                    channel.send(attachement);
                    
                    //On envoie son message
                    channel.send(message.author+': '+vsmessage);
                }
            });
	    });
    message.delete(500)
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
    
     //start isasked
    else if (isasked == true) {
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
        if (command == 'game' && message.author == botowner) {
            client.user.setGame(args.join(' '));
            console.log('Changement du jeu: '+args.join(' '));
            var channel = client.channels.get(logserv);
            channel.send('Changement du jeu: '+args.join(' '));
        }
        else if (command == 'game' && message.author != botowner) {
            message.author.sendMessage("Vous n'avez pas le droit d'utiliser "+"\""+message.content+"\"");
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
        else if (command == 'runkit') {
            message.channel.send(message.author+", voici mon lien runkit");
            message.channel.send("https://runkit.com/knose1/runkit-npm-discord-js");
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
        message.author.sendMessage("Utilisation: \n\n\
        `cat:cat`\n\
        `cat:cat purpose <url>` \n\
        `cat:cat share <url>`");
        }
        else if (command == 'cat') {
        message.author.sendMessage("Utilisation: \n\n\
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
        
        else if ((command == 'help' || command == 'aide') && args[0] == 'here' ) {
        message.channel.send("__**Commandes:**__ \n\n\
    `cat:runkit` Obtenir le lien runkit du bot\n\
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
        message.author.sendMessage("__**Commandes:**__ \n\n\
    `cat:serv` Voir tout les serv de nya!bot\n\
    `cat:runkit` Obtenir le lien runkit du bot\n\
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
        message.author.sendMessage("__**Commandes bot owner:**__ \n\n\
    `cat:runkit` Obtenir le lien runkit du bot\n\
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
            message.author.sendMessage('"'+message.content+' "'+" n'est pas une commande");
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
