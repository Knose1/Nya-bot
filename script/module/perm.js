//On regarde si l'utilisateur est un modérateur
var isMod = (client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(message.author.id) != undefined);

//On regarde si l'utilisateur est un Béta testeur
var isBTest = (client.guilds.get('377892426569744387').roles.get('410495831360143362').members.get(message.author.id) != undefined);

//On regarde si l'utilisateur est un développeur
var isADev = (client.guilds.get('377892426569744387').roles.get('407185267330514944').members.get(message.author.id) != undefined);
