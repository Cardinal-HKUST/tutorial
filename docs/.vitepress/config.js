import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cardinal Tutorials",
  description: "Some technical tutorials offered by Cardinal@HKUST",
  // base: "/tutorial",
  lastUpdated: true,
  localSearch: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/remote-operation-on-server' }
    ],
    sidebar: [
      {
        text: 'Tutorials',
        items: [
          { text: '远程连接服务器', link: '/remote-operation-on-server' },
          { text: 'GPU设置', link: '/gpu-setup' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cardinal-HKUST' }
    ],
    editLink: {
      pattern: 'https://github.com/Cardinal-HKUST/tutorial/edit/main/docs/:path'
    },
  }
})
