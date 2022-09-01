import View from "viewerjs";
import FlowChart from "flowchart.js";
import ClipboardJS from "clipboard";

const links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    const link = links[i];
    if (link.hostname != window.location.hostname) {
        link.target = "_blank";
    }
}

let timeId: ReturnType<typeof setTimeout>;
var clipboard = new ClipboardJS(".typography .code-figure .copy-btn");
clipboard.on("success", function (e) {
    const el = e.trigger as HTMLDivElement;
    e.clearSelection();
    el.style.color = "green";
    el.innerHTML = "Copied";
    clearTimeout(timeId);
    timeId = setTimeout(() => {
        el.style.color = "";
        el.innerHTML = "Copy";
    }, 2500);
});

clipboard.on("error", function (e) {
    const el = e.trigger as HTMLDivElement;
    el.style.color = "red";
    el.innerHTML = "Copy";
    clearTimeout(timeId);
    timeId = setTimeout(() => {
        el.style.color = "";
        el.innerHTML = "Copy";
    }, 2500);
});

const gallery = new View(document.querySelector(".typography"));
const flows = document.querySelectorAll(".typography .flow");
flows.forEach((v: HTMLElement) => {
    const text = v.innerText.replace(/_::_/g, "\n");
    var diagram = FlowChart.parse(text);
    v.innerHTML = "";
    diagram.drawSVG(v);
});

window.MathJax = {
    tex: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
    },
    svg: {
        displayAlign: "center",
        fontCache: "global",
    },
    options: {
        processHtmlClass: "tex2jax_process",
        ignoreHtmlClass: ".*",
    },
};

(function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    script.async = true;
    document.head.appendChild(script);
})();
