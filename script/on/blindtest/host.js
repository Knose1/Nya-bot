exports.execute = () => {
    if (message.content.trim().toLowerCase().indexOf("!play") == 0) {
        message.guild.channels.get("473838075999420427").send({files:[{
            attachment:message.content.trim().slice("!play".length).trim(),
            name:"Guess"
        }]})
            .then( uselessvar => message.channel.send("File uploaded in <#473818364477833216>") )
            .catch(uselessvar => {
                message.guild.channels.get("473822354800377867").join()
                    .then(connection => {
                        const dispatcher = connection.playFile(message.content.trim().slice("!play".length).trim());
                        message.channel.send("Now playing . . .")
                    })
                    .catch(e => Nya.error(e,true));
            })
    }
    
}
