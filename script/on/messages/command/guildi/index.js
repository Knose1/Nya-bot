exports.execute = () => {
	message.delete(500)
		.then(msg => Nya.log(`Message supprimé, raison: commande; Auteur: ${msg.author}`))
		.catch(e => Nya.error(e,true));
	//Commande GUILDI
		if (message.author.id == botownerid) {
			var guild = client.guilds.get(args[0]);
			if (guild) {
				if (guild.available) {
				
					var options_nyach = {
						permissions: ["CREATE_INSTANT_INVITE"],
						message: message,
						guild: guild,
						author: client.user
					}
					var perm_nyach = check_perm(options_nyach);
				
					perm_nyach().then(nnya => {
						if (nnya) {
				
							guild.fetchInvites().then(invites => {
								if (invites.size > 0) {
									message.author.send(`__**Invite for the server ${guild.name}:**__\n${String(invites.first())}`);
								} else {
									let lChannels = guild.channels.array();
									if (lChannels.length > 0) {
										lChannels[0].createInvite({maxAge: 20 * 1000, maxUses:1}).then( (pInvite) => {
											message.author.send(`__**Created an invite for the server ${guild.name}:**__\n{String(pInvite)}`);
										}).catch( (e) => {
											message.author.send(`An error occured when creating the invite : \n \`\`\`${e}\`\`\` `);
										});
									} else {
										message.author.send('There\'s no invite for the server '+ guild.name +'and there\'s no possibility to create an invite');
									}
								}
							}).catch(e => Nya.error(e , true));
						} else message.author.send(`I don't have CREATE_INSTANT_INVITE in "${guild.name}"`)
					}).catch(Nya.error);
				} else message.author.send(`${args[0]} is unavailable`);
			} else message.author.send(`${args[0]} is not a guild`);
		}

}
