//On check les permissions
    function check_perm1(permissions, message, Fauthor, Fguild, Fchannel) {
        //message.channel.send(`Before Before Before ${String(permissions)}, ${String(message.id)}, ${String(Fauthor)}, ${String(Fguild)}, ${String(Fchannel)}` )
        this.check = function() {
            var permissions, message, Fauthor, Fguild, Fchannel;
            return this.checkkk([permissions, message, Fauthor, Fguild, Fchannel])
        }
        this.checkkk = function(arr) {return new Promise(function(resolve, reject) {
		message.channel.send(arr.map(m => {return String(m)}).join(", "));
                permissions = arr[0];
                message = arr[1];
                Fauthor = arr[2];
                Fguild = arr[3];
                Fchannel = arr[4];
                if (Array.isArray(permissions)) {
                    message.channel.send(`Before Before ${String(permissions)}, ${String(message.id)}, ${String(Fauthor)}, ${String(Fguild)}, ${String(Fchannel)}` )
                    
                    if (message == undefined) {
                
                        reject( new Error("message is not defined, please define message at check_perm(permission, author, message)") );
                        return;
                        
                    } else {
                        try {
                            //On test si message est un vrai message
                            var testtest = Boolean(
                                message.channel
                                && message.channel.send
                                && message.author.id
                                && message.guild.ownerID
                            );
                            
                        } catch (err) {
                            reject( new Error("\"message\" isn't a real message") );
                            return;
                        }
                        if (!testtest) {
                            reject( new Error("\"message\" isn't a real message") );
                            return;
                        }
                    }
                    message.channel.send(`Before ${String(permissions)}, ${String(message.id)}, ${String(Fauthor)}, ${String(Fguild)}, ${String(Fchannel)}` )
                            
                    if (Fauthor == undefined)
                        var Fauthor = message.author;
                    
                    if (Fguild == undefined)
                        var Fguild = message.guild;
                    if (Fchannel == undefined)
                        var Fchannel = message.channel;
                    
                    if (Fchannel.type != "text") {
                        reject( new Error("Fchannel is not a textual channel") );
                        return;
                    }
                    
                        try {
                            var x = Fguild.member(Fauthor).hasPermissions(permissions);
                            
                            var y = Fchannel.permissionsFor(Fauthor).has(permissions);
                            message.channel.send(String(x) + " " + String(y) );
                            message.channel.send(`After ${String(permissions)}, ${String(message.id)}, ${String(Fauthor)}, ${String(Fguild)}, ${String(Fchannel)}` )
                            resolve(y);
                    
                        } catch (err) {
                            if (Fauthor.id != Fguild.ownerID) {
                                message.channel.send("Sorry I don't have the permission to check permissions.").then(m => m.delete(6000));
                                reject(new Error("permission MANAGE_WEBHOOKS denied to the bot"));
			    }
                        }
                  
                        
                } else {
                    reject( new Error('permissions is not an Array') );
                }
            });
        }
        
    }

/*Source of clean: 'https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/making-an-eval-command.html' */
            const clean1 = text => {
                if (typeof(text) === "string")
                    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                    return text;
            }
            /**/
            
            
            /**/
             function fulllog1(FuncArgument1, max) {
    			if (max == undefined) {max = 1000}
                let i = 0;
                var popout = new Array();
                
                if (FuncArgument1.length <= max) {
                    popout[0] = FuncArgument1;
                }
                else
                while (FuncArgument1.length > max && i < 100) {
                    popout[i] = FuncArgument1.slice(0,4);
                    
					
					if (popout[i].lastIndexOf(" ") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(" ") + 1);
                        
                    else if (popout[i].lastIndexOf(";") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(";") + 1);
                        
					else if (popout[i].lastIndexOf(",") != -1) 
                    	popout[i] = popout[i].slice(0,popout[i].lastIndexOf(",") + 1);
                    else {
                    
                    	popout[i] = FuncArgument1.slice(0,10 + max);
                    
					
						if (popout[i].lastIndexOf(" ") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(" ") + 1);
                        
                    	else if (popout[i].lastIndexOf(";") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(";") + 1);
                        
						else if (popout[i].lastIndexOf(",") != -1) 
                    		popout[i] = popout[i].slice(0,popout[i].lastIndexOf(",") + 1);
                    
                    }
                    
                    
                    FuncArgument1 = FuncArgument1.slice(popout[i].length);
                    if (FuncArgument1.length != 0) 
	                    popout[i + 1] = FuncArgument1;
                    
                    i += 1;
                };
                var i2 = 0;
                while (i2 < 20) {
                    popout.forEach( m => {
                        if (m.length == 0 || m.replace(/ +/g,"").length == 0)
    		                popout.splice(popout.indexOf(m), 1);
                    });
                    i2 += 1;
                }
                return popout;
            }
            /**/


/*The DB PART 1*/
function f1(SGuild, allRolePrefix, gt) {
//Si on a donner une liste de prefix
    let retError = '';
    var toReturn = new Object();
    var toBeReturned = new Object();
    if (typeof(SGuild) != 'string') {
        retError += `Not a string at 'database(${SGuild})'`+"\n";
    }
    else if (client.guilds.get(SGuild) == undefined) {
        retError += `Guild not found at 'database(${SGuild})'`+"\n";
    }
    else if (Array.isArray(allRolePrefix) && allRolePrefix.length > 0) {
        
        //Pour chaque préfix
        //console.log("allRolePrefix = "+allRolePrefix);
        let noError = true;
        allRolePrefix.forEach(rolePrefix => {
            //console.log("rolePrefix = "+rolePrefix);
            
            
            //S'il y a pas d'erreur:
            if (noError) {
                
                //On regarde si le préfix est un txt
                if (typeof(rolePrefix) == 'string') {
                    var newRolePrefix = rolePrefix;
                    toReturn[rolePrefix] = new Array();
                    rolePrefix = newRolePrefix;
                    //On récupère les data de chaque role
                    client.guilds.get(SGuild).roles.forEach(role => {
                        //On regarde si le role correspond au préfix
                        if (role.name.indexOf(rolePrefix) == 0) {
                            //On récupère les data `${prefix}${data0} ${data1} ${data2}` exemple: user:1 1000
                            var data = role.name.slice(rolePrefix.length).trim().split(/ +/g);
                            toReturn[rolePrefix][data[0]] = data.slice(1);
                            //Résultat: toReturn[prefix (sans ":")][data0] = [data1, data2]; exemple: toReturn[user][1] = [1000]
                        }
                    });
                    if (toReturn[rolePrefix].length == 0) {
                        noError = false;
                        toReturn = undefined;
                        retError += `Error: ${rolePrefix} not found in the db` + "\n";
                    }
                } else {
                    //Si le préfix est pas un txt on retourne une erreur
                    noError = false;
                    toReturn = undefined;
                    retError += `Not a string at allRolePrefix.forEach(role =>{}) && role = ${rolePrefix}`+ "\n";
                    return [undefined, retError];
                }
            } else return [undefined, retError];
        });
        //On a récupéré les data de toReturn mais on a pas encors crée de méthode pour obtenir ${data0} à partir de ${data1} pour chaque préfix
        if (retError == '' && 'noGet' != gt && 'noFunction' != gt) {
            toReturn.get = function (dataPrefix, data1, prefixInclude, cl) {
                let retError = '';
                if (typeof(dataPrefix) == 'string' && typeof(data1) == 'string') {
                    if (undefined != toReturn[dataPrefix] ) {
                        //On récupère l'id de la data à partir de la primary (dataPrefix)
                        var id = toReturn[dataPrefix].findIndex(data => {
                            return data1 == data;
                        });
                        if (id != -1) {
                            //On a donné une liste de préfixInclude
                            if (prefixInclude != undefined && Array.isArray(prefixInclude)) {
                                //Pour chaque préfix inclue
                                toBeReturned['id'] = id;
                                prefixInclude.forEach(prefixI => {
                                    var defautprefixI = prefixI;
                                    //Si toReturn contient le préfix et que le préfix n'est pas id
                                    if (undefined != toReturn[prefixI] && 'id' != toReturn[prefixI]) {
                                        //On récupère la data correspondant à l'id
                                        toBeReturned[prefixI] = {};
                                        toBeReturned[prefixI].value = toReturn[prefixI][id];
                                        
                                        
                                        if ('noSet' != gt && gt != 'noFunction') {
                                            /*On créer une fonction .set()*/
                                            toBeReturned[prefixI].set = function (newValue) {
                                                let retError = '';
                                                if (Array.isArray(newValue)) {
                                                    var datas = toReturn[prefixI][id];
                                                    client.guilds.get(SGuild).roles.find('name', defautprefixI+id+" "+datas.join(' ')).setName(defautprefixI+id+" "+newValue.join(' '))
                                                        .catch(console.error);
                                                    retError = `Edited the data "${defautprefixI+id+" "+datas.join(' ')}" => "${defautprefixI+id+" "+newValue.join(' ')}"` + "\n";
                                                    if (cl == 'log') console.log(retError);
                                                    return retError;
                                                }
                                                else {
                                                    retError += `Not an Array at Database().get().set(${newValue})` + "\n";
                                                    return retError;
                                                }
                                            }
                                            /*FIN DE FONCTION SET*/
                                        }
                                    
                                    
                                    }
                                    //Si le préfix est 'id'
                                    else if('id' == prefixI) {
                                        retError += `The prefix 'id' is disable at Database().get()` + "\n";
                                    }
                                    //Sinon
                                    else {
                                        toBeReturned[prefixI] = undefined;
                                        retError += `toBeReturned[${prefixI}] = undefined` + "\n";
                                    }
                                });
                                return [toBeReturned, retError];
                            }
                            //On a pas donné de préfixInclude
                            else if (prefixInclude == undefined) {
                                retError += `prefixInclude is undefined at Database().get(${dataPrefix},${data1},${prefixInclude})`+"\n";
                                return [undefined, retError];
                            }
                            //On a donné une var qui n'est pas une liste
                            else if (prefixInclude != undefined && !Array.isArray(prefixInclude)) {
                                retError += `Not and array at Database().get(${dataPrefix},${data1},${prefixInclude})`+"\n";
                                return [undefined, retError];
                            }
                        } else {
                            retError += `${data1} not found at Database().get(${dataPrefix},${data1})`+"\n";
                            return [undefined, retError];
                        }
                    } else {
                        retError += `Prefix unknown at Database().get(${dataPrefix})`+"\n";
                        return [undefined, retError];
                    }
                } else {
                    if (typeof(dataPrefix) != 'string') retError += `dataPrefix :Not a string at Database().get(${dataPrefix.toString()},${data1.toString()})`+"\n";
                    if (typeof(data1) != 'string') retError += `data1 :Not a string at Database().get(${dataPrefix.toString()},${data1.toString()})`+"\n";
                    return [undefined, retError];
                }
            };
        }
        return [toReturn, retError];
    } else {
        if(allRolePrefix != undefined) {
            //Si on a pas donner de liste de préfix
            if(!Array.isArray(allRolePrefix)) retError += `Not an array at 'Database(${SGuild} ${allRolePrefix})'`+"\n";
            if(allRolePrefix.length <= 0) retError += `Can't read length < 0 at 'Database(${SGuild} ${allRolePrefix})'`+"\n";
        } else retError += `allRolePrefix is undefined at 'Database(${SGuild} ${allRolePrefix})'`+"\n";
        return [undefined, retError];
    }
};
/*Test the db*/

function f2(allRolePrefix, gt) {return f1('407142766674575361', allRolePrefix, gt)};

/*End Test the db*/



/*The DB PART 2*/
function f3(SGuild, allRolePrefix) {
    var x1 = f1(SGuild, allRolePrefix);
    if (x1[1] == '') {
        x1[0].get = function (dataPrefix, data1, prefixInclude) {
            var x2 = f1(SGuild, allRolePrefix)[0].get(dataPrefix, data1, prefixInclude, 'log')
            
            if (x2[1] == '') return x2[0];
            else console.log(x2[0]);
        
        };
        
        return x1[0];
    } else console.log(x1[1]);
};


function f4(min,max) {
    return Math.floor((Math.random() * max) + min);
};
exports.load = () => {
    return Database__1 = f1, TestDatabase = f2, Database = f3, rand = f4, clean = clean1, fulllog = fulllog1, check_perm = check_perm1;
}
