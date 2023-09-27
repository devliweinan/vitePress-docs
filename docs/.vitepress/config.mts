import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: "/vitePress-docs/",
  themeConfig: {
    logo: "/images/vite.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "vue", link: "/articles/vue/上传素材到COS" },
      { text: "uniapp", link: "/articles/uniapp/一键登录" },
      {
        text: "博客文档",
        items: [ // 可以配置成下拉
          { text: "JavaScript 核心系列", link: "/articles/javaScript-core/构造函数、原型、原型链" },
          { text: "Vue 三方组件库", link: "/articles/libs/VForm3低代码初体验" },
          { text: "其他", link: "/articles/other/nvm管理node" },
        ]
      }
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
