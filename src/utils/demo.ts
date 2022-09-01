import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import glob from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getHtml() {
    return glob.sync("**/*.html", {
        cwd: path.resolve(process.cwd(), "./public/demo/"),
    });
}

function praseDemo() {
    const html = getHtml();
    const result = {};
    html.forEach((element) => {
        const route = "/demo/" + element;
        let title = "Unname | " + route;
        let desc = "";
        const p = path.resolve(process.cwd(), "./public/demo/", element);
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, { encoding: "utf-8" });
            const titleReg = /<title>(.*?)<\/title>/i.exec(content);
            if (titleReg && titleReg[1]) {
                title = titleReg[1];
            }
            const descReg = /<meta name="description" content="(.*?)">/i.exec(
                content
            );
            if (descReg && descReg[1]) {
                desc = descReg[1];
            }
        }
        const dir = path.parse(route).dir.replace(/\/demo/, "Demo");
        if (!result[dir]) result[dir] = [];
        result[dir].push({
            title,
            desc,
            dir,
            route,
        });
    });
    return result;
}

export { praseDemo };
