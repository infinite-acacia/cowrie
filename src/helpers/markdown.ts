export function getMarkdownNodeViews() {
  return {
    heading: (node, view, getPos, decorations) => {
      const level = node.attrs.level;
      const pounds = '#'.repeat(level).concat(' ');
      const dom = document.createElement('div');
      dom.classList.add(`markdown-heading-${level}`);
      const span = document.createElement('span');
      span.textContent = pounds;
      const contentDom = document.createElement(`h${node.attrs.level}`);
      contentDom.appendChild(span);
      for (const n of node.content.content) {
        contentDom.textContent += n.text;
      }

      dom.appendChild(contentDom);
      console.log(node);
      return { dom, contentDom };
    },
  };
}
