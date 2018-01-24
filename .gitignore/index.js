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






/*Images de chat*/

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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvORlETA2KGz95tGZHAGti4TWphRYTHc-H14niFvHYk-3-tEK"
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
})








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
    //Say hello to bot
    if (message.content == "Bonjour "+mention2 || message.content == "bonjour "+mention2 || message.content == "bjr "+mention2 || message.content == "Bjr "+mention2) {
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
        
        else if ((command == 'help' || command == 'aide') && message.author == botowner) {
        message.author.sendMessage("__**Commandes:**__ \n\n\
    `cat:game` Changer le jeu du bot\n\
    `cat:nya owner` Envoyer des messages en tant que bot\n\
    `cat:nya` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    `cat:runkit` Obtenir le lien runkit du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\
");
        }
        
        else if (command == 'help' || command == 'aide') {
        message.author.sendMessage("__**Commandes:**__ \n\n\
    `cat:nya` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:runkit` Obtenir le lien runkit du bot\n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\
");
        }
        
        else if (command == '') {
        }
        else {
            message.author.sendMessage('"'+message.content+' "'+" n'est pas une commande");
        }
        
    }
    
})








//lors de déconection
client.on('disconnect', disconnect => {
console.log('déconecté');
var channel = client.channels.get(logserv);
channel.send('Déconecté');
})

client.login(key);
