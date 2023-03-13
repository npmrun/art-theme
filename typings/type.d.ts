import { MarkdownInstance } from "astro";

export type Post = {
  title: string;
  theme: "github" | "normal";
  slug: string;
  desc: string;
  author: string;
  pubDate: string;
  updatedDate: string;
  pubTimestamp: number;
  updatedTimestamp?: number;
  draft: boolean;
  file: URL;
  categories: string[];
  _rawString: string;
  _images: Record<"name" | "url" | "alt", string>[];
  _head: { level: number; title: string; raw: string }[];
  top: boolean;
  hero: string;
  heroPosition: "center" | "top" | "bottom";
  heroHideTitle: boolean;
  Content: MarkdownInstance<any>["Content"];
  postPicture: string;
  toc: boolean;
  mode?: "indent"; // 首行段落缩进
};
