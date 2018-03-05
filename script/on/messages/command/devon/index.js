exports.execute = () => {

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
