// .vuepress/config.js
module.exports = {
  title: 'jmqtt',
  description: '最强大的mqtt协议',
  themeConfig: {
    logo: '/jmqtt.png',
    nav: [
      { text: '特别赞助', 
      items:[
      {
        text: '请联系管理人员',link: '/'
        }
        ] 
      },
      { text: '收费服务', link: '/guide/' },
      { text: '技术文档', link: '/doc/' },
      { text: 'Github', link: 'https://github.com/Cicizz/jmqtt' }, // 外部链接
      // 显示下拉列表
      { text: 'Gitee', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/japanese' }
        ]
      },

    ]
  }
}