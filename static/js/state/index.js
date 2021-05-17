
export default {
	get: (characters) => {
		const processedCharacters = {};
		const savedData = JSON.parse(localStorage.getItem('state') || '{}');

		characters.map((character) => {
			processedCharacters[character.name] = '';
			return '';
		});
	
		return Object.assign({}, processedCharacters, savedData);
	},
	set: (state) => {
		localStorage.setItem('state', JSON.stringify(state));
	}
}
