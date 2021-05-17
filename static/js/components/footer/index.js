import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

// Initialize htm with Preact
const html = htm.bind(h);

export default (props) => {
	return html`
		<footer class="mdl-mini-footer">
			<div class="mdl-mini-footer__left-section">
				<p class="text-white mb-1">Fire Emblem Heroes Character List</p>
				<ul class="mdl-mini-footer__link-list">
					<li><a href="https://about.me/zuntini">Author</a></li>
					<li><a href="https://github.com/tweenn/fire-emblem-heroes-character-list">GitHub</a></li>
				</ul>
			</div>
		</footer>
	`;
}
