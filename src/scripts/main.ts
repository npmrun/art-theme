import View from "viewerjs";
import ClipboardJS from "clipboard";
import mermaid from "mermaid"

mermaid.init({
    theme: 'neutral',
    // logLevel: 3,
    securityLevel: 'loose',
    flowchart: { curve: 'basis' },
    gantt: { axisFormat: '%m/%d/%Y' },
    sequence: { actorMargin: 50 },
}, `.my-article .mermaid`);

const links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    const link = links[i];
    if (link.hostname != window.location.hostname) {
        link.target = "_blank";
    }
}

var clipboard = new ClipboardJS('.my-article .code-figure .copy-btn', {
    text: function (trigger) {
      return trigger.nextElementSibling.innerHTML;
    },
  });
  clipboard.on('success', function (e) {
    const el = e.trigger as HTMLDivElement;
    e.clearSelection();
    el.style.color = 'green';
    el.innerHTML = 'Copied';
    setTimeout(() => {
      el.style.color = '';
      el.innerHTML = 'Copy';
    }, 2500);
  });
  
  clipboard.on('error', function (e) {
    const el = e.trigger as HTMLDivElement;
    el.style.color = 'red';
    el.innerHTML = 'Copy';
    setTimeout(() => {
      el.style.color = '';
      el.innerHTML = 'Copy';
    }, 2500);
  });

new View(document.querySelector(".my-article"));
