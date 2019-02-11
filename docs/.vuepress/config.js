module.exports = {
  base: '/',
  docsDir: 'docs',
  host: 'localhost',
  port: 7070,
  title: 'Vue.js UI Framework',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
  ],
  themeConfig: {
    // github 仓库的地址
    repo: 'XcXerxes/vuefire.github.io',
    docsRepo: 'XcXerxes/vuefire.github.io',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    nav: [
      {text: '首页', path: '/'},
      {text: '文档', path: '/development/'},
      {text: '教程', path: '/pro/'}
    ],
    sidebar: [
      {
        title: '起步',
        icon: 'home',
        collapsable: false,
        children: [
          '/development/'
        ]
      },
      {
        title: 'Components',
        icon: 'menu',
        collapsable: false,
        children: [
          '/components/',
          '/components/alert',
          '/components/button',
          '/components/input',
          '/components/avatar',
          '/components/progress',
          '/components/breadcrumb',
          '/components/checkbox',
          '/components/radio',
        ]
      }
    ]
  },
}
