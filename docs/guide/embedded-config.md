---
title: 嵌入式启动
---

## 优势
1. 单机，基于内存实现数据存储，运维成本低
2. 启动方式简单，无需其它数据存储组件
3. 开发成本低，在改动原有代码很少的基础上实现

## 劣势
1. 数据持久化能力弱，服务重启意味着数据丢失
2. 依靠集群poll模式功能，事件批处理能力弱，后续优化升级。

## 单机实现详解
采用事件队列，收集事件，利用集群poll事件的功能，从事件队列获取事件异步处理。客户端的遗嘱、保持、会话、过程、订阅、离线消息都保存至内存中

## memory相关配置
```json
# 只需配置集群模式clusterMode = 2，highPerformance = false，maxPollEventNum ，pollWaitInterval
# 会话与消息Store类 以及 事件处理类

# 这里需要采用集群2的方式
clusterMode = 2
# 关闭highPerformance
highPerformance = false
# 每次最多从事件表中拉取未处理的10条
maxPollEventNum = 10 
# 若每次拉取不满，则等待10ms再拉取，防止一直请求事件队列
pollWaitInterval = 10
# 配置session与消息Store类
sessionStoreClass=org.jmqtt.broker.store.mem.MemSessionStore
messageStoreClass=org.jmqtt.broker.store.mem.MemMessageStore
# 配置事件处理类
clusterEventHandlerClass=org.jmqtt.broker.processor.dispatcher.mem.MemEventHandler
```