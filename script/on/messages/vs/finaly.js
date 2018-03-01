exports.execute = (message) => {

    //Commande-VS = Ok
    if  (
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
        ){
        if (message.content.indexOf('//') == 0){
            var words = message.content.slice('//'.length).trim().split(/ +/g);
        }
        else {
            var words = message.content.slice('--'.length).trim().split(/ +/g);
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
                    if (!vsIsImage) {newwords[wordsIndex] = word;}
            });
        } else {
            message.attachments.forEach(attachment => {
                wordsIndex = wordsIndex + 1 ;
                vsImage[wordsIndex] = attachment.url;
            });
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
        //On créer un embed
        
        var nbmois = new Date().getMonth();
	    nbmois = nbmois+1;
        const embed = new Discord.RichEmbed()
            //.setTitle("Virtual Channel")
            .setAuthor(message.author.username+"#"+message.author.discriminator /*, message.author.avatarURL*/)
            .setColor("#ff1a8c")
            .setDescription(vsmessage)
            .setFooter("Le "+new Date().getDate()+"/"+ nbmois+"/"+new Date().getFullYear()+" à "+new Date().toLocaleTimeString()+" | "+message.guild.name.replace(/`/g,"").replace(/_/g,"").replace(/\*/g,"")+" | "+message.author.id , message.guild.iconURL)
            .setThumbnail(message.author.avatarURL);
        
        if (vsIsImage) {
            embed.setImage(vsImage);
        }
		
        if (message.author.bot == true) {
            embed.setAuthor("BOT: "+message.author.username+"#"+message.author.discriminator, "https://media.discordapp.net/attachments/407271018516971532/407272279416766475/BOT.png");
            if (message.author.id == mention) {embed.setColor("#DD00FF")}
            else {embed.setColor("#FFFFFF")}
        }
        else if (message.author == botowner) {
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
        /*const ci = () => {
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
        var countR = client.guilds.get('415208185616531456').createRole({
            name: `count:${cid} ${countMess}`,
            color: 'GOLD',
        })*/
        
		client.guilds.forEach(function (guild) {
			//Pour chaque channel
            
            guild.channels.forEach(function (channel) {
                //On regarde s'il se nome nya-bot-vs ou nya-bot-vs-log (dans le serv log)
                if (channel.name == "nya-bot-vs"+Pfx || channel.name == "nya-bot-vs-"+Pfx ) {
                    
                    
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
                else if (guild.id == "377892426569744387" && channel.name == "nya-bot-vs-log" && Pfx != 'nsfw') {
                    
                    
                    //On envoie l'embed
                    channel.send(`__Virtual Channel: ${Pfx}__`,{embed})
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
    message.delete(1000)
        .then(msg => console.log(`Message supprimé, raison: Virtual channel; Auteur: ${msg.author}`))
        .catch(console.error);
    return true;
	} else return false;

}
