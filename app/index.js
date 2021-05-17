
const fetchData = require('./fetch-data');
const parseData = require('./parse-data');
const downloadImagery = require('./download-image');
const saveFile = require('./save-file');

const init = async () => {
	const fetchedHTML = await fetchData();
	const parsedData = parseData(fetchedHTML);
	
	await downloadImagery(parsedData.iconography.movement, './movement');
	await downloadImagery(parsedData.iconography.weaponry, './weaponry');
	await downloadImagery(parsedData.iconography.origin, './origin');
	await downloadImagery(parsedData.iconography.characters, './characters');
	
	saveFile(parsedData.heroesData, 'characters.js');
}

init();
