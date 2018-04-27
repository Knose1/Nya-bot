exports.execute = () => {
    
    //On regarde s'il existe au moins partie en cours
    if ( mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)}).length == 0 ) {
        
        message.channel.send(`${message.author},\n\n Vous n'avez aucune partie en cours`);
        
    } else {
        var AllMORPFoundedID = mpParties.filter(m => {return m.tour != 0 && (m.j1 == message.author.id || m.j2 == message.author.id)});
        if (args[1] && args[2]) {
            if (args[1].replace(/0/g,"").replace(/1/g,"").replace(/2/g,"").replace(/3/g,"").replace(/4/g,"").replace(/5/g,"").replace(/6/g,"").replace(/7/g,"").replace(/8/g,"").replace(/9/g,"").length == 0 && args[2].replace(/0/g,"").replace(/1/g,"").replace(/2/g,"").replace(/3/g,"").replace(/4/g,"").replace(/5/g,"").replace(/6/g,"").replace(/7/g,"").replace(/8/g,"").replace(/9/g,"").length == 0 ) {
                if (args[2].length == 1 && args[2] != "0") {
                    if (mpParties[args[1]]) {
                        if (mpParties[args[1]].tour != 0) {
                            if ( AllMORPFoundedID.indexOf(mpParties[args[1]]) > -1 ) {
                                var morpPlayerNum = 0;
                                if (mpParties[args[1]].j1 == message.author.id) morpPlayerNum = 1;
                                else if (mpParties[args[1]].j2 == message.author.id) morpPlayerNum = 2;
                                    
                                if (mpParties[args[1]].tour == morpPlayerNum) {
                                
                                    if (mpParties[args[1]].positions[Number(args[2]) - 1] == 0) {
                                        
                                        mpParties[args[1]].positions[Number(args[2]) - 1] = morpPlayerNum;
                                        
                                        /*Conversion de la table:
                                        
                                        7 | 8 | 9       6 | 7 | 8
                                        4 | 5 | 6   =>  3 | 4 | 5
                                        1 | 2 | 3       0 | 1 | 2
                                        
                                        */
                                        
                                        if (
                                            //colones
                                            Array(mpParties[args[1]].positions[0] , mpParties[args[1]].positions[3] , mpParties[args[1]].positions[6]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            Array(mpParties[args[1]].positions[1] , mpParties[args[1]].positions[4] , mpParties[args[1]].positions[7]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            Array(mpParties[args[1]].positions[2] , mpParties[args[1]].positions[5] , mpParties[args[1]].positions[8]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            //lignes
                                            Array(mpParties[args[1]].positions[0] , mpParties[args[1]].positions[1] , mpParties[args[1]].positions[2]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            Array(mpParties[args[1]].positions[3] , mpParties[args[1]].positions[4] , mpParties[args[1]].positions[5]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            Array(mpParties[args[1]].positions[6] , mpParties[args[1]].positions[7] , mpParties[args[1]].positions[8]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            //Diagonales
                                            Array(mpParties[args[1]].positions[0] , mpParties[args[1]].positions[4] , mpParties[args[1]].positions[8]).filter(m => m == morpPlayerNum).length == 3
                                                ||
                                            Array(mpParties[args[1]].positions[6] , mpParties[args[1]].positions[4] , mpParties[args[1]].positions[2]).filter(m => m == morpPlayerNum).length == 3
                                            
                                        ) {
                                            
                                            mpParties[args[1]].tour = 0;
                                            message.channel.send(`${message.author} a gagné !\n\`\`\`Positions:\n\n${String(mpParties[args[1]].positions[6]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[7]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[8]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[3]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[4]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[5]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[0]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[1]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[2]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\`\`\``);
                                            
                                        } else if(mpParties[args[1]].positions.indexOf(0) == -1) {
                                            
                                            mpParties[args[1]].tour = 0;
                                            message.channel.send(`Match nul !\n\`\`\`Positions:\n\n${String(mpParties[args[1]].positions[6]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[7]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[8]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[3]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[4]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[5]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[0]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[1]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[2]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\`\`\``);
                                            
                                        } else {
                                            
                                            if (mpParties[args[1]].tour + 1 >= 3) {
                                                mpParties[args[1]].tour = 1;
                                                message.channel.send(`Au tour de <@${mpParties[args[1]].j1}>\n\`\`\`Positions:\n\n${String(mpParties[args[1]].positions[6]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[7]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[8]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[3]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[4]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[5]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[0]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[1]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[2]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\`\`\``);
                                            } else {
                                                mpParties[args[1]].tour = 2;
                                                message.channel.send(`Au tour de <@${mpParties[args[1]].j2}>\n\`\`\`Positions:\n\n${String(mpParties[args[1]].positions[6]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[7]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[8]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[3]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[4]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[5]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\n${String(mpParties[args[1]].positions[0]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[1]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")} | ${String(mpParties[args[1]].positions[2]) .replace(/0/g," ").replace(/1/g,"O").replace(/2/g,"X")}\`\`\``);
                                            }
                                            
                                        }
                                    } else {
                                        message.channel.send(`${message.author},\n\nLa case est déjà prise`);
                                    }
                                
                                }else message.channel.send(`${message.author},\n\nCe n'est pas votre tour !`);
                            }else message.channel.send(`${message.author},\n\nVous n'êtes pas dans la partie`);
                        }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} a été supprimé`)
                    }else message.channel.send(`${message.author},\n\nLa partie ${args[1]} n'existe pas`);
                } else message.channel.send(`${message.author},\n\nLa position est un nombre compris entre 1 et 9`);
            } else message.channel.send(`${message.author},\n\nL'id et la position doivent être un nombre`);
        } else message.channel.send(`${message.author},\n\nUtilisation: \`${prefix}morpion play <id> <position>\``);
    }
}
