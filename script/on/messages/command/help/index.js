exports.execute = () => {

    //commande help
        
        if ((command == 'help' || command == 'aide') && args[0] == 'new(vs)') {
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

}
