---
title: 基于redis启动
---

## 优势
1. 基于Redis实现持久化存储和集群，运维成本低
2. 利用Redis，高可用实现方便，默认支持集群，mqtt broker无状态，可横向扩展、
3. Redis读写性能卓越，消息处理速度更快
## 劣势
1. Redis，必要时，需要优化DB及相关的处理
2. 基于Redis的集群实现方式：为poll的集群实现方式，每隔一段时间，mqtt broker节点从消息事件表中拉取相应的事件进行处理（处理session，分发节点消息等）
事件处理会有一定延时。
## 集群实现详解
<p><img src="/assets/jmqtt_db.png" height="400"/></p>

**以client1发送消息，client2消费消息为例：**

1. client1连接jmqtt brokerA; client2连接jmqtt brokerB
2. client1发送消息到brokerA,brokerA收到消息后以事件的形式将数据存储到DB的事件表中
3. brokerB内部会定时获取DB中的未处理的事件，进行处理，brokerB拉取到该事件后，判断到是分发消息事件。
4. brokerB将事件转换为消息分发给brokerB上连接的client，这里为client2

## mysql相关配置
```json
# 这里需要采用集群1的方式
clusterMode = 1
maxPollEventNum = 10 
# 配置session与消息Store类
sessionStoreClass=org.jmqtt.broker.store.redis.RedisSessionStore
messageStoreClass=org.jmqtt.broker.store.redis.RedisMessageStore
# 配置事件处理类
clusterEventHandlerClass=org.jmqtt.broker.processor.dispatcher.redis.RedisClusterEventHandler

# 配置redis cluster: host, port 和 password
redisHost=192.168.1.22
redisPort=6379
redisPassword=
```