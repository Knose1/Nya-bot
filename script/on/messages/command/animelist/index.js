exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    let availableSubcommands = ["delete","create","get"];
    
    if (args[0] && message.author.id == botownerid) {
        
        if (args[0].toLowerCase() == "add")
                args[0] = "create";
        if (availableSubcommands.indexOf(args[0].toLowerCase()) > -1) {
            
            var funcSubComm = String(require(`./on/messages/command/animelist/${args[0]}.js`).execute);
            var toEvSC = funcSubComm.slice(7, funcSubComm.length - 1)/*.replace(/\n/g,"").replace(/ +/g," ")*/;
            //console.log(toEvSC);
            eval(toEvSC);
        } else {
            message.channel.send("__Available Subcommands:__\n" + availableSubcommands.join(", "))
        }
    }
}
