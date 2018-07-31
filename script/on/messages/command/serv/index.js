exports.execute = () => {
    message.delete(500)
        .then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
        .catch(e => Nya.error(e,true));
    
    //Commande Serv
        if ((command == 'guilds' || command == 'serv') && message.author == botowner) {
        var nyaguilds = '__Serveurs:__ \n\n';
        //console.log(client.guilds);
            
            client.guilds.forEach(function (guild) {
                nyaguilds = nyaguilds+` \`${guild.name.replace(/`/g,"")}\`      (${guild.id})\n`;
            });
            message.channel.send(nyaguilds, {split:true});
        }

}
