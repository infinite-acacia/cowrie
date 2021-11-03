import { NodeSpec } from 'prosemirror-model';

export const sentence: NodeSpec = {
  group: 'inline',
  content: 'inline*',
  parseDOM: [{ tag: 'span' }],
  toDOM: () => ['span', 0],
};
