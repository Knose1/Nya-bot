exports.execute = (message) => {

    /* RPG */
    if (message.content.indexOf('cat-') == 0) {
        let isWhitelisted = Database('407142766674575361',['user:','whitelist:']).get('user:', String(message.author.id), ['whitelist:']);
        if (isWhitelisted != undefined) {
            if(isWhitelisted['whitelist'] != undefined) {
                isWhitelisted = ('true' == isWhitelisted['whitelist'].value[0]);
            }
        }
        if  ( 
                (betaTest == 'off') ||
                (betaTest == 'on' && (isBTest || (isWhitelisted))) //Si le RPG est en vertion Test il faut être Béta testeur
            ) {
    
            //on récupère les arguments
            var args = message.content.slice('cat-'.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
            
            if (command = 'db' && (message.author == botowner || isWhitelisted) && args[0] != undefined) {
                if (args[0].toLowerCase() == 'display') {
                    
                }
                else if (args[1] != undefined && args[2] != undefined && args[0].toLowerCase() == 'execute') {
                    var arg1Defaut = args[1];
                    var arg1 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    
                    var arg2Defaut = args[2];
                    var arg2 = args[2].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    
                    if (args[3] != undefined) {
                    var arg3Defaut = args[3];
                    var arg3 = args[3].replace(/```/g,"\\\`\\\`\\\`");
                    } else {
                    var arg3Defaut = args[1];
                    var arg3 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    }
                    
                    var ctbe = `\
:tools:  __**Code to be executed :**__\n\
\`\`\`javascript\n\
Database('407142766674575361',${arg1});\n\
Database('407142766674575361',${arg1}).get(${arg1}[0],'${arg2}',${arg3});\`\`\`\n\
:speech_left:  __**Result 1 :**__`;
                    
                    arg1Defaut = arg1Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    arg2Defaut = arg2Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    arg3Defaut = arg3Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    var result1 = TestDatabase(arg1Defaut,'noFunction');
                    if (result1[1] == '') {
                        var error2 = '';
                        if ('' != TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[1]) {
                            error2 = `:exclamation: __**Error log:**__\n\
\`\`\`${TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[1]}\`\`\``;
                        }
                        
                        message.channel.send(ctbe+'\n'+`\`\`\`javascript\n\
${util.inspect( result1[0] )}\`\`\`\n\
:speech_left:  __**Result 2 :**__\n\
\`\`\`javascript\n\
${util.inspect( TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg3Defaut)[0] )}\`\`\`\n\
`+error2);
                        
                    } else {
                        message.channel.send(ctbe+'\n'+`\`\`\`javascript\n\
Undefined\`\`\`\n\
:exclamation: __**Error log:**__\n\
\`\`\`${ result1[1] }\`\`\``);
                    }
                }
                else if (args[0].toLowerCase() == 'set' && args[1] != undefined && args[2] != undefined && args[3] != undefined && args[4] != undefined) {
                    
                    /*Type = array*/
                    var arg1Defaut = args[1];
                    var arg1 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    arg1Defaut = arg1Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    /*Type = string*/
                    var arg2Defaut = args[2];
                    var arg2 = args[2].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    arg2Defaut = arg2Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    
                    /*Type = string*/
                    var arg3Defaut = args[3];
                    var arg3 = args[3].replace(/```/g,"\\\`\\\`\\\`").replace(/\"/g,"\\\"").replace(/\'/g,'\\\'');
                    arg3Defaut = arg3Defaut.replace(/\"/g,"").replace(/\'/g,"");
                    
                    /*Type = array*/
                    var arg4Defaut = args[4];
                    var arg4 = args[4].replace(/```/g,"\\\`\\\`\\\`");
                    arg4Defaut = arg4Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    /*Type = array*/
                    if (args[5] != undefined) {
                        var arg5Defaut = args[5];
                        var arg5 = args[5].replace(/```/g,"\\\`\\\`\\\`");
                    } else {
                        var arg5Defaut = args[1];
                        var arg5 = args[1].replace(/```/g,"\\\`\\\`\\\`");
                    }
                    arg5Defaut = arg5Defaut.replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"").replace(/\'/g,"").split(',');
                    
                    
                    
                    var ctbe = `\
:tools:  __**Code to be executed :**__\n\
\`\`\`javascript\n\
TestDatabase(${arg1},'noSet').get(${arg1}[0],'${arg2}',${arg5})['${arg3}'].set(${arg4});\`\`\`\n\
:speech_left:  __**Console :**__`;
                
                    if (TestDatabase(arg1Defaut,'noFunction')[1] == '') {
                        
                        if('' == TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[1]) {
                            
                            if (TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[0][arg3Defaut] != undefined ){
                                
                                message.channel.send(ctbe+"\n```"+TestDatabase(arg1Defaut)[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[0][arg3Defaut].set(arg4Defaut)+"```");
                            }
                            else {
                                message.channel.send(ctbe+"\n"+`\`\`\`Error: ${arg3Defaut} not found at Database().get()[${arg3Defaut}] \`\`\``);
                            }
                        } else {
                            message.channel.send(ctbe+"\n"+'```'+TestDatabase(arg1Defaut,'noSet')[0].get(arg1Defaut[0],arg2Defaut,arg5Defaut)[1]+'```');
                        }
                        
                    } else {
                        message.channel.send(ctbe+"\n"+'```'+TestDatabase(arg1Defaut,'noFunction')[1]+'```');
                    }
                }
                
                //HELP Utilisation des commandes
                else {
                    message.channel.send('__**use of cat-db :**__ \n\n\
    `cat-db execute <array1> <string> [array2]` \n\
        ```javascript\n\
        //If array2 isn\'t set, array1 will set array2 \n\
        console.log(TestDatabase(<array1>,\'noFunction\')); \n\
        console.log(TestDatabase(<array1>,\'noSet\').get(<array1>[0], <string>, [array2]));```\n\
\n\
    `cat-db set <array1> <string1> <string2> <array2> [array3]` \n\
        ```javascript\n\
        //If array3 isn\'t set, array1 will set array3 \n\
        TestDatabase(<array1>).get(<array1>[0], <string1>, [array3])[<string2>].set(<array2>);```')
                    .then(msg => msg.delete(60000));
                }
            }
            else if (command = 'db' && (message.author == botowner || isWhitelisted) && args[0] == undefined) {
                message.channel.send('__**use of cat-db :**__ \n\n\
    `cat-db execute <array1> <string> [array2]` \n\
        ```javascript\n\
        //If array2 isn\'t set, array1 will set array2 \n\
        console.log(TestDatabase(<array1>,\'noFunction\')); \n\
        console.log(TestDatabase(<array1>,\'noSet\').get(<array1>[0], <string>, [array2]));```\n\
\n\
    `cat-db set <array1> <string1> <string2> <array2> [array3]` \n\
        ```javascript\n\
        //If array3 isn\'t set, array1 will set array3 \n\
        TestDatabase(<array1>).get(<array1>[0], <string1>, [array3])[<string2>].set(<array2>);```')
                .then(msg => msg.delete(60000));;
            }
            else {
                /*J'ai pas de compte 0.0 INSCRIT TOI ESCLAVE ! xD*/
                
                //var Userdb = TestDatabase(['user:'],'')[0].get('user:', message.author.id, ['']);
                //if (Userdb[1] != '') {
                    //TestDatabase(['user:'],'').createForEach('user',[], [datas]);/*ICI ICI ICI ICI ICI*//*Aussi: créer la fonction*/
                    message.delete(500)
                        .then(msg => console.log(`Message supprimé, raison: rpg; Auteur: ${msg.author}`))
                        .catch(console.error);
                //}
                /*Fin de "J'ai pas de compte"*/
                
            }
        } else {
            message.channel.send('Désolé le RPG nya!bot est en vertion béta test')
                .then(msg => msg.delete(5000));
            
            message.delete(500)
                .then(msg => console.log(`Message supprimé, raison: rpg; Auteur: ${msg.author}`))
                .catch(console.error);
            
        }
        return true;
    } else return false;
    /* FIN DE RPG */

}
