class MongoFunctions1 {
    
    constructor(dbNAME) {
        if (!dbNAME) throw new Error("dbNAME is not defined at MongoFunctions.constructor") 
        
        this.dbNAME = dbNAME;
        this.log = "CREATED / OPPENED DB\n";
        this.uri = uri + dbNAME;
        MongoClient.connect(uri + dbNAME, function(err, db) {
            if (err) throw err;
            db.close();
        });
    }
    createCollection(CollectionNAME) {
    
        this.log += "\nTried to createCollection()";
        
        if (typeof(CollectionNAME) != "string") throw new Error("CollectionNAME is not a string at this.createCollection");
        
        var thisVarFunc = this;
        
        MongoClient.connect(thisVarFunc.uri, function(err, db) {
            
            if (err) throw err;
            
            var dbo = db.db(thisVarFunc.dbNAME);
            dbo.createCollection(CollectionNAME, function(err, res) {
                    
                if (err) throw err;
                db.close();
            });
        });
        return this;
    }
    insertOne(toInsert) {
        
        return {
            parent: this,
            into: function(CollectionNAME) {
                
                this.parent.log += "\nTried to insertOne().into()";
                
                if (typeof(CollectionNAME) != "string") {
                    throw new Error("CollectionNAME is not a string at this.insertOne().into()");
                    return;
                }
                var thisVarFunc = this;
                MongoClient.connect(thisVarFunc.parent.uri, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(thisVarFunc.parent.dbNAME);
                    dbo.collection(CollectionNAME).insertOne(toInsert, function(err, res) {
                        if (err) throw err;
                        db.close();
                    });
                });
                
                return this.parent;
            }
        }
    }
    insertMany(toInsert) {
        
        if (!Array().isArray(toInsert)) {
            throw new Error("toInsert is not an array at this.insertMany()");
            return;
        }
        
        return {
            parent: this,
            into: function(CollectionNAME) {
                
                this.parent.log += "\nTried to insertMany().into()";
                
                if (typeof(CollectionNAME) != "string") {
                    throw new Error("CollectionNAME is not a string at this.insertMany().into()");
                    return;
                }
                var thisVarFunc = this;
                MongoClient.connect(thisVarFunc.parent.uri, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(thisVarFunc.parent.dbNAME);
                    dbo.collection(CollectionNAME).insertMany(toInsert, function(err, res) {
                        if (err) throw err;
                        db.close();
                    });
                });
                
                return this.parent;
            }
        }
    }
    find(toFind) {
        
        return {
            parent: this,
            in: function(CollectionNAME) {
                
                this.parent.log += "\nTried to find().in()";
                
                if (typeof(CollectionNAME) != "string") {
                    throw new Error("CollectionNAME is not a string at this.find().in()");
                    return;
                }
                var thisVarFunc = this;
                MongoClient.connect(thisVarFunc.parent.uri, function(err, db) {
                    if (err) throw err;
                    
                    var dbo = db.db(thisVarFunc.parent.dbNAME);
                    if (toFind)
                        dbo.collection(CollectionNAME).find({}, toFind).toArray(function(err, result) {
                            if (err) throw err;
                            this.result = result;
                            db.close();
                        });
                    else {
                        dbo.collection(CollectionNAME).find({}).toArray(function(err, result) {
                            if (err) throw err;
                            thisVarFunc.result = result;
                            db.close();
                        });
                    }
                });
                
                return thisVarFunc.result;
            }
        }
    }
    updateOne(toUpdate,toInsert) {
        
        return {
            parent: this,
            into: function(CollectionNAME) {
                
                this.parent.log += "\nTried to updateOne().into()";
                
                if (typeof(CollectionNAME) != "string") {
                    throw new Error("CollectionNAME is not a string at this.updateOne().into()");
                    return;
                }
                var thisVarFunc = this;
                MongoClient.connect(thisVarFunc.parent.uri, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(thisVarFunc.parent.dbNAME);
                    dbo.collection(CollectionNAME).updateOne(toUpdate,toInsert, function(err, res) {
                        if (err) throw err;
                        db.close();
                    });
                });
                
                return this.parent;
            }
        }
    }
    updateMany(toUpdate,toInsert) {
        
        return {
            parent: this,
            into: function(CollectionNAME) {
                
                this.parent.log += "\nTried to updateMany().into()";
                
                if (typeof(CollectionNAME) != "string") {
                    throw new Error("CollectionNAME is not a string at this.updateMany().into()");
                    return;
                }
                var thisVarFunc = this;
                MongoClient.connect(thisVarFunc.parent.uri, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(thisVarFunc.parent.dbNAME);
                    dbo.collection(CollectionNAME).updateMany(toUpdate,toInsert,function(err, res) {
                        if (err) throw err;
                        db.close();
                    });
                });
                
                return this.parent;
            }
        }
    }
}

function animelist1() {

    this.add = function(anime) {
        
        if (typeof(anime) == "object" && !Array.isArray(anime)) {
            this.animes.push(anime);
            return this;
        } else throw new Error("anime is not an [object Object] at animelist.add(anime)");
        
    }
    this.animes = [];
}

function anime1(arg1) {
    
    if (typeof(arg1) == "object" && !Array.isArray(arg1)) this.object = arg1;
    
    else if (typeof(arg1) != "string" && arg1 != undefined) throw new Error("name is not a string at anime(name)");
    
    else this.object = {name:arg1};
    /*name*/
    this.setname = function(name) {
        if (typeof(name) != "string") throw new Error("name is not a string at setname(name)")
        this.object.name = name;
        return this;
    }
    
    /*image*/
    this.setimage = function(image) {
        if (typeof(image) != "string") throw new Error("image is not a string at setimage(image)")
        this.object.image = image;
        return this;
    }
    
    /*story_fr*/
    this.setstory_fr = function(story_fr) {
        if (typeof(story_fr) != "string") throw new Error("story_fr is not a string at setstory_fr(story_fr)")
        this.object.story_fr = story_fr;
        return this;
    }
    
    /*story_fr_source*/
    this.setstory_fr_source = function(story_fr_source) {
        if ( !Array.isArray(story_fr_source) && story_fr_source != "undefined") throw new Error("story_fr_source is not an array at setstory_fr_source(story_fr_source)")
        this.object.story_fr_source = story_fr_source;
        return this;
    }
    
    /*story_en*/
    this.setstory_en = function(story_en) {
        if (typeof(story_en) != "string") throw new Error("story_en is not a string at setstory_fr(story_en)")
        this.object.story_en = story_en;
        return this;
    }
    
    /*story_en_source*/
    this.setstory_en_source = function(story_en_source) {
        if ( !Array.isArray(story_en_source) && story_en_source != "undefined") throw new Error("story_en_source is not an array at setstory_en_source(story_en_source)")
        this.object.story_en_source = story_en_source;
        return this;
    }
    
    /*anime_fr*/
    this.setanime_fr = function(anime_fr) {
        if (typeof(anime_fr) != "string") throw new Error("anime_fr is not a string at setanime_fr(anime_fr)")
        this.object.anime_fr = anime_fr;
        return this;
    }
    
    /*anime_en*/
    this.setanime_en = function(anime_en) {
        if (typeof(anime_en) != "string") throw new Error("anime_en is not a string at setanime_en(anime_en)")
        this.object.anime_en = anime_en;
        return this;
    }
    
    /*op*/
    this.setop = function(op) {
        if ( !Array.isArray(op)) throw new Error("op is not an array at setop(op)")
        this.object.op = op;
        return this;
    }
    
    /*opFull*/
    this.setopFull = function(opFull) {
        if ( !Array.isArray(opFull)) throw new Error("opFull is not an array at setopFull(opFull)")
        this.object.opFull = opFull;
        return this;
    }
    
    /*ed*/
    this.seted = function(ed) {
        if ( !Array.isArray(ed)) throw new Error("ed is not an array at seted(ed)")
        this.object.ed = ed;
        return this;
    }
    
    /*edFull*/
    this.setedFull = function(edFull) {
        if ( !Array.isArray(edFull)) throw new Error("edFull is not an array at setedFull(edFull)")
        this.object.edFull = edFull;
        return this;
    }
    
    this.addTo = function(NameOfvar) {
        NameOfvar.add(this.object);
    }
}

//On check les permissions
    function check_perm1(options) {
        //message.channel.send(`Before Before Before ${String(permissions)}, ${String(message.id)}, ${String(Fauthor)}, ${String(Fguild)}, ${String(Fchannel)}` )
        
        this.check = function() {return new Promise(function(resolve, reject) {
                permissions = options.permissions;
                message = options.message;
                Fauthor = options.author;
                Fguild = options.guild;
                Fchannel = options.channel;
                if (Array.isArray(permissions)) {
			
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
                            
                            if (options.guild && options.channel) {
                                var z = x && y;
                                resolve(z);
			    } else if (options.channel)
                                resolve(y);
                            else if (options.guild)
                                resolve(x);
                            else
                                resolve(y);
                    
                        } catch (err) {
                        
                            reject(new Error("error in Permissions please check https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS\n"));
			
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


/*OLD DB USING GUILD*/
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
    return MongoFunctions = MongoFunctions1, Database__1 = f1, TestDatabase = f2, Database = f3, rand = f4, clean = clean1, fulllog = fulllog1, check_perm = check_perm1, animelist = animelist1, anime = anime1;
}
