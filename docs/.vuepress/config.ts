import { defaultTheme, defineUserConfig, viteBundler } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";

export default defineUserConfig({
  base: "/",
  title: "Atypical UI",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    },
  }),
  plugins: [
    codeBlockPlugin({}),
    searchPlugin({
      isSearchable: page => page.path !== "/",
      getExtraFields: page => (page.frontmatter.tags as any) ?? [],
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh-CN/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Atypical UI",
      description: "Hope you can find some atypical components & effects here! A Library for Vue.js",
      head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Atypical UI",
      description: "希望你可以在这找到一些非专业的组件和效果！这是一个为 Vue.js 的库:-3",
      head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    },
  },
  theme: defaultTheme({
    logo: "/images/logo.png",
    darkMode: true,
    repoLabel: "GitHub",
    repo: "https://github.com/HanSuhhi/chaos-text",
    locales: {
      "/": {
        home: "/",
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        navbar: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
        ],
      },
      "/zh-CN/": {
        home: "/zh-CN/",
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        notFound: ["此处的页面失踪了", "或许去其他页面看看？", "明天的天气是晴天吗，嗯？", "时间不早了，或许该去接杯水？"],
        backToHome: "返回首页",
        navbar: [
          { text: "首页", link: "/zh-CN/" },
          {
            text: "开始",
            link: "/zh-CN/guide",
          },
          {
            text: "组件",
            link: "/zh-CN/button/",
          },
        ],
      },
    },
  }),
});
