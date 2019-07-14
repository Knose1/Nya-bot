

exports.execute = () => {
	let tryCreateAnInvite = (pChannelList, pGuild, pAuthor, _index = 0) => {
		pChannelList[_index].createInvite({maxAge: 20 * 1000, maxUses:1}).then( (pInvite) => {
			pAuthor.send(`__**Created an invite for the server ${pGuild.name}:**__\n${String(pInvite)}`);
		}).catch( (e) => {
			if (_index + 1 == pChannelList.length)
				pAuthor.send('There\'s no invite for the server '+ guild.name +'and there\'s no possibility to create an invite');
			else tryCreateAnInvite(pChannelList, pGuild, pAuthor, ++_index);
		});
	}
	
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
									message.author.send(`__**An invite was found for the server ${guild.name}:**__\n${String(invites.first())}`);
								} else {
									let lChannels = guild.channels.array();
									if (lChannels.length > 0) {
										tryCreateAnInvite(lChannels, guild, message.author);
									} else {
										message.author.send('There\'s no invite for the server '+ guild.name +'and there\'s no channel');
									}
								}
							}).catch(e => Nya.error(e , true));
						} else message.author.send(`I don't have CREATE_INSTANT_INVITE in "${guild.name}"`)
					}).catch(Nya.error);
				} else message.author.send(`${args[0]} is unavailable`);
			} else message.author.send(`${args[0]} is not a guild`);
		}

}
