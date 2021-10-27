import './style.css';

import { Cowrie } from './cowrie.ts';

const root = document.querySelector<HTMLDivElement>('#app')!;

const editor = new Cowrie(root);

root.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
