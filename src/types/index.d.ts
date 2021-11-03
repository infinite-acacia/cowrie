import type { Schema } from 'prosemirror-model';
import { MenuItem } from './menu';
export type CowrieSetupOptions = {
  schema: Schema;
  mapKeys?: Record<string, Function>;
  menuBar?: boolean;
  history?: boolean;
  floatingMenu?: boolean;
  menuContent?: MenuItem[];
};

export * from './menu';
