exports.execute = () => {

    let availableSubcommands = ["delete","join","create","play"];
    
    if (args[0])
        if (availableSubcommands.indexOf(args[0].toLowerCase()) > -1) {
            var funcSubComm = String(require(`./on/messages/command/morpion/${args[0]}.js`).execute);
            var toEvSC = funcSubComm.slice(7, funcSubComm.length - 1)/*.replace(/\n/g,"").replace(/ +/g," ")*/;
            //console.log(toEvSC);
            eval(toEvSC);
        }

}
