exports.execute = (message, isVs) => {

    /*On envoie des messages en tant que nya!bot*/
    if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && (message.content.indexOf('--nya') == 0 || message.content.indexOf('--Nya') == 0 || message.content.indexOf('//nya') == 0 || message.content.indexOf('//Nya') == 0) && (message.author.id == botownerid || isMod)) {
        if (message.content.indexOf('//') == 0){
            var args = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var args = message.content.slice('--'.length).trim().split(/ +/g);
        }
        args.shift().toLowerCase();
        
        message.channel.send("--"+args.join(' '));
        message.delete(500)
                .then(msg => Nya.log(`Message supprimé, raison: Nya Virtual channel; Auteur: ${msg.author}`))
                .catch(Nya.error);
        return true;
    } else return false;
    /*FIN DE --NYA*/

}
