//On récupère le suffix du vs
var isVs = false;
if (message.channel.name.indexOf('nya-bot-vs') == 0) {
    var Pfx = message.channel.name.slice('nya-bot-vs'.length);
    if (Pfx == undefined) Pfx = '';
    if (Pfx.indexOf('-') == 0) Pfx = Pfx.slice('-'.length);
    if (Pfx == undefined) Pfx = '';
    
    var isPfx = false
    VsPrefixs.forEach( p => {
        if (Pfx == p) isPfx = true;
    });
    
    if (isPfx) 
        isVs = true;
    
    //console.log(isVs+" ; "+Pfx);
}
