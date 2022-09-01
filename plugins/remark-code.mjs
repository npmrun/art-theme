// https://github.com/nemo-omen/remark-code-figure/blob/main/index.js
// https://github.com/syntax-tree/mdast#code

import { visit } from "unist-util-visit";
import { runHighlighterWithAstro } from "@astrojs/prism/dist/highlighter";
import { toHtml } from "hast-util-to-html";

export default function remarkCode() {
    return function (tree) {
        visit(tree, "inlineCode", (node) => {
            let { lang, value, meta } = node;
            if (/^\$(.*?)\$$/.test(value)) {
                node.type = "html";
                let { html } = runHighlighterWithAstro(lang, value);
                node.value = `<code class="mathjax tex2jax_process">${html}</code>`;
            }
        });
        visit(tree, "code", (node) => {
            let { lang, value, meta } = node;
            if (lang === "flow") {
                const el = {
                    type: "element",
                    tagName: "div",
                    properties: {
                        className: "flow",
                    },
                    children: [
                        {
                            type: "raw",
                            value: value.replace(/[\r\n]/g, "_::_"),
                        },
                    ],
                };
                node.type = "html";
                node.value = toHtml(el);
            } else if (lang === "sequence") {
                const el = {
                    type: "element",
                    tagName: "div",
                    properties: {
                        className: "sequence",
                        style: "color: #80808057;font-size: 14px;margin: 6px 0;border-width: 0;text-align:center;",
                    },
                    children: [
                        {
                            type: "raw",
                            value: "Don't Support",
                            // value: value.replace(/[\r\n]/g, "_::_"),
                        },
                    ],
                };
                node.type = "html";
                node.value = toHtml(el);
            } else if (lang === "mathjax") {
                // 公式
                const el = {
                    type: "element",
                    tagName: "div",
                    properties: {
                        className: "mathjax tex2jax_process",
                    },
                    children: [
                        {
                            type: "raw",
                            value: value,
                        },
                    ],
                };
                node.type = "html";
                node.value = toHtml(el);
            } else {
                node.type = "html";
                let { html, classLanguage } = runHighlighterWithAstro(
                    lang,
                    value
                );
                let classes = [classLanguage];
                node.value = `<figure class="code-figure">
                    <figcaption class="line-numbers-head">
                        <div class="custom-carbon">
                        <div class="custom-carbon-dot custom-carbon-dot--red"></div>
                        <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
                        <div class="custom-carbon-dot custom-carbon-dot--green"></div>
                        <div class="text">${!!lang ? `<span class="language">${lang}</span>` : ""}</div>
                        <div class="copy-btn" data-clipboard-text="${value}">Copy</div>
                    </div>
                    </figcaption>
                    <pre class="${classes.join(
                        " "
                    )}"><code is:raw class="${classLanguage}">${html}</code></pre>${
                    !!meta
                        ? `<figcaption class="code-caption">${meta}</figcaption>`
                        : ""
                }
                </figure>`;
            }
            return node;
        });
    };
}
