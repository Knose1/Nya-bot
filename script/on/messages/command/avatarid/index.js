exports.execute = () => {
	if (args[0]) {
		client.fetchUser(args[0]).then( (pUser) => {
			message.channel.send(pUser.avatarURL);
		}).catch( () => {
			message.channel.send("Unable to find id "+args[0]);
		});
	}
}
