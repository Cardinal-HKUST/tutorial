import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cardinal Tutorials",
  description: "Some technical tutorials offered by Cardinal@HKUST",
  // base: "/tutorial",
  logo: '/cardinal.png',
  lastUpdated: true,
  localSearch: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Tutorials', link: '/tutorials/remote-operation-on-server' }
    // ],
    sidebar: [
      {
        text: 'Tutorials',
        items: [
          { text: '远程连接服务器', link: '/tutorials/remote-operation-on-server' },
          // { text: 'GPU设置', link: '/tutorials/gpu-setup' },
          // { text: 'Markdown Examples', link: '/tutorials/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/tutorials/api-examples' }
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

function nav() {
  return [
    { text: 'Tutorial', link: '/tutorials/remote-operation-on-server', activeMatch: '/tutorials/' },
  ]
}
