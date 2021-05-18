import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import CharacterList from './character/list.js';
import Drawer from './drawer/index.js';
import Footer from './footer/index.js';
import Navigation from './navigation/index.js';

import state from '../state/index.js';
import characters from '../data/characters.js';

// Initialize htm with Preact
const html = htm.bind(h);

export default (props) => {
	const [charactersState, setCharactersState] = useState(state.get(characters));

	const updateState = (characterName, value) => {
		const newState = { ...charactersState };
		newState[characterName] = value;
		setCharactersState(newState);
		state.set(charactersState);
	}
	
	return html`
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<${Navigation}
				charactersState=${charactersState}
			/>

			<${Drawer} />

			<main class="mdl-layout__content">
				<div class="mdl-grid pa-0">
					<div class="mdl-cell mdl-cell--12-col">
						<${CharacterList}
							updateState=${updateState}
							charactersState=${charactersState}
						/>
					</div>
				</div>
			</main>

			<${Footer} />
		</div>
	`;
};
