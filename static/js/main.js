
import { createElement, render, h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

import App from './components/app.js';

render(createElement(App), document.body)
