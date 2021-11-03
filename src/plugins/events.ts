import { Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
export function registerEventsPlugins(events: CowrieEditorEvent[]) {
  const plugins = events.map((event) => {
    const name = event.on?.charAt(0).toUpperCase().concat(event.on?.slice(1));
    return new Plugin({
      props: {
        [`handle${name}`](view, ev) {
          event.handler(view, ev);
          return false;
        },
      },
    });
  });
  return plugins;
}

export type CowrieEditorEvent = {
  on: string;
  handler: (view: EditorView, event: Event) => boolean;
};
