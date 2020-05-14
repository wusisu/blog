const themeConfig = require('./config/theme/')

module.exports = {
  title: "wusisu | 吴思稣",
  description: 'How to become a Hacker.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-72139013-3' // UA-00000000-0
      },
    ],
    '@vuepress/medium-zoom', 
    'flowchart',
  ],
}  