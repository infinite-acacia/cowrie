import './styles/style.css';
import './styles/index.css';

import { Cowrie } from './cowrie';

const root = document.querySelector<HTMLDivElement>('#app');

const editor = new Cowrie(<HTMLDivElement>root, { tailwind: true });
editor.init();

// document.addEventListener('DOMContentLoaded', () => {
//   editor.init();
// });
