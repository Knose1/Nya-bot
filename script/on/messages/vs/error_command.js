exports.execute = (message, isVs, iscommand) => {
    //Si (Commande Nya!bot)
    if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
        message.channel.send(message.author+' les commandes sont interdits dans se channel');
        /*message.delete(500)
                .then(msg => Nya.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(Nya.error);*/
        return true;
    }
    return false;
}
