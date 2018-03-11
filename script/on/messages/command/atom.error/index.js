exports.execute = () => {
    
    /* 
        icon=Attention
        title=null
        text=test
        
        b1=test2
        b1g=x
        
        b2=test3
        b2g=x 
        
        b3=test4
        b3g=x
    */
    
    /*  This command use http://atom.smasher.org/error  */
    
    var atom = {};
    atom.iconlink = "http://error-png.smasher.org/";
    atom.icons = [
        "Attention",
        "Error",
        "Error2",
        "Error3",
        "Error4",
        "aim_guy",
        "aol_icon",
        "bomb",
        "bomb_dynamite",
        "bomb_grenade",
        "bubble_i",
        "bubble_q",
        "bulb",
        "butterfly",
        "cake",
        "circularsaw",
        "control_panel",
        "cow",
        "defrag",
        "disk_blu",
        "disk_blu_lbl",
        "disk_org",
        "disk_red",
        "disk_red_lbl",
        "disk_skull",
        "disk_yel",
        "dos",
        "e_orbit",
        "file_cabinet",
        "find",
        "fortunecookie",
        "garbage_empty",
        "garbage_full",
        "gun",
        "hammer",
        "heart",
        "help",
        "hub",
        "hwinfo",
        "ic_a",
        "keys",
        "keys2",
        "keys3",
        "labtec",
        "mac",
        "mail",
        "mail_deleted",
        "mailbox",
        "mouth",
        "mycomputer",
        "mycomputer2",
        "mycomputer3",
        "newspaper",
        "peripheral",
        "plant_leaf",
        "radiation",
        "ram",
        "recycle",
        "recycle2",
        "scanner",
        "screw",
        "screw2",
        "setup",
        "sknife",
        "skull",
        "skull2",
        "skull3",
        "tux",
        "tux_config",
        "ups",
        "zipdisk",
        "zipdisks"
    ];
    atom.bglink = "http://atom.smasher.org/error/";
    atom.bg = ["98","xp"];
    
    if (args.length == 0) {
        
        message.channel.send(`__Utilisation:__\n\n` +
                `\`cat:atom.error icon\`\n\n`
                `\`cat:atom.error\n` +
                `:: <Background>\n` +
                `:: <Icon>\n` +
                `:: <Title>\n` +
                `:: <Text>\n` +
                `:: [Text button 1]\n` +
                `:: [True / False]\n` +
                `:: [Text button 2]\n` +
                `:: [True / False]\n` +
                `:: [Text button 3]\n` +
                `:: [True / False]\`\n` +
                `<> est un argument **OBLIGATOIRE** [] est un argument __facultatif__`);
        
    }
    else if (args[0].toLowerCase() == "icons" || args[0].toLowerCase() == "icon") {
        
        var img_emb = "";
        var img_bg = "";
        
        img_emb = atom.icons.join(", ");
        img_bg = atom.bg.join(", ");
        /*atom.icons.forEach(i => {
            img_emb += `[${i}](${atom.iconlink}${i}), `;
        });
        atom.bg.forEach(b => {
            img_bg += `[${b}](${atom.bglink}${b}),`
        });*/
        
        var embed = new Discord.RichEmbed()
            .setThumbnail("http://atom.smasher.org/atom_smasher.gif")
            .addField("ICONES",img_emb, false)
            .addBlankField()
            .addField("BACKGROUNDS",img_bg, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        message.channel.send({embed})
        
    } else {
        var eee = "cat:atom.error";
        var args = message.content.slice(eee.length).split("\n::").map(m => encodeURIComponent( m.trim() ));
        
        if (args.length == 0) {
            message.channel.send(`__Utilisation:__\n\n` +
                `\`cat:atom.error icon\`\n\n`
                `\`cat:atom.error\n` +
                `:: <Background>\n` +
                `:: <Icon>\n` +
                `:: <Title>\n` +
                `:: <Text>\n` +
                `:: [Text button 1]\n` +
                `:: [True / False]\n` +
                `:: [Text button 2]\n` +
                `:: [True / False]\n` +
                `:: [Text button 3]\n` +
                `:: [True / False]\`\n` +
                `<> est un argument **OBLIGATOIRE** [] est un argument __facultatif__`);
        }
        
        if (args[0] == "") args.shift();
        
        var i = -1;
        while (i < 11) {
            i += 1
            if (args[i] == undefined)
                args[i] = "";
        }
        if (args[5].toLowerCase() != "false" && args[5].toLowerCase() != "true") args.splice(5,0,"");
        if (args[7].toLowerCase() != "false" && args[7].toLowerCase() != "true") args.splice(7,0,"");
        
        
        if (args[5].toLowerCase() != "true") var b1g=""; else var b1g="x";
        if (args[7].toLowerCase() != "true") var b2g=""; else var b2g="x";
        if (args[9].toLowerCase() != "true") var b3g=""; else var b3g="x";
        
        var att = `http://atom.smasher.org/error/${args[0]}.png.php?\
icon=${args[1]}&\
title=${args[2]}&\
text=${args[3]}&\
b1=${args[4]}&\
b1g=${b1g}&\
b2=${args[6]}&\
b2g=${b2g}&\
b3=${args[8]}&\
b3g=${b3g}`;
            message.channel.send("This is your picture",{files: [{attachment: att, name: 'file.png'}] })
            .catch(err => message.channel.send("An error occured with your Background argument", {code:"md"} )); 
            
    }
}
