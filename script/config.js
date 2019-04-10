const EventEmitter1 = require('events');

class MyEmitter1 extends EventEmitter1 {}

const myEmitter1 = new MyEmitter1();
VSEmojiesAlias = [
    {name:":nya_NyasMast:", code:"<:NyasMast:408687689626288138>"},
    {name:":nya_BOT:", code:"<:BOT:408687848922021898>"},
    {name:":nya_Knose1:", code:"<:Knose1:408687890709741569>"},
    {name:":nya_BAN:", code:"<:BAN:408688013238075392>"},
    {name:":nya_nyacorne:", code:"<:nyacorne:408688664965677057>"},
    {name:":nya_punchFace:", code:"<:punchFace:410757332654489600>"},
    {name:":nya_rikka:", code:"<a:rikka:420287402142334976>"},
    {name:":nya_gifdrug:", code:"<a:gifdrug:422469462877536257>"},
    {name:":nya_Warning:", code:"<:Warning:429587843476619264>"},
    {name:":nya_red_cross:", code:"<:red_cross:454684652968345602>"},
    {name:":nya_SayaThumbsup:", code:"<:SayaThumbsup:463667674925367306>"},
    {name:":nya_amarie:", code:"<a:amarie:459400425582362624>"},
    {name:":nya_sakuro:", code:"<a:sakuro:459400501092679731>"},
    {name:":nya_bron:", code:"<a:bron:459402074279510037>"},
    {name:":nya_razy:", code:"<a:razy:459402084874321940>"},
    {name:":nya_varila:", code:"<a:varila:459402088552595458>"},
    {name:":nya_rindou:", code:"<a:rindou:459402095909404673>"},
    {name:":nya_zantech:", code:"<a:zantech:459402097603903498>"},
    {name:":nya_crew:", code:"<a:crew:459402102557638689>"},
    {name:":nya_pratty:", code:"<a:pratty:459402104302469123>"},
    {name:":nya_sugarette:", code:"<a:sugarette:459402115417112586>"},
    {name:":nya_sanare:", code:"<a:sanare:459402115585015808>"},
    {name:":nya_rasho:", code:"<a:rasho:459402115669032970>"},
    {name:":nya_kannaHeart:", code:"<:kannaHeart:471391153967595521>"},
    {name:":nya_metalMokou:", code:"<:metalMokou:471400744965111808>"},
    {name:":nya_kannaPolice:", code:"<:kannaPolice:471404458031710208>"},
    {name:":nya_nuinuiHandsUp:", code:"<:nuinuiHandsUp:471404602965753866>"},
    {name:":nya_akkoTriggered:", code:"<a:akkoTriggered:471416402201411587>"},
    {name:":nya_rengeShocked:", code:"<:rengeShocked:471416745526034435>"},
    {name:":nya_ereshkigalSmug:", code:"<:ereshkigalSmug:471417673926836227>"},
    {name:":nya_hideriSmug:", code:"<:hideriSmug:471417691140521985>"},
    {name:":nya_blobNomCookie:", code:"<:blobNomCookie:471420882359943170>"},
    {name:":nya_angeryping:", code:"<a:angeryping:471420958897340446>"},
    {name:":nya_BlobPhinging:", code:"<:BlobPhinging:471421279451480064>"},
    {name:":nya_kannabear:", code:"<:kannabear:471422900994310185>"},
    {name:":nya_kannaWhat:", code:"<:kannaWhat:471423837083271188>"},
    {name:":nya_kogasaWoah:", code:"<:kogasaWoah:471423896348917761>"},
    {name:":nya_blobPeek:", code:"<:blobPeek:471428106884743219>"},
    {name:":nya_blobFearSweat:", code:"<:blobFearSweat:471428381427367947>"},
    {name:":nya_blobOwo:", code:"<:blobOwo:471428413337501698>"},
    {name:":nya_blobHyperthink:", code:"<:blobHyperthink:471428474947633153>"},
    {name:":nya_banned:", code:"<a:banned:471428521827237920>"},
    {name:":nya_kittyWoah:", code:"<:kittyWoah:472040663454842890>"},
    {name:":nya_miyanoPeek:", code:"<:miyanoPeek:472054260411006987>"},
    {name:":nya_miyanoAngry:", code:"<:miyanoAngry:472054266413056011>"},
    {name:":nya_miyanoF:", code:"<:miyanoF:472054266421444609>"},
    {name:":nya_miyanoHey:", code:"<:miyanoHey:472054267444723732>"},
    {name:":nya_miyanoDead:", code:"<:miyanoDead:472054267918811137>"},
    {name:":nya_miyanoDisgust:", code:"<:miyanoDisgust:472054267956428802>"},
    {name:":nya_smirkCoffe:", code:"<:smirkCoffe:472054268225126400>"},
    {name:":nya_miyanoYay:", code:"<:miyanoYay:472054268493430804>"},
    {name:":nya_miyanoWhat:", code:"<:miyanoWhat:472054269084696576>"},
    {name:":nya_miyanoWow:", code:"<:miyanoWow:472054384172204033>"},
    {name:":nya_theProphecyIsTrue:", code:"<:theProphecyIsTrue:472070412101222420>"},
    {name:":nya_lovulovu:", code:"<a:lovulovu:477077391026552832>"},
    {name:":nya_pedobear:", code:"<:pedobear:477077391093792789>"},
    {name:":nya_blobcatDance:", code:"<a:blobcatDance:477077391567618068>"},
    {name:":nya_smookPeek:", code:"<a:smookPeek:477533289696198667>"},
    {name:":nya_blobJump:", code:"<a:blobJump:477533363230474263>"},
    {name:":nya_blobDance:", code:"<a:blobDance:477533365956771841>"},
    {name:":nya_blobSplatch:", code:"<a:blobSplatch:478535919268265986>"}
]
   
/*key is the bot's token; mention is the bot's id*; logserv is the server for bot log*/
exports.load = () => {
    EventEmitter = EventEmitter1;
    MyEmitter = MyEmitter1;
    myEmitter = myEmitter1;
    key = ﻿process.env.TOKEN;
    mention = ﻿process.env.BOTMENTION;
    logserv = process.env.LOGSERV;
    botownerid = 375378900802338818
    botowner = `<@${botownerid}>`;
    
    consoleChannel = "459999139028008980";
    errorChannel = "460024079261499392";
    prefix ='cat:';
    betaTest = 'on';
    CanReloading = false;
    noGame = 'activé';
    VsPrefixs = [{name:'',UTC:0},{name:'english',UTC:0},{name:'nsfw',UTC:0},{name:'french',UTC:2},{name:'test',UTC:0}];
    VSEmojies = VSEmojiesAlias;
    Discord = require('discord.js');
    util = require('util');
    client = new Discord.Client();
    require('./functions.js').load();
    require('./on/messages/command/anime/anime.js').load();
    catimg = require('./on/messages/command/cat/images.js').load(3);
    haderror = false;
    BotOnDev = false;
    maxAnPurpose = 8; //Nombre max de purpose en 1h parmis les 20 derniers messages
    invite = 'https://discordapp.com/oauth2/authorize?client_id='+mention+'&scope=bot&permissions=604367937';
    MongoClient = require('mongodb').MongoClient, 
    uri = process.env.MONGO_DB;
    events = require('events');
    NoNyaWebhooks = "";
    mpParties = [];
    vsStatus = [];
    ytdl = require('ytdl-core');
    request = require('graphql-request');
}
