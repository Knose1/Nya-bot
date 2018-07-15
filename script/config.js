const EventEmitter1 = require('events');

class MyEmitter1 extends EventEmitter1 {}

const myEmitter1 = new MyEmitter1();

/*key is the bot's token; mention is the bot's id*; logserv is the server for bot log*/
exports.load = () => {
return EventEmitter = EventEmitter1, MyEmitter = MyEmitter1, myEmitter = myEmitter1,
    key = ﻿process.env.TOKEN,
    mention = ﻿process.env.BOTMENTION,
    logserv = process.env.LOGSERV,
    botowner = process.env.BOTW,
    consoleChannel = "459999139028008980",
    errorChannel = "460024079261499392",
    prefix ='cat:',
    betaTest = 'on',
    CanReloading = false,
    noGame = 'activé',
    VsPrefixs = [{name:'',UTC:0},{name:'english',UTC:0},{name:'nsfw',UTC:0},{name:'french',UTC:2},{name:'test',UTC:0}],
    VSEmojies = [{name:":rikka:", code:"<a:rikka:420287402142334976>"},{name:":red_cross:", code:"<:red_cross:454684652968345602>"},{name:":gifdrug:", code:"<a:gifdrug:422469462877536257>"},{name:":punchFace:", code:"<:punchFace:410757332654489600>"},{name:":amarie:", code:"<a:amarie:459400425582362624>"},{name:":sakuro:", code:"<a:sakuro:459400501092679731>"},{name:":bron:", code:"<a:bron:459402074279510037>"},{name:":razy:", code:"<a:razy:459402084874321940>"},{name:":varila:", code:"<a:varila:459402088552595458>"},{name:":rindou:", code:"<a:rindou:459402095909404673>"},{name:":zantech:", code:"<a:zantech:459402097603903498>"},{name:":crew:", code:"<a:crew:459402102557638689>"},{name:":pratty:", code:"<a:pratty:459402104302469123>"},{name:":sugarette:", code:"<a:sugarette:459402115417112586>"},{name:":sanare:", code:"<a:sanare:459402115585015808>"},{name:":rasho:", code:"<a:rasho:459402115669032970>"}],
    Discord = require('discord.js'),
    util = require('util'),
    client = new Discord.Client(),
    require('./functions.js').load(),
    require('./on/messages/command/anime/anime.js').load(),
    catimg = require('./on/messages/command/cat/images.js').load(3),
    haderror = false,
    BotOnDev = false,
    maxAnPurpose = 8, //Nombre max de purpose en 1h parmis les 20 derniers messages
    invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=604367937',
    MongoClient = require('mongodb').MongoClient, 
    uri = process.env.MONGO_DB,
    events = require('events'),
    NoNyaWebhooks = "",
    mpParties = [],
    vsStatus = [],
    { request } = require('graphql-request');
}
