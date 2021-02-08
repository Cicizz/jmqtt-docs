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
      },                      // 根路径
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
      // 下拉列表显示分组
      // {
      //   text: '高级',
      //   items: [
      //     { 
      //       text: '算法', 
      //       items: [
      //         { text: '冒泡', link: '/language/chinese' },
      //         { text: '快速', link: '/language/japanese' }
      //       ] 
      //     },
      //     { 
      //       text: '设计模式', 
      //       items: [
      //         { text: '工厂', link: '/language/chinese' },
      //         { text: '单例', link: '/language/chinese'},
      //       ] 
      //     },
      //   ]
      // }
    ]
  }
}