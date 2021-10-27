import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { schema } from 'prosemirror-schema-basic';
import { undo, redo, history } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { DOMParser } from 'prosemirror-model';
export class Cowrie {
  private root?: HTMLDivElement;
  private view: EditorView;
  constructor(root: HTMLDivElement) {
    this.root = root;
    const state = EditorState.create({
      schema,
      plugins: [
        history(),
        keymap({ 'Mod-z': undo, 'Mod-y': redo }),
        keymap(baseKeymap),
      ],
      doc: DOMParser.fromSchema(schema).parse(this.root),
    });
    this.view = new EditorView(this.root, {
      state,
      dispatchTransation(transaction) {
        console.log(
          `Document size went from ${transaction.before.content.size} to ${transaction.doc.content.size}`
        );

        const newState = this.view.state.apply(transaction);
        this.view.updateState(newState);
      },
    });
  }
}
