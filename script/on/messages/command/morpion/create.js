exports.execute = () => {
    
    //On regarde s'il n'existe aucune partie en cours
    if ( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)}).length == 0 ) {
        var partID = mpParties.length;
        mpParties.push({
            maxTime: Number(new Date()) + 3600000, //Durée max d'une partie: 1h après la création
            j1: message.author.id,
            j2: false,
            positions: [0,0,0,0,0,0,0,0,0,0], //0: pas encore prise || 1: prise pas le joueur 1 || 2: prise par le joueur 2
            tour: -1 // -1 :la partie n'as pas commencé || 0: la partie est finie || 1 ou 2: joueur 1 ou 2
        });
        message.channel.send(`Partie crée ! Host: ${message.author}\nID : ${partID}\nFaites ${prefix}morpion join ${partID} pour rejoindre la partie !`);
    } else {
        var MORPFoundedID = mpParties.indexOf( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)})[0] );
        
        if (Number(new Date()) >= mpParties[MORPFoundedID].maxTime) {
            
            mpParties[MORPFoundedID].tour = 0;
            message.channel.send(`{message.author},\n\nVous avez déjà une partie dont la durée limite (1h) a été atteint.\nCelle si à été supprimé\n\n**ID: ${MORPFoundedID}**`);
            
        } else {
            message.channel.send(`{message.author},\n\nVous avez déjà une partie\n**ID: ${MORPFoundedID}**`);
            
        }
    }
}
