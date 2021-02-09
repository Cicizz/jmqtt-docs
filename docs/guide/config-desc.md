---
title: 配置详解
---

# 配置文件说明

配置文件主要分为（在Jmqtt-broker/resources/conf下）：
1. jmqtt.properties：Jmqtt运行配置类
2. log4j2.xml：日志配置类
3. 其他配置文件：ssl校验文件等
## jmqtt.properties
对应的源码中为：BrokerConfig 和 NettyConfig，若jmqtt.properties中没有相关配置字段，可自行添加。
```java
# 是否开启匿名访问
anonymousEnable=true

# max mqtt message size
maxMsgSize=524288

# 是否启用高性能消息处理，若启用，则mqtt的入栈，出栈过程消息会基于内存保存
highPerformance=false

# 是否开启tcp服务
startTcp=true
tcpPort=1883

# 是否开启tcp ssl 服务
startSslTcp=true
sslTcpPort=1884

# 是否开启websocket服务,ws协议
startWebsocket=true
websocketPort=8883

# 是否开启websocket服务,wss协议
startSslWebsocket=true
sslWebsocketPort=8884

# 集群模式：1.基于发布订阅，集群主动push消息给Jmqtt(例如用Redis的集群发布订阅，其他mq桥接发布订阅等); 
#         2.基于poll，jmqtt主动从集群拉消息（例如基于DB的集群实现）
clusterMode = 2
#         采用第二种集群模式：poll方式时，一次从集群中最多拉的消息数目和间隔拉取的时间（ms）
maxPollEventNum = 10
pollWaitInterval = 10


# 插件类：开发者可实现自己的插件，从而实现自己的业务（请先阅读基于db的默认实现代码）
sessionStoreClass=org.jmqtt.broker.store.rdb.RDBSessionStore
messageStoreClass=org.jmqtt.broker.store.rdb.RDBMessageStore
authValidClass=org.jmqtt.broker.acl.impl.DefaultAuthValid
clusterEventHandlerClass=org.jmqtt.broker.processor.dispatcher.rdb.RDBClusterEventHandler

# 基于DB存储时，DB相关的配置，需要配置成自己的数据库
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/jmqtt?characterEncoding=utf8&autoReconnect=true&failOverReadOnly=false&maxReconnects=10&useSSL=false
username=root
password=CallmeZ2013
```
