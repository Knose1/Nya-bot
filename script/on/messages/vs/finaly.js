exports.execute = async function(message, isVs, Pfx) {
    
    //Commande-VS = Ok
    if     (
                (
                    isVs || 
                    (
                        message.guild.id == "377892426569744387" && 
                        message.channel.name == "nya-bot-vs-log"
                    )
                ) //Conditions du channel (nya-bot-vs)
                    && 
                (
                    message.content.indexOf('--') == 0 ||   /**/
                    message.content.indexOf('//') == 0 ||   /*Préfix ou attachement*/
                    message.attachments.size != 0 &&        /**/
                    (
                        message.content.length == 0 //Si c'est un attachement sans préfix il faut pas de contenu
                    )
                )
            )
    {
        if (message.content.indexOf('//') == 0){
            var words = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var words = message.content.slice('--'.length).trim().split(/ +/g);
        }

        //On regarde s'il y a une invite discord dans l'embed
        if (message.content.match(/discord.gg\/\w+/g)) {
            message.author.send("`Sending discord invite in the VS is NOT ALLOWED !` ÒwÓ\nhttps://tenor.com/307I.gif");
            message.delete(1);
            return;
        }
        
        //On regarde s'il y a une image à ajouter à l'embed
        var vsIsImage = false;
        var wordsIndex = -1;
        var newwords = new Array();
        var vsImage = new Array();
        var yLink = false;
        var vEqual = new String();
        if (message.attachments.size == 0) {
            words.forEach(word => {
                wordsIndex = wordsIndex + 1 ;
                //YT avec des ' // '

                //Si c'est une video Youtube cas 1
                if (!vsIsImage && word.indexOf('//img:https://www.youtube.com/watch?v=') == 0) {
                    vsImage = word.slice('//img:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;

                }
                //Si c'est une video Youtube cas 2
                else if (!vsIsImage && word.indexOf('//yt:https://www.youtube.com/watch?v=') == 0) {
                    vsImage = word.slice('//yt:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 3
                else if (!vsIsImage && word.indexOf('//yt:v=') == 0) {
                    vsImage = word.slice('//yt:v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 4
                else if (!vsIsImage && word.indexOf('//yt:https://youtu.be/') == 0) {
                    vsImage = word.slice('//yt:https://youtu.be/'.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 5
                else if (!vsIsImage && word.indexOf('//img:https://youtu.be/') == 0) {
                    vsImage = word.slice('//img:https://youtu.be/'.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //YT avec des ' -- '

                //Si c'est une video Youtube cas 1
                if (!vsIsImage && word.indexOf('--img:https://www.youtube.com/watch?v=') == 0) {
                    vsImage = word.slice('--img:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;

                }
                //Si c'est une video Youtube cas 2
                else if (!vsIsImage && word.indexOf('--yt:https://www.youtube.com/watch?v=') == 0) {
                    vsImage = word.slice('--yt:https://www.youtube.com/watch?v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 3
                else if (!vsIsImage && word.indexOf('--yt:v=') == 0) {
                    vsImage = word.slice('--yt:v='.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('&')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 4
                else if (!vsIsImage && word.indexOf('--yt:https://youtu.be/') == 0) {
                    vsImage = word.slice('--yt:https://youtu.be/'.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est une video Youtube cas 5
                else if (!vsIsImage && word.indexOf('--img:https://youtu.be/') == 0) {
                    vsImage = word.slice('--img:https://youtu.be/'.length).trim().split(/ +/g);
                    vEqual = vsImage[0];
                    vsImage = `https://i.ytimg.com/vi/${vsImage[0].split('?')[0]}/hqdefault.jpg`;
                    vsIsImage = true;
                    yLink = true;
                }
                //Si c'est un lien autre que YT
                else if (!vsIsImage && word.indexOf('//img:http') == 0) {
                    vsImage = word.slice('//img:'.length).trim().split(/ +/g);
                    vsImage = vsImage[0];
                    vsIsImage = true;
                }
                else if (!vsIsImage && word.indexOf('--img:http') == 0) {
                    vsImage = word.slice('--img:'.length).trim().split(/ +/g);
                    vsImage = vsImage[0];
                    vsIsImage = true;
                }
                if (!vsIsImage) {newwords[wordsIndex] = word}
            });
        } else {
            message.attachments.forEach(attachment => {
                wordsIndex = wordsIndex + 1 ;
                vsImage[wordsIndex] = attachment.url;
            });
            await resolveAfter(2.5);
        vsImage = vsImage.join('\n');
            vsIsImage = true;
            newwords = words;
        }
        if (vsIsImage && yLink) {
            var vsmessage = newwords.join(' ') + "\n\n" + "https://www.youtube.com/watch?v=" + vEqual;
        }
        else if (vsIsImage) {
            var vsmessage = newwords.join(' ') + "\n\n" + vsImage;
        } else {
            var vsmessage = words.join(' ');
        }
            //Gestions des emojis du vs
            VSEmojies.forEach(vsE => {
                vsmessage = vsmessage.replace(new RegExp(vsE.code, "g"),vsE.name)
                vsmessage = vsmessage.replace(new RegExp(vsE.name, "g"), vsE.name + " ");
                vsmessage = vsmessage.split(" ").map(m => {
                    if(m.match(new RegExp(vsE.name, "g")) != null) {

                        var m2 = m;
                        var m3 = [];
                        //on vas récuperer les vsE (emoji) pour en suite couper la chaine de caractère m et isoler les match dans une array sans modifier les index
                        var allMatch = m.match(new RegExp(`(\\\\|${vsE.name}){1,}`, "g")).filter(m => m.match(/:rikka:/g));
                        allMatch.forEach( match => {

                            //découpage de m
                            m3.push( m2.slice(0, m2.indexOf(match)) );
                            m2 = m2.slice(m2.indexOf(match));

                            m3.push( m2.slice(0, m2.indexOf(match) + match.length) );
                            m2 = m2.slice(m2.indexOf(match) + match.length);
                        });
                        m3.push(m2);
                        return m3.map( x => {
                            if (x.match(/\\/g) != null) {

                                if ( Math.floor(x.match(/\\/g).length / 2) == x.match(/\\/g).length / 2) return x.replace(new RegExp(vsE.name, "g"), vsE.code);
                                else return x;

                            } else if (vsE.name == x) return vsE.code;
                            else return x;
                        }).join("")

                    } else {
                        return m
                    }
                }).join(" ")
            });
            //On créer un embed

            var nbmois = new Date().getMonth();
            nbmois = nbmois+1;
            const embed = new Discord.RichEmbed()
                //.setTitle("Virtual Channel")
                .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
                .setColor("#ff1a8c")
                .setDescription(vsmessage)
                .setFooter("Le "+ UTCDate(Pfx.UTC).getDate()+"/"+ nbmois+"/"+ UTCDate(Pfx.UTC).getFullYear()+" à "+ UTCDate(Pfx.UTC).toLocaleTimeString()+` (UTC+${Pfx.UTC}) | `+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
                .setThumbnail(message.author.avatarURL);

            if (vsIsImage) {
                embed.setImage(vsImage);
            }

            if (message.author.bot == true) {
                embed.setAuthor("BOT: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/407272279416766475/BOT.png");
                if (message.author.id == mention) {embed.setColor("#DD00FF");}
                else {embed.setColor("#FFFFFF");}
            }
            else if (message.author.id == botownerid) {
                embed.setAuthor("OWNER: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/409108259069231115/Owner.png");
                embed.setColor("#D84D35");
            }
            else if (isMod) {
                embed.setAuthor("MOD: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/409108258989539349/Mod.png");
                embed.setColor("#0077DD");
            }
            else if (isBTest) {
                embed.setAuthor("β-Testeur:"+message.author.username+"#"+message.author.discriminator);
                embed.setColor("#ff8c1a");
            }
            else if (isADev) {
                embed.setAuthor(message.author.username+"#"+message.author.discriminator);
                embed.setColor("#2ecc71");
            }

            /*Fin embed*/

            //Pour chaque serv:
            const ci = () => {
                var tr;
                try {
                    tr = Database('415208185616531456', ['count:'])['count:'].length;
                } catch (err) {
                    tr = 0;
                }
                return tr;
            };
            var cid = ci();
            var countMess = 0;
            var IdMess = 0;
            /*var countR = client.guilds.get('415208185616531456').createRole({
                name: `count:${cid} ${countMess}`,
                color: 'GOLD',
            })*/

            client.guilds.forEach(function (guild) {
                //Pour chaque channel

                guild.channels.forEach(function (channel) {
                    //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                    if (channel.name == "nya-bot-vs"+Pfx.name || channel.name == "nya-bot-vs-"+Pfx.name ) {


                        //On envoie l'embed
                        channel.send({embed})
                        /*.then(msg => {
                            client.guilds.get('415208185616531456').createRole({
                                name: `mess ${cid}:${IdMess} ${msg.id}`,
                                color: 'BLUE',
                                });
                            IdMess += 1;
                        });
                        countMess += 1;
                        countR.then(role => {role.edit({
                            name: `count:${cid} ${countMess}`,
                            color: 'GOLD',
                            })
                        });*/
                    }
                    else if (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log" && Pfx.name != 'nsfw') {


                        //On envoie l'embed
                        channel.send(`__Virtual Channel: ${Pfx.name}__`,{embed})
                        /*.then(msg => {
                            client.guilds.get('415208185616531456').createRole({
                                name: `mess ${cid}:${IdMess} ${msg.id}`,
                                color: 'BLUE',
                                });
                            IdMess += 1;
                        });
                        countMess += 1;
                        countR.then(role => {role.edit({
                            name: `count:${cid} ${countMess}`,
                            color: 'GOLD',
                            })
                        });*/
                    }
                });
            });
        if (message.attachments.size != 0) {
            await resolveAfter(5);
        }
        
        
        var allNya = client.channels.filter(f => {return (f.name == "nya-bot-vs-" + Pfx.name || f.name == "nya-bot-vs" && Pfx.name == "") && f.type == "text" && f.name != "nya-bot-vs-log"})
        if (vsStatus[message.author.id] || (message.author.id == botownerid && client.channels.get('461052318532763666').topic != null && client.channels.get('461052318532763666').topic != "461052318532763666") ) {
            
            if (message.author.id == botownerid && client.channels.get('461052318532763666').topic != "461052318532763666" && client.channels.get('461052318532763666').topic != null) {
                
                if (!vsStatus[message.author.id])
                    vsStatus[message.author.id] = client.channels.get('461052318532763666').topic;
                
                client.channels.get('461052318532763666').setTopic("461052318532763666");
                
            }
            
            var oldVsStatus = vsStatus[message.author.id];
            vsStatus[message.author.id] = undefined
        
            //On créer l'embed
            
            var nbmois = new Date().getMonth();
            nbmois = nbmois+1;
            const embed = new Discord.RichEmbed()
                //.setTitle("Virtual Channel")
                .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
                .setColor("#FFFFFF")
                .setDescription(`Has no more the status "${oldVsStatus}"`)
                .setFooter("Le "+ UTCDate(Pfx.UTC).getDate()+"/"+ nbmois+"/"+ UTCDate(Pfx.UTC).getFullYear()+" à "+ UTCDate(Pfx.UTC).toLocaleTimeString()+` (UTC+${Pfx.UTC}) | `+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
                .setThumbnail(message.author.avatarURL);
            
            allNya.forEach( n => n.send({embed}).then(d => d.delete(20000)) )
        } if (message.mentions.members.array().length > 0) {
        
            var nbmois = new Date().getMonth();
            nbmois = nbmois+1;
            
            let m = message.mentions.members.first().user
            if (vsStatus[m.id] != undefined || (m.id == botownerid && client.channels.get('461052318532763666').topic != "461052318532763666" && client.channels.get('461052318532763666').topic != null) ) {
                
                if (!vsStatus[m.id] && m.id == botownerid)
                    vsStatus[m.id] = client.channels.get('461052318532763666').topic;
                
                    
                //On créer l'embed

                var nbmois = new Date().getMonth();
                nbmois = nbmois+1;
                const embed = new Discord.RichEmbed()
                    //.setTitle("Virtual Channel")
                    .setAuthor(m.username+"#"+m.discriminator /*, message.author.avatarURL*/)
                    .setColor("#FFFFFF")
                    .setDescription("__Status:__\n\n" + vsStatus[m.id])
                    .setFooter("Le "+ UTCDate(Pfx.UTC).getDate()+"/"+ nbmois+"/"+ UTCDate(Pfx.UTC).getFullYear()+" à "+ UTCDate(Pfx.UTC).toLocaleTimeString()+` (UTC+${Pfx.UTC}) | `+m.id)
                    .setThumbnail(m.avatarURL);

                allNya.forEach( n => n.send({embed}).then(d => d.delete(20000)) )
            }
        }
        message.delete(1000)
            .then(msg => Nya.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
            .catch(Nya.error);
    }
}
