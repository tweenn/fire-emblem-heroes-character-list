
const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')

module.exports = async (imageObject, imgFolderPath) => {

	const folderPath = path.resolve(__dirname, '../', 'static/img/', imgFolderPath);

	fs.ensureDirSync(folderPath);

	const imagePromises = Object.keys(imageObject).map(async (imageKey) => {
		const extension = imageObject[imageKey].split('.').pop();
		const imageName = `${imageKey}.${extension}`;

		return await fetch(imageObject[imageKey])
			.then((res) => {
				const dest = fs.createWriteStream(path.resolve(folderPath, imageName));
				res.body.pipe(dest);
			});
	});
	
	await Promise.all(imagePromises);

	return true;
};
