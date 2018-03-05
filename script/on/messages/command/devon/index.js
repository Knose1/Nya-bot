exports.execute = () => {

    if (message.author == botowner && BotOnDev) {
    
        BotOnDev = false;
        
    } else if (message.author == botowner && !BotOnDev) {
    
        BotOnDev = true;
        client.user.setStatus('idle');
        client.user.setActivity(`Developping . . .`,{type: "PLAYING"});
        noGame = 'activé';
        return;
    
    }
}
