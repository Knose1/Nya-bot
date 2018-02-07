//Si c'est une commande, récupérer les arguments
if (message.content.indexOf(prefix) == 0) {
  var iscommand = true;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
}
