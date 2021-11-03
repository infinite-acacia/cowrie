import {
  doc,
  heading,
  lineBreak,
  list,
  listItem,
  paragraph,
  text,
} from './nodes/index';
import {
  bold,
  code,
  italic,
  link,
  underline,
  strikethrough,
  subscript,
  superscript,
} from './marks/index';

import { Schema } from 'prosemirror-model';

export const schema = new Schema({
  marks: {
    bold,
    code,
    italic,
    link,
    strikethrough,
    subscript,
    superscript,
    underline,
  },
  nodes: {
    text, // plain text node
    doc, // top-level node
    paragraph, // paragraph must be the first node type of the "block" group
    lineBreak,
    heading,
    list,
    listItem,
  },
});

export * from './nodes';
export * from './marks';
