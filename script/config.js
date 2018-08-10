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
    VSEmojies = [{name:":rikka:", code:"<a:rikka:420287402142334976>"},{name:":red_cross:", code:"<:red_cross:454684652968345602>"},{name:":gifdrug:", code:"<a:gifdrug:422469462877536257>"},{name:":punchFace:", code:"<:punchFace:410757332654489600>"},{name:":amarie:", code:"<a:amarie:459400425582362624>"},{name:":sakuro:", code:"<a:sakuro:459400501092679731>"},{name:":bron:", code:"<a:bron:459402074279510037>"},{name:":razy:", code:"<a:razy:459402084874321940>"},{name:":varila:", code:"<a:varila:459402088552595458>"},{name:":rindou:", code:"<a:rindou:459402095909404673>"},{name:":zantech:", code:"<a:zantech:459402097603903498>"},{name:":crew:", code:"<a:crew:459402102557638689>"},{name:":pratty:", code:"<a:pratty:459402104302469123>"},{name:":sugarette:", code:"<a:sugarette:459402115417112586>"},{name:":sanare:", code:"<a:sanare:459402115585015808>"},{name:":rasho:", code:"<a:rasho:459402115669032970>"},{name:":kannaHeart:", code:"<:kannaHeart:471391153967595521>"},{name:":metalMokou:", code:"<:metalMokou:471400744965111808>"},{name:":kannaPolice:", code:"<:kannaPolice:471404458031710208>"},{name:":nuinuiHandsUp:", code:"<:nuinuiHandsUp:471404602965753866>"},{name:":akkoTriggered:", code:"<a:akkoTriggered:471416402201411587>"},{name:":rengeShocked:", code:"<:rengeShocked:471416745526034435>"},{name:":ereshkigalSmug:", code:"<:ereshkigalSmug:471417673926836227>"},{name:":hideriSmug:", code:"<:hideriSmug:471417691140521985>"},{name:":blobNomCookie:", code:"<:blobNomCookie:471420882359943170>"},{name:":angeryping:", code:"<a:angeryping:471420958897340446>"},{name:":BlobPhinging:", code:"<:BlobPhinging:471421279451480064>"},{name:":kannabear:", code:"<:kannabear:471422900994310185>"},{name:":kannaWhat:", code:"<:kannaWhat:471423837083271188>"},{name:":kogasaWoah:", code:"<:kogasaWoah:471423896348917761>"},{name:":blobPeek:", code:"<:blobPeek:471428106884743219>"},{name:":blobFearSweat:", code:"<:blobFearSweat:471428381427367947>"},{name:":blobOwo:", code:"<:blobOwo:471428413337501698>"},{name:":blobHyperthink:", code:"<:blobHyperthink:471428474947633153>"},{name:":banned:", code:"<a:banned:471428521827237920>"}, {name:":NyasMast:", code:"<:NyasMast:408687689626288138>"},{name:":BOT:", code:"<:BOT:408687848922021898>"},{name:":Knose1:", code:"<:Knose1:408687890709741569>"},{name:":BAN:", code:"<:BAN:408688013238075392>"},{name:":nyacorne:", code:"<:nyacorne:408688664965677057>"},{name:":Warning:", code:"<:Warning:429587843476619264>"},{name:":SayaThumbsup:", code:"<:SayaThumbsup:463667674925367306>"},{name:":kittyWoah:", code:"<:kittyWoah:472040663454842890>"},{name:":miyanoPeek:", code:"<:miyanoPeek:472054260411006987>"},{name:":miyanoF:", code:"<:miyanoF:472054266421444609>"},{name:":miyanoAngry:", code:"<:miyanoAngry:472054266413056011>"},{name:":miyanoHey:", code:"<:miyanoHey:472054267444723732>"},{name:":miyanoDead:", code:"<:miyanoDead:472054267918811137>"},{name:":miyanoDisgust:", code:"<:miyanoDisgust:472054267956428802>"},{name:":smirkCoffe:", code:"<:smirkCoffe:472054268225126400>"},{name:":miyanoYay:", code:"<:miyanoYay:472054268493430804>"},{name:":miyanoWhat:", code:"<:miyanoWhat:472054269084696576>"},{name:":miyanoWow:", code:"<:miyanoWow:472054384172204033>"}, {name:":theProphecyIsTrue:", code:"<:theProphecyIsTrue:472070412101222420>"},{name:":lovulovu:", code:"<a:lovulovu:477077391026552832>"},{name:":pedobear:", code:"<:pedobear:477077391093792789>"},{name:":blobcatDance:", code:"<a:blobcatDance:477077391567618068>"},{name:":smookPeek:", code:"<a:smookPeek:477533289696198667>"},{name:":blobJump:", code:"<a:blobJump:477533363230474263>"},{name:":blobDance:", code:"<a:blobDance:477533365956771841>"}],
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
    ytdl = require('ytdl-core'),
    { request } = require('graphql-request');
}
