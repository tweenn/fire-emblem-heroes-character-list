import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import Character from './character.js';

import characters from '../../data/characters.js';

// Initialize htm with Preact
const html = htm.bind(h);

export default (props) => {

	return html`
		<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width">
			<tbody>
				${(() => {
					return characters.map((character) => {
						return html`
							<${Character}
								characterData="${character}"
								characterState="${props.charactersState[character.name]}"
								clickAction="${props.updateState}"
							/>
						`;
					})
				})()}
			</tbody>
		</table>
	`;
};
