exports.execute = (message, isVs, isbanned) => {

    //Si (Personne Ban)
    if (isVs && isbanned == true  && message.author.id != mention  && message.author != botowner) {
        message.author.sendMessage(message.author+' vous êtes ban du Virtual server et ne pouvez donc pas parler dans le VS');
        /*message.delete(500)
                .then(msg => Nya.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
                .catch(Nya.error);*/
        return true;
    }
    else return false;

}
