import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import path from "path";
// import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";
import remarkParseVar from "./plugins/remark-parseVar.mjs";
import remarkCode from "./plugins/remark-code.mjs";

export default defineConfig({
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [
            "remark-gfm",
            "remark-smartypants",
            remarkParseVar,
            remarkCode,
        ],
        rehypePlugins: [
            "rehype-slug",
            [
                "rehype-autolink-headings",
                {
                    behavior: "wrap",
                },
            ],
        ],
        shikiConfig: {
            theme: "poimandres",
            langs: [],
            wrap: false,
        },
    },
    site: "https://art-theme.netlify.app/",
    integrations: [
        tailwind({
            config: { path: "./tailwind.config.js" },
            applyBaseStyles: false,
        }),
        // partytown(),
        compress(),
        robotsTxt(),
        astroImageTools,
        vue(),
        mdx({
            remarkPlugins: {
                extends: [remarkParseVar, remarkCode],
            },
        }),
        sitemap(),
    ],
    server: {
        port: 3322,
    },
    vite: {
        ssr: {
            external: ["svgo"],
        },
        resolve: {
            alias: {
                "@root": path.resolve("./"),
                "@blog": path.resolve("./src"),
                "#": path.resolve("./typings"),
            },
        },
        plugins: [],
    },
});
