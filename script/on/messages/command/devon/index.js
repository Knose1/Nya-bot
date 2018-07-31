exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    if (message.author == botowner && BotOnDev) {
        
        client.user.setStatus('online');
        client.user.setActivity(`cat:help | Nya!Bot est en marche, avec ${client.users.size} users, dans ${client.channels.size} salons et ${client.guilds.size} serveurs.`,{type: "PLAYING"});
        BotOnDev = false;
        
    } else if (message.author == botowner && !BotOnDev) {
    
        BotOnDev = true;
        client.user.setStatus('idle');
        client.user.setActivity(`Developping . . .`,{type: "PLAYING"});
        noGame = 'activé';
    
    }
}
