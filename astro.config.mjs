import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
// import compress from "astro-compress";
import path from "path";
// import partytown from "@astrojs/partytown";
import remarkSmartypants from "remark-smartypants";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

import sitemap from "@astrojs/sitemap";
import remarkParseVar from "./plugins/remark-parseVar.mjs";
import remarkCode from "./plugins/remark-code.mjs";
import remarkFlow from './plugins/remark-flow.mjs';

export default defineConfig({
    markdown: {
        gfm: true,
        syntaxHighlight: "prism",
        remarkPlugins: [
            remarkMath,
            remarkSmartypants,
            remarkParseVar,
            remarkFlow,
            remarkCode,
        ],
        rehypePlugins: [
            rehypeMathjax,
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
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
        // compress({
        //     html: false
        // }),
        robotsTxt(),
        astroImageTools,
        vue(),
        mdx({
            remarkPlugins: [
                remarkMath,
                remarkSmartypants,
                remarkParseVar,
                remarkFlow,
                remarkCode,
            ],
            rehypePlugins: [
                rehypeMathjax,
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: "wrap",
                    },
                ],
            ],
            gfm: true,
            syntaxHighlight: "prism",
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
        optimizeDeps: {
            "exclude": ["mermaid"]
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
