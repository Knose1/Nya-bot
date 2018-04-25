exports.execute = () => {
    
    //On regarde s'il n'existe aucune partie en cours
    if ( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)}).length == 0 ) {
        if (args[1]) {
            if (args[1].replace(/0/g,"").replace(/1/g,"").replace(/2/g,"").replace(/3/g,"").replace(/4/g,"").replace(/5/g,"").replace(/6/g,"").replace(/7/g,"").replace(/8/g,"").replace(/9/g,"").length == 0 ) {
                if (mpParties[args[1]]) {
                    if (mpParties[args[1]].tour != 0) {
                        if (mpParties[args[1]].j2 == false) {
                            
                            mpParties[args[1]].j2 = message.author.id;
                            mpParties[args[1]].tour = rand(1,2);
                            eval(`var morpFirstPlayer = mpParties[args[1]].j${mpParties[args[1]].tour}`);
                            message.channel.send(`<@${mpParties[args[1]].j1}> VS <@${mpParties[args[1]].j2}> || C'est <@${morpFirstPlayer}> qui commence !\nVoici les positions:\n\n7 | 8 | 9\n4 | 5 | 6\n1 | 2 | 3`)
                        
                        } else message.channel.send(`${message.author},\n\nLa partie est déjà complète`);
                    }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} a été supprimé`)
                }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} n'existe pas`);
            } else message.channel.send(`${message.author},\n\nL'id doit être un nombre`);
        } else message.channel.send(`${message.author},\n\nUtilisation: \`cat:morpion join <id>\``);
        
        
        
    } else {
        var MORPFoundedID = mpParties.indexOf( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)})[0] );
        
        if (Number(new Date()) >= mpParties[MORPFoundedID].maxTime) {
            
            mpParties[MORPFoundedID].tour = 0;
            message.channel.send(`${message.author},\n\nVous avez déjà une partie dont la durée limite (1h) a été atteint.\nCelle si à été supprimé\n\n**ID: ${MORPFoundedID}**`);
            
        } else {
            message.channel.send(`${message.author},\n\nVous avez déjà une partie\n**ID: ${MORPFoundedID}**`);
            
        }
    }
}
