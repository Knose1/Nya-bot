exports.then = (isbannedfunc) => {

    //On récupère la liste des ban
    var guild = client.guilds.get('406926403628695556');
    var vsban = new Array();
    var vsx = -1;
    guild.roles.forEach(function (role) {
        vsx = vsx+1;
        vsban[vsx] = role.name;
        //console.log(role.name);
    });
    //console.log(message.author.id);
    
    //On regarde si la personne est ban
    var isbanned = false;
    vsban.forEach(function (banned) {
        if (message.author.id == banned && message.author != botowner && message.author.id != mention) {
            isbanned = true;
        }
    });
    
    isbannedfunc();
}
