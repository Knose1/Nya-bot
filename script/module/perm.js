exports.load = () => {
  //On regarde si l'utilisateur est un modérateur
  var isMod1 = (client.guilds.get('377892426569744387').roles.get('407229590948413440').members.get(message.author.id) != undefined);

  //On regarde si l'utilisateur est un Béta testeur
  var isBTest1 = (client.guilds.get('377892426569744387').roles.get('410495831360143362').members.get(message.author.id) != undefined);

  //On regarde si l'utilisateur est un développeur
  var isADev1 = (client.guilds.get('377892426569744387').roles.get('407185267330514944').members.get(message.author.id) != undefined);
  
  return isMod = isMod1, isBTest = isBTest1, isADev = isADev1;
}
