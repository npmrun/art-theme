import fs from "fs-extra";
import path from "path";

// fs.copySync(
//     path.resolve(__dirname, "../hack/index.js"),
//     path.resolve(
//         __dirname,
//         "../node_modules/astro-imagetools/integration/index.js"
//     ),
//     {
//         overwrite: true,
//     }
// );

// fs.copySync(
//     path.resolve(__dirname, "../hack/runtimeChecks.js"),
//     path.resolve(
//         __dirname,
//         "../node_modules/astro-imagetools/utils/runtimeChecks.js"
//     ),
//     {
//         overwrite: true,
//     }
// );

fs.copySync(
    path.resolve(__dirname, "../hack/Icon.astro"),
    path.resolve(__dirname, "../node_modules/astro-icon/lib/Icon.astro"),
    {
        overwrite: true,
    }
);
