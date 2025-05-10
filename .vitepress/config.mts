import { defineConfig } from 'vitepress'
import autoSidebar from './plugins/autoSidebarBeta';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "黑苹果",
  description: "黑苹果相关笔记",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.ico' }],
    [
      'meta',
      {
        name: 'author',
        content: '龙陌',
      },
    ],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '💻 首页', link: '/' },
      { text: 'xps-9570', link: '/xps-9570' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //     ]
    //   },
    //     ...autoSidebar({base:'/xps-9570'})
    // ],
    sidebar:{
      '/xps-9570/': autoSidebar({base:'/xps-9570'})
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    // 右侧边栏配置+锚点导航Anchor
    outline: {
      level: [2, 6],
      label: '本页目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '上次更新',
    },
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
  }
})
