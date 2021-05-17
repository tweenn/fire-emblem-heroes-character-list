import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

// Initialize htm with Preact
const html = htm.bind(h);

export default (props) => {

	const state = props.charactersState || {};

	let fiveStars = 0;
	let maxLevel = 0;

	Object.keys(state).map((stateKey) => {
		if (state[stateKey] === 'five-star') {
			fiveStars ++;
		}
		else if (state[stateKey] === 'five-star-max-level') {
			fiveStars ++;
			maxLevel ++;
		}

		return '';
	});

	return html`
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<!-- Title -->
				<span class="mdl-layout-title">FEH</span>

				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>

				<!-- Navigation. We hide it in small screens. -->
				<div class="mdl-navigation">
					<span class="mdl-navigation__link pr-0">
						${fiveStars} x
					</span>
					<img class="title-star pr-2"
						src="/img/ui/five-star.png"
						alt=""
					/>
					|
					<span class="mdl-navigation__link pr-0">
						${maxLevel} x
					</span>
					<span class="title-level pr-2">
						<a>
							40
						</a>
					</span>
				</div>
			</div>
		</header>
	`;
};


