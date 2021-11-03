import { NodeSpec } from 'prosemirror-model';

export const word: NodeSpec = {
  group: 'inline',
  content: 'inline*',
  parseDOM: [{ tag: 'span' }],
  toDOM: () => ['span', 0],
};
