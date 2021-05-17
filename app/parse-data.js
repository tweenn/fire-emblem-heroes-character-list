
const jsdom = require("jsdom");

module.exports = (html) => {
	
	const { JSDOM } = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);

	const iconography = {
		movement: {},
		weaponry: {},
		origin: {},
		characters: {}
	}

	const heroesData = []

	$('.hero-filter-element').each(function() {
		const answer = {};

		answer.weaponProps = $(this).attr('data-weapon-props').split(';').map(prop => prop.toLowerCase());
		answer.weapon = $(this).attr('data-weapon-type').toLowerCase();
		answer.movement = $(this).attr('data-move-type').toLowerCase();

		answer.name = $($(this).find('td')[1]).text().toLowerCase();
		answer.origin = $($(this).find('td')[2]).text().toLowerCase();
		
		iconography.characters[answer.name.split(' ').join('-')] = $($(this).find('td')[0]).find('img')
			.first()
			.attr('src')
			.split('/revision')[0];
		iconography.origin[answer.origin.split(' ').join('-')] = $($(this).find('td')[3]).find('img')
			.first()
			.attr('src')
			.split('/revision')[0];
		iconography.movement[answer.movement.split(' ').join('-')] = $($(this).find('td')[4]).find('img')
			.first()
			.attr('src')
			.split('/revision')[0];
			
		iconography.weaponry[answer.weapon.split(' ').join('-')] = $($(this).find('td')[5]).find('img')
			.first()
			.attr('src')
			.split('/revision')[0];

		heroesData.push(answer);
	});

	const parsedData = {
		iconography,
		heroesData
	};

	return parsedData;
};
