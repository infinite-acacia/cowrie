import { MarkSpec } from 'prosemirror-model';

export const sentence: MarkSpec = {
  parseDOM: [{ tag: 'span' }, { attrs: { class: 'cowrie-sentence-node' } }],
  toDOM: () => ['span', { class: 'cowrie-sentence-node' }, 0],
};
