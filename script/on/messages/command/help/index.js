exports.execute = () => {
var cmHelp = {

    botOwner: "-----\n\
__**Commandes bot owner:**__ \n\n\
    `cat:help new(vs)` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    `cat:help vs` Obtenir les commandes du Virtual Server\n\
    `cat:help vsemojis <page>` Obtenir les émojis du nya!bot vs\n\
    \n\
    `cat:no_nya-bot` Permet de désactiver les commandes du nya!bot (dans le channel) à tout ceux qui n'ont pas le droit d'utiliser cette commande\n\
    \n\
    `cat:serv` Voir tout les serv de nya!bot\n\
    `cat:channelGet <id du serveur>` Récupère les channels textuels\n\
    `cat:emojiget` Permet de récupérer le nom d'un émoji\n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:eval <code>` Permet d'executer du code javascript\n\
    `cat:devon` Permet de mettre le mode dev en on/off \n\
    `cat:game <Jeu>` Changer le jeu du bot\n\
    `cat:guildi <serv>` Obtenir une invitation au serveur\n\
    \n\
    `cat:nya <message>` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    `cat:nya owner <message>` Envoyer des messages en tant que bot\n\
    `cat:nya redirect <channel> <message>` Envoyer des messages en tant que bot dans d'autre channel\n\
    \n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\n\
    \n\
    `cat:anime` Montre un anime random provenant de la liste d'anime\n\
    `cat:anime add` Permet de proposer un anime à l'owner du bot\n\
    `cat:anime find` Permet de chercher un anime dans la liste d'anime\n\
    \n\
    `cat:atom.error` Permet de créer une image avec un message d'erreur windows\n\
    \n\
    `cat:avatar` Montre l'image de profil d'un utilisateur\n\
    \n\
    `cat:mathstest [min] <max>` Permet de jouer à un jeu où le but est d'obtenir le résultat à partir des différents nombres\n\
    \n\
    `cat:morpion create` Créer une partie de morpion et donne l'id de la partie\n\
    `cat:morpion delete <id>` Permet de supprimer une partie de morpion\n\
    `cat:morpion join <id>` Permet de rejoindre une partie\n\
    `cat:morpion play <id> <position>` Permet de jouer lorsque c'est votre tour\
",
    
    
    cUser:"-----\n\
__**Commandes:**__ \n\n\
    `cat:help new(vs)` Obtenir de l'aide sur la mise en place du Virtual Server\n\
    `cat:help vs` Obtenir les commandes du Virtual Server\n\
    `cat:help vsemojis <page>` Obtenir les émojis du nya!bot vs\n\
    \n\
    `cat:no_nya-bot` Permet de désactiver les commandes du nya!bot (dans le channel) à tout ceux qui n'ont pas le droit d'utiliser cette commande\n\
    \n\
    `cat:git` Obtenir le lien git du bot\n\
    `cat:invite` Permet d'ajouter Nya!bot à votre server\n\
    `cat:logserv` Permet d'enoyer le lien du server log du bot\n\
    \n\
    `cat:nya` Envoyer des messages en tant que bot (mention de l'utilisateur)\n\
    \n\
    `cat:cat` Met des images de chats mignions :cat:\n\
    `cat:cat size` Obtenire le nombre total d'images contenus dans cat:cat\n\
    `cat:cat share <url>` Permet de proposer une image à l'owner du bot\n\
    \n\
    `cat:anime` Montre un anime random provenant de la liste d'anime\n\
    `cat:anime add` Permet de proposer un anime à l'owner du bot\n\
    `cat:anime find` Permet de chercher un anime dans la liste d'anime\n\
    \n\
    `cat:atom.error` Permet de créer une image avec un message d'erreur windows\n\
    \n\
    `cat:avatar` Montre l'image de profil d'un utilisateur\n\
    \n\
    `cat:mathstest [min] <max>` Permet de jouer à un jeu où le but est d'obtenir le résultat à partir des différents nombres\n\
    \n\
    `cat:morpion create` Créer une partie de morpion et donne l'id de la partie\n\
    `cat:morpion delete <id>` Permet de supprimer une partie de morpion\n\
    `cat:morpion join <id>` Permet de rejoindre une partie\n\
    `cat:morpion play <id> <position>` Permet de jouer lorsque c'est votre tour\
",
    
    
    newVs: `-----
__**Virtual Server:**__ \n
    Pour obtenir le virtual server il vous suffie simplement de créer un channel appelé \`nya-bot-vs\`\n
    https://media.discordapp.net/attachments/407271018516971532/457159400722006024/unknown.png
`,
    
    
    vs: '-----\n\
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
Les id sont marqués en bas des messages du VirtualServeur (VS)'
}
    
    if (!args[0]) {
        args[0] = ""
    }
    if (!args[1]) {
        args[1] = ""
    }

    //commande help
    if (!args[0]) {
        message.author.send(cmHelp.cUser, {split:true});
    }
    else if (args[0].toLowerCase() == "vsemojis") {
        if (String(Number(args[1])) == NaN)
            args[1] = 1;
        message.author.send(`__Page ${args[1]}:__\n\n ${VSEmojies.slice(20*(args[1] - 1), 20*args[1] - 1).map(m => `\\${m.name} ${m.code}`).join("\n")}`, {split:true}) 
    }
    else if (args[0].toLowerCase() == 'new(vs)') {
        message.channel.send(cmHelp.newVs, {split:true})
        .then(msg => msg.delete(25000));
    }

    else if ((args[0].toLowerCase()== 'vs' && args[1].toLowerCase() == 'here') || (args[0].toLowerCase() == 'here' && args[1].toLowerCase() == 'vs')) {
        message.channel.send(cmHelp.vs, {split:true});
    }

    else if (args[0].toLowerCase() == 'vs') {
        message.author.send(cmHelp.vs, {split:true});
    }

    else if (args[0].toLowerCase() == 'here' ) {
        message.channel.send(cmHelp.cUser, {split:true});
    }

    else if (message.author == botowner && !args[0]) {
        message.author.send(cmHelp.botOwner, {split:true});
    }
    
    else {
        message.author.send("You typed a wrong help command");
    }
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
}
