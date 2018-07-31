exports.execute = () => {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        message.member.voiceChannel.join()
            .then(connection => {
                const link = message.content.trim().slice("!play".length).trim().split(/ +/g)[0]    
                const stream = require('stream');    

                if (link.indexOf("https://www.youtube.com/watch?v=") == 0 || link.indexOf("https://youtu.be/") == 0) {
                    var steamAudio = ytdl(message.content.trim().slice("!play".length).trim(), { filter : 'audioonly' })
                    var dispatcher = connection.playStream(steamAudio,{ seek: 0, volume: 1 });
                } else {
                    var dispatcher = connection.playArbitraryInput(link);
                }
                connection.on('error', (e) => Nya.error(e,true))
                dispatcher.on('error', (e) => Nya.error(e,true))
                message.channel.send("Now playing " + link)
            })
            .catch(e => Nya.error(e,true));
        
    } else {
      message.reply('You need to join a voice channel first!');
    }
    

}
