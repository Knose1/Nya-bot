exports.execute = (message, isVs, iscommand) => {
    //Si (Commande Nya!bot)
    if ((isVs || (message.guild.id == "377892426569744387" && message.channel.name == "nya-bot-vs-log")) && iscommand == true) {
        message.author.send(message.author+' les commandes sont interdits dans se channel');
        message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(console.error);
        return true;
    }
    return false;
}
