import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { schema } from './schema';
import { DOMParser, Schema } from 'prosemirror-model';
import { addListNodes } from 'prosemirror-schema-list';
// import { addTableNodes } from 'prosemirror-schema-table';
import { setupEditor } from './helpers/setup';
export class Cowrie {
  #root?: HTMLDivElement;

  #schema?: Schema;
  #view?: EditorView;
  constructor(
    root: HTMLDivElement,
    { schema }: { schema?: Schema; tailwind?: boolean } = {}
  ) {
    this.#root = root;
    if (schema) {
      this.#schema = schema;
    }
  }

  set root(element: HTMLDivElement) {
    if (!this.#root) {
      this.#root = element;
    }
  }

  set schema(schema: Schema) {
    if (!this.#schema) {
      this.#schema = schema;
    }
  }

  init() {
    if (!this.#root) {
      throw new Error(
        'You must provide a container element. Either with the constructor or with the setter!'
      );
    }

    if (!this.#schema) {
      this.#schema = new Schema({
        nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
        marks: schema.spec.marks,
      });
    }

    const initialContent =
      document.querySelector('#content') ??
      (() => {
        const div = document.createElement('div');
        div.innerHTML = '<strong>######</strong>';
        return div;
      })();

    const state = EditorState.create({
      schema,
      plugins: setupEditor({
        schema,
        floatingMenu: false,
        menuBar: false,
        history: true,
      }),
      doc: DOMParser.fromSchema(this.#schema).parse(initialContent),
    });
    this.#view = new EditorView(this.#root, {
      state,
    });
    window.view = this.#view;
  }
}
