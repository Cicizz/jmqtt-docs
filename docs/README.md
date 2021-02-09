---
home: true
heroImage: /assets/logo.png
actionText: 快速上手
actionLink: /guide/
features:
- title: 功能强大
  details: 支持mqtt3.1.1协议所有功能；mqtt5支持开发中
- title: 持久化存储/集群
  details: 支持基于mysql的数据存储，支持基于redis/mysql的集群化部署，支持基于内存的嵌入式部署。
- title: 友好的二次开发
  details: 存储/集群/权限认证都支持插件化开发，可基于自己的业务灵活开发插件，桥接自己的数据等，团队长期支持维护。
footerColumn: 4
footerWrap: 
- headline: 🌿生态系统
  items:
  - title: Jmqtt-github
    link: https://github.com/Cicizz/jmqtt
    details: jmqtt github 地址
  - title: Jmqtt-gitee
    link: https://gitee.com/cuteTree/jmqtt
    details: jmqtt 码云地址
  - title: mqtt5 协议
    link: https://www.zybuluo.com/khan-lau/note/1325300
    details: mqtt5协议
- headline: ⚓资源链接
  items:
  - title: VuePress
    link: https://vuepress.vuejs.org/zh/
  - title: Ant Design Vue
    link: https://antdv.com/
- headline: 💬社区交流
  items:
  - title: VuePress 社区
    link: https://shang.qq.com/wpa/qunwpa?idkey=fce20f9d7a5620dbb261b31b6bd01f726c9e24e7697fcba4ea7927d5dc971ac5
    details: QQ交流群
  - title: 入驻申请
    link: https://wj.qq.com/s2/5692294/796a/
    details: 插件/脚本/案例
  - title: 报告 Bug
    link: https://github.com/zpfz/vuepress-theme-antdocs/issues
    details: Github issue
- headline: ☕作者博客
  items:
  - title: 掘金
    link: https://juejin.im/user/5d07466b51882554d6312922/
    details: 一个帮助开发者成长的社区
  - title: CSDN
    link: https://blog.csdn.net/zpfz756/
    details: 专业IT技术社区
footer: MIT Licensed | Copyright © 2020-present Feng Left-Handed
---

# 快速上手

## 安装主题

使用 `yarn` 安装 `AntDocs` 主题：
```bash
yarn add vuepress-theme-antdocs
```
或者使用 `npm` 安装它：
```bash
npm i vuepress-theme-antdocs
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 引用主题

打开 `.vuepress/config.js` 文件，然后在合适位置引用它：

```js
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```
如果你对 VuePress 主题配置不是很了解，请点这里：[使用主题](https://vuepress.vuejs.org/zh/theme/using-a-theme.html#%E4%B8%BB%E9%A2%98%E7%9A%84%E7%BC%A9%E5%86%99)  

配置完毕后，你就可以直接 `yarn run docs:dev` 或 `npm run docs:dev` 查看效果。

## 效果预览

<p align="center"><img src="https://s2.ax1x.com/2020/02/28/3B3lOf.png"/></p>

## 贡献者

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    左撇峰子
  </template>
  <a-avatar src="https://s2.ax1x.com/2020/02/28/3rs23q.jpg" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    Guojun Chen
  </template>
  <a-avatar src="https://s2.ax1x.com/2020/02/29/3yu9OK.jpg" :size="54"/>
</a-tooltip> 
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    Baiang
  </template>
  <a-avatar src="https://avatars2.githubusercontent.com/u/8638857?s=120&v=4" :size="54"/>
</a-tooltip>  
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    Yexk_M
  </template>
  <a-avatar src="https://avatars2.githubusercontent.com/u/19749521?s=400&u=62d64f041af4a703c3a4089de9957c7c6a5c671f&v=4" :size="54"/>
</a-tooltip> 
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    kitaharafay
  </template>
  <a-avatar src="https://avatars0.githubusercontent.com/u/37034015?s=400&u=773ab8dae0850cfd01f828e7c407d423b58ec748&v=4" :size="54"/>
</a-tooltip> 


<p>&nbsp; </p>  

[我也想为贡献者之一？](https://github.com/zpfz/vuepress-theme-antdocs/pulls)

<p>&nbsp; </p> 

## 赞助者  

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    Roy Kid
  </template>
  <a-avatar src="https://s1.ax1x.com/2020/03/17/8dnGRA.th.jpg" :size="54"/>
</a-tooltip>


<Msg />
