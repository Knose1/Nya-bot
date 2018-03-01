exports.execute = (message) => {

        //Si (pas de -- et pas de //)
        if (
                ( //Un channel nya!bot VS
                isVs
                    || 
                    ( //ou le serveur log de nya!bot
                    message.guild.id == "377892426569744387" && 
                    message.channel.name == "nya-bot-vs-log"
                    )
                ) && 
                (
                //Si ce n'est pas nya!bot
                message.author.id != mention &&
                    (
                        (//S'il n'y a pas d'attachement et qu'il n'y a pas le préfix du VS
                        message.attachments.size == 0 &&
                        message.content.indexOf('--') != 0 && 
                        message.content.indexOf('//') != 0 
                        )
                          || 
                        (//S'il y a au moin un attachement et un text mais que le txt n'as pas le préfix du VS
                        message.attachments.size != 0 &&
                        message.content.length != 0 &&
                        message.content.indexOf('--') != 0 &&
                        message.content.indexOf('//') != 0
                        )
                    )
                )
            )
        {
            message.author.send(message.author+' utilisez -- ou // pour parler dans le vs');
            message.delete(500)
                    .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                    .catch(console.error);
        }

}
