exports.execute = () => {
    if (!args[0]) {
        message.reply("syntax: cat:play <url> (replace <url> by his value)")
    } else if (message.member.voiceChannel) {
        //message.member.voiceChannel.leave()
        message.member.voiceChannel.join()
            .then(connection => {     
                const stream = require('stream');    

                if (args[0].indexOf("https://www.youtube.com/watch?v=") == 0 || args[0].indexOf("https://youtu.be/") == 0) {
                    var steamAudio = ytdl(message.content.trim().slice("!play".length).trim(), { filter : 'audioonly' })
                    var dispatcher = connection.playStream(steamAudio,{ seek: 0, volume: 1 });
                } else {
                    var dispatcher = connection.playArbitraryInput(args[0]);
                }
                connection.on('error', (e) => Nya.error(e,true))
                dispatcher.on('error', (e) => Nya.error(e,true))
                message.channel.send("Now playing " + args[0])
            })
            .catch(e => Nya.error(e,true));
        
    } else {
      message.reply('You need to join a voice channel first!');
    }
    

}
