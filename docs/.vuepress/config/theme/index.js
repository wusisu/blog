const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  record: '粤ICP备15005415号-1',
  recordLink: 'http://www.miitbeian.gov.cn/',
  startYear: 2014,
  author: 'wusisu',
  authorAvatar: '/avatar.jpeg',

  valineConfig: {
    appId: 'TD2HlBVsYyw5J62Kg9kQom88-gzGzoHsz',// your appId
    appKey: '7pXpfTgsoOHenM3kkw5G22zl', // your appKey
  }

})