import { createRequire } from "module";
import { defineConfig } from "vitepress";
import markdownItSnippet from "./markdown-it-snippet";

const require = createRequire(import.meta.url);

export default defineConfig({
  outDir: "../public",
  base: "/utilscore/",
  titleTemplate: "utilscore",
  appearance: true,
  lastUpdated: false,
  cleanUrls: true,
  head: [
    [
      "link",
      {
        href: "https://cgxqd.github.io/monaco-editor/dist/index.css",
        rel: "preload stylesheet",
      },
    ],
  ],
  markdown: {
    config: async md => {
      md.use(require("markdown-it-container"), "snippet", markdownItSnippet);
    },
  },
  themeConfig: {
    outline: "deep",
    search: {
      provider: "local",
    },
    siteTitle: "utilscore",
    logo: "/assets/icon.svg",
    nav: nav(),
    sidebar: {
      "/docs/": sidebarModules(),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/cgxqd/utilscore" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present cgxqd",
    },
  },
});

function nav() {
  return [
    { text: "文档", link: "/docs/guide/installation", activeMatch: "/docs/" },
  ];
}

function sidebarModules() {
  return [
    {
      text: "快速入门",
      items: [
        { text: "安装", link: "/docs/guide/installation" },
        { text: "更新日志", link: "/docs/guide/CHANGELOG" },
      ],
    },
    {
      text: "API",
      items: [
        { text: "matche 类型处理", link: "/docs/modules/matche" },
        { text: "string 字符串", link: "/docs/modules/string" },
        { text: "number 数字", link: "/docs/modules/number" },
        { text: "array 数组", link: "/docs/modules/array" },
        { text: "object 对象", link: "/docs/modules/object" },
        { text: "function 函数", link: "/docs/modules/function" },
        { text: "browser 浏览器", link: "/docs/modules/browser" },
        { text: "date 时间", link: "/docs/modules/date" },
        { text: "url 网址", link: "/docs/modules/url" },
      ],
    },
  ];
}
