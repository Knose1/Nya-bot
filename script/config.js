/*key is the bot's token; mention is the bot's id*; logserv is the server for bot log*/
exports.load = () => {
return key = ﻿process.env.TOKEN,
    mention = ﻿process.env.BOTMENTION,
    logserv = process.env.LOGSERV,botowner = process.env.BOTW,
    prefix ='cat:',
    betaTest = 'on',
    CanReloading = false,
    noGame = 'activé',
    VsPrefixs = [{name:'',UTC:0},{name:'english',UTC:0},{name:'nsfw',UTC:0},{name:'french',UTC:2},{name:'test',UTC:0}],
    VSEmojies = [{name:":rikka:", code:"<a:rikka:420287402142334976>"},{name:":red_cross:", code:"<:red_cross:454684652968345602>"},{name:":gifdrug:", code:"<a:gifdrug:422469462877536257>"},{name:":punchFace:", code:"<:punchFace:410757332654489600>"}],
    Discord = require('discord.js'),
    util = require('util'),
    client = new Discord.Client(),
    require('./functions.js').load(),
    require('./on/messages/command/anime/anime.js').load(),
    catimg = require('./on/messages/command/cat/images.js').load(3),
    haderror = false,
    BotOnDev = false,
    maxAnPurpose = 8, //Nombre max de purpose en 1h parmis les 20 derniers messages
    invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=67628096',
    MongoClient = require('mongodb').MongoClient, 
    uri = process.env.MONGO_DB,
    events = require('events'),
    NoNyaWebhooks = "",
    mpParties = [];
}
