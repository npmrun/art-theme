// https://github.com/remarkjs/remark-directive
// https://github.com/syntax-tree/mdast-util-directive#syntax-tree

import { visit } from 'unist-util-visit';

export default function calloutsPlugin() {
  return (tree, file) => {
    visit(tree, "code", (node) => {
        let { lang } = node;
        if (lang === "flow") {
            node.type = "html";
            node.value = `<div class="mermaid">${node.value}</div>`;
        } else if (lang === "sequence") {
            node.type = "html";
            node.value = `<div class="mermaid">${node.value}</div>`;
        }
        return node;
    });
  };
}
