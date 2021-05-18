import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default (props) => {
	const nameFix = (name) => {
		return name
			.split(' ').join('-')
			.split("'").join("-")
			.split("#").join("-")
			.split(":").join("-");
	};

	const charactereState = props.characterState;

	const charName = props.characterData.name || '';
	const avatar = nameFix(charName);
	const weaponry = nameFix(props.characterData.weapon || '');
	const movement = nameFix(props.characterData.movement || '');

	const frameIcon = charactereState === '' ? 'frame' : 'selected-frame';
	const showLevel = charactereState === 'five-star-max-level';

	const click = (e) => {
		let newState;

		switch (charactereState) {
			case '':
				newState = 'five-star';
				break;
			case 'five-star':
				newState = 'five-star-max-level';
				break;
			case 'five-star-max-level':
				newState = '';
				break;
		}

		props.clickAction(props.characterData.name, newState);
	}

	return html`
		<tr class="row character-wrapper" onClick="${click}">
			<td>
				<div class="character-image__wrapper">
					<img class="character-image__avatar"
						src="/img/ui/${frameIcon}.png"
						alt="${charName}"
						style="${{
							backgroundImage: `url('/img/characters/${avatar}.webp')`
						}}"
					/>
					<img class="character-image__weapon-type" src="/img/weaponry/${weaponry}.png" alt="" />
					<img class="character-image__movement-type" src="/img/movement/${movement}.png" alt="" />
					${(!charactereState ?
						'' :
						html`<img class="character-image__five-stars" src="/img/ui/five-stars.png" alt="" />`
					)}
					${showLevel && html`
						<div class="character-level">
							<p class="character-level__foreground mdl-typography--title">
								40
							</p>
							<p class="character-level__background mdl-typography--title">
								40
							</p>
						</div>
					`}
				</div>
			</td>
			<td class="mdl-data-table__cell--non-numeric">
				<p class="mb-0 captalize">${charName}</p>
			</td>
		</tr>
	`;
};
