exports.execute = () => {
    
    //On regarde s'il existe au moins partie en cours
    if ( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)}).length == 0 ) {
        
        message.channel.send(`${message.author},\n\n Vous n'avez aucune partie en cours`);
        
    } else {
        var AllMORPFoundedID = mpParties.indexOf( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)}) );
        if (args[1]) {
            if (args[1].replace(/0/g,"").replace(/1/g,"").replace(/2/g,"").replace(/3/g,"").replace(/4/g,"").replace(/5/g,"").replace(/6/g,"").replace(/7/g,"").replace(/8/g,"").replace(/9/g,"").length == 0 ) {
                if (mpParties[args[1]]) {
                    if (mpParties[args[1]].tour != 0) {
                        if ( AllMORPFoundedID.indexOf(mpParties[args[1]]) > -1 ) {
                            
                                mpParties[args[1]].tour = 0;
                                message.channel.send(`La partie **ID: ${args[1]}** à été supprimé par ${message.author}`)
                        
                        }else message.channel.send(`${message.author},\n\nVous n'êtes pas dans la partie`);
                    }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} à déjà été supprimé`)
                }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} n'existe pas`);
            } else message.channel.send(`${message.author},\n\nL'id doit être un nombre`);
        } else message.channel.send(`${message.author},\n\nUtilisation: \`cat:morpion delete <id>\``);
    }
}
