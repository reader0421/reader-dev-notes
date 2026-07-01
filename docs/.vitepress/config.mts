import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const owner = process.env.GITHUB_REPOSITORY_OWNER
const isUserOrOrgPage = repository === `${owner}.github.io`
const base = process.env.BASE_PATH ?? (repository && !isUserOrOrgPage ? `/${repository}/` : '/')

export default defineConfig({
  title: '个人文档',
  description: '个人知识库与技术文档',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '写作规范', link: '/guide/writing' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Built with VitePress and GitHub Pages',
      copyright: 'Copyright © 2026'
    }
  }
})
