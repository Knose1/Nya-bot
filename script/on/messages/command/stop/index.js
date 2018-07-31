exports.execute = () => {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        message.channel.send("Successfully stoped the music")
    } else {
        message.reply('You need to join a voice channel first!');
    }
}
