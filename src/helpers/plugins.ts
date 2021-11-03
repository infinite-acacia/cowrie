import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';

import { buildKeymap } from './keymap';
import { buildInputRules } from './inputrules';
import { CowrieSetupOptions } from '../types';

export function getBasicPlugins(options: CowrieSetupOptions) {
  return [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor(),
  ];
}
