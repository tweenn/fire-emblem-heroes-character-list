import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

// Initialize htm with Preact
const html = htm.bind(h);

export default (props) => {

	return html`
		<div class="mdl-layout__drawer">
			<span class="mdl-layout-title">Filters</span>
			<nav class="mdl-navigation">
				<a class="mdl-navigation__link">TBD</a>
				<!--
				<a class="mdl-navigation__link" href="">Link</a>
				<a class="mdl-navigation__link" href="">Link</a>
				<a class="mdl-navigation__link" href="">Link</a>
				<a class="mdl-navigation__link" href="">Link</a>
				-->
			</nav>
		</div>
	`;
};
