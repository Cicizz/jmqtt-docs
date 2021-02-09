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
- headline: 💬社区交流
  items:
  - title: qq群
    link: 
    details: QQ交流群：578185385
  - title: 报告 Bug
    link: https://github.com/Cicizz/jmqtt/issues
    details: Github issue
- headline: ☕作者博客
  items:
  - title: mangdagou
    link: http://www.mangdagou.com/blog
    details: 记录，分享与总结
footer: Apache Licensed | Copyright © 2020-present zze Left-Handed
---

## 快速上手

### 安装主题

1. 下载 [release](https://github.com/Cicizz/jmqtt/releases)(3.x以上版本) 或`clone`本项目：
2. 在jmqtt根目录执行：：
```bash
mvn -Ppackage-all -DskipTests clean install -U
```
3. 配置相应的配置文件,初始化db的sql文件:`/jmqtt-broker/resources/conf`目录下
4. 执行启动命令：`java -jar jmqtt-broker-3.0.0.jar -h ${conf文件目录}` -h后是配置文件目录，里面需要包含jmqtt.properties和log4j2.xml等配置文件

### 测试
下载客户端：[mqtt客户端](https://mqttx.app/cn/)
或 直接使用websocket测试：`/jmqtt/jmqtt-examples`

### 贡献者

<p></p>

<a-tooltip placement="bottom">
  <template slot="title">
    zze
  </template>
  <a-avatar src="/assets/lufei.png" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    fupeng
  </template>
  <a-avatar src="/assets/suolong.png" :size="54"/>
</a-tooltip> 
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    duyichang
  </template>
  <a-avatar src="/assets/shanzhi.png" :size="54"/>
</a-tooltip>  
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    liuyanbin
  </template>
  <a-avatar src="/assets/qiaoba.png" :size="54"/>
</a-tooltip> 
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    liuyanbin
  </template>
  <a-avatar src="/assets/wusuopu.png" :size="54"/>
</a-tooltip> 


<p>&nbsp; </p>  

[我也想为贡献者之一？](https://github.com/Cicizz/jmqtt/pulls)

<p>&nbsp; </p> 


<Msg />
