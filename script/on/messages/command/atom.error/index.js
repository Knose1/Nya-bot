exports.execute = () => {

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
    atome.bglink = "http://atom.smasher.org/error/";
    atome.bg = ["98","xp"];
    
    if (args.length == 0) {
    
    }
    else if (args[0].toLowerCase() == icons || args[0].toLowerCase() == icon) {
        
        var img_emb = "";
        var img_bg = "";
        
        atom.icons.forEach(i => {
            img_emb += `[${i}](${atom.iconlink}${i}), `;
        });
        atom.bg.forEach(b => {
            img_bg += `[${b}](${atome.bglink}${b})`
        });
        
        var embed = new Discord.RichEmbed()
            .setThumbnail("http://atom.smasher.org/atom_smasher.gif")
            .addField("ICONES",img_emb, false)
            .addBlankField()
            .addField("BACKGROUNDS",img_bg, false)
            .setFooter(message.author.tag, message.author.avatarURL);
        
        message.channel.send({embed})
        
    } else {
        var eee = "cat:atom.error";
        delete(args);
        var args = message.content.slice(eee.length).trim().split("::");
    }
    
}
