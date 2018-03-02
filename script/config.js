/*key is the bot's token; mention is the bot's id*; logserv is the server for bot log*/
exports.load = () => {
return key = ﻿process.env.TOKEN,
    mention = ﻿process.env.BOTMENTION,
    logserv = process.env.LOGSERV,botowner = process.env.BOTW,
    prefix ='cat:',
    betaTest = 'on',
    CanReloading = false,
    noGame = 'activé',
    VsPrefixs = ['','english','nsfw','french','test'],
    Discord = require('discord.js'),
    util = require('util'),
    client = new Discord.Client(),
    require('./functions.js').load(),
    require('./on/messages/command/anime/anime.js')
    catimg = require('./on/messages/command/cat/images.js').load(3),
    haderror = false,
    invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=67628096';
}
