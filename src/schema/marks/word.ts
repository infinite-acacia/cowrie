import { MarkSpec } from 'prosemirror-model';

export const word: MarkSpec = {
  parseDOM: [{ tag: 'span' }, { attrs: { class: 'cowrie-word-node' } }],
  toDOM: () => ['span', { class: 'cowrie-word-node' }, 0],
};
