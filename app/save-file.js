
const fs = require('fs-extra');
const path = require('path')

module.exports = (data, fileName) => {
	const folderPath = path.resolve(__dirname, '../', 'static/js/data/');

	fs.ensureDirSync(folderPath);

	fs.writeFileSync(
		path.resolve(folderPath, fileName),
		`export default ${JSON.stringify(data)};`
	);
}
