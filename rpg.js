message.autho.send('Le nya!bot n\'est pas encore prêt');
return;

//Si c'est une commande, récupérer les arguments
if (message.content.indexOf('cat>') == 0) {
  var iscommand = true;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
}
