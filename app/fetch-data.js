
const fetch = require('node-fetch');

module.exports = async () => {
	return await fetch('https://feheroes.fandom.com/wiki/List_of_Heroes')
		.then(res => res.text())
		.then((body) => {
			return body;
		});
};
