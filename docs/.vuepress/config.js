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
      {text: '文档', path: '/development/'}
    ]
  },
  sidebar: [
    {
      title: 'Components',
      collapsable: false,
      children: [
        '/components/',
        'components/alert'
      ]
    }
  ]
}
