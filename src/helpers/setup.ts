import { history } from 'prosemirror-history';
import { Plugin } from 'prosemirror-state';
import { menuBar } from 'prosemirror-menu';
import { EditorView } from 'prosemirror-view';
import { buildMenuItems } from './menu';
import { CowrieSetupOptions } from '../types';
import { getBasicPlugins } from '.';
import { registerEventsPlugins } from '../plugins/events';
import { getMarkdownNodeViews } from './markdown';

export function setupEditor(options: CowrieSetupOptions) {
  const plugins = getBasicPlugins(options);

  if (options.menuBar !== false)
    plugins.push(
      menuBar({
        floating: options.floatingMenu !== false,
        content: options.menuContent || buildMenuItems(options.schema).fullMenu,
      })
    );
  if (options.history !== false) plugins.push(history());

  return plugins.concat(
    new Plugin({
      props: {
        attributes: { class: 'cowrie-default-editor' },
      },
    }),
    ...registerEventsPlugins([
      {
        on: 'keyDown',
        handler: (view: EditorView, ev: KeyboardEvent) => {
          if (ev.ctrlKey && ev.key === '#') {
            const nodeViews = getMarkdownNodeViews();
            view.setProps({ nodeViews });
            view.updateState(view.state);
            console.log('TOGGLE MD!!!');
          } else {
            console.log(view, ev);
          }
        },
      },
    ])
  );
}
