---
title: 基于mysql启动
---

## 优势
1. 基于Mysql实现持久化存储和集群，运维成本低
2. 数据可靠性高，默认支持集群，mqtt broker无状态，可横向扩展
## 劣势
1. 性能较低，必要时，需要优化DB及相关的处理
2. 基于DB的集群实现方式：为poll的集群实现方式，每隔一段时间，mqtt broker节点从消息事件表中拉取相应的事件进行处理（处理session，分发节点消息等）
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
# 这里需要采用集群2的方式
clusterMode = 2
# 每次最多从事件表中拉取未处理的10条
maxPollEventNum = 10 
# 若每次拉取不满，则等待10ms再拉取，防止一直请求DB
pollWaitInterval = 10
# DB数据源配置
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/jmqtt?characterEncoding=utf8&autoReconnect=true&failOverReadOnly=false&maxReconnects=10&useSSL=false
username=root
password=CallmeZ2013
```
## 初始化sql
这里为最初的表结构，后续更新可能不及时，具体请查看jmqtt源码中`/jmqtt/jmqtt-broker/resources/conf`下的`jmqtt.sql`
```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for jmqtt_event
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_event`;
CREATE TABLE `jmqtt_event` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键：也是集群节点批量拉消息的offset',
`content` text NOT NULL COMMENT '消息体',
`gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
`jmqtt_ip` varchar(24) NOT NULL COMMENT 'jmqtt服务器ip，发送该消息到集群中的broker ip',
`event_code` int(4) NOT NULL COMMENT '事件码',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='jmqtt 集群事件转发表：由发送端将消息发送到该表中，其他节点批量拉取该表中的事件进行处理';

-- ----------------------------
-- Table structure for jmqtt_inflow_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_inflow_message`;
CREATE TABLE `jmqtt_inflow_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
`client_id` varchar(64) NOT NULL COMMENT '设备id',
`msg_id` int(11) NOT NULL COMMENT '消息id',
`content` text NOT NULL COMMENT '消息体内容',
`gmt_create` bigint(20) NOT NULL COMMENT '消息保存时间（对应消息接收时间）',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_client_id_msg_id` (`client_id`,`msg_id`) USING BTREE,
KEY `idx_client_id` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='入栈消息表';

-- ----------------------------
-- Table structure for jmqtt_offline_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_offline_message`;
CREATE TABLE `jmqtt_offline_message` (
  `id` bigint(20) AUTO_INCREMENT NOT NULL,
`client_id` varchar(64) NOT NULL COMMENT '客户端id',
`content` text NOT NULL COMMENT '消息体',
`gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
PRIMARY KEY (`id`),
KEY `idx_client_id` (`client_id`),
KEY `idx_gmt_create` (`gmt_create`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='离线消息表';

-- ----------------------------
-- Table structure for jmqtt_outflow_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_outflow_message`;
CREATE TABLE `jmqtt_outflow_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`client_id` varchar(64) NOT NULL COMMENT '目标客户端id',
`msg_id` int(11) NOT NULL COMMENT '消息id',
`content` text NOT NULL COMMENT '消息内容',
`gmt_create` bigint(20) NOT NULL COMMENT '消息缓存时间',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_client_id_msg_id` (`msg_id`,`client_id`) USING BTREE,
KEY `idx_client_id` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='出栈消息表';

-- ----------------------------
-- Table structure for jmqtt_outflow_sec_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_outflow_sec_message`;
CREATE TABLE `jmqtt_outflow_sec_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`client_id` varchar(64) NOT NULL COMMENT '目标客户端id',
`msg_id` int(11) NOT NULL COMMENT '消息id',
`gmt_create` bigint(20) NOT NULL COMMENT '消息缓存时间',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_client_id_msg_id` (`msg_id`,`client_id`) USING BTREE,
KEY `idx_client_id` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='发送qos2消息后的第二阶段的消息缓存表：接收pubRec后保留clientId，msgId等报文。设备重连时候进行重发';

-- ----------------------------
-- Table structure for jmqtt_retain_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_retain_message`;
CREATE TABLE `jmqtt_retain_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`topic` varchar(128) NOT NULL COMMENT '所属topic',
`content` text NOT NULL COMMENT '消息体',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_topic` (`topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='保留消息表';

-- ----------------------------
-- Table structure for jmqtt_session
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_session`;
CREATE TABLE `jmqtt_session` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`client_id` varchar(64) NOT NULL COMMENT '客户端id',
`state` varchar(12) NOT NULL COMMENT '状态：ONLINE,OFFLINE两种',
`offline_time` bigint(20) DEFAULT NULL COMMENT 'OFFLINE状态时对应的离线时间戳（只有cleanStart为0时候离线才有该数据）',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_client_id` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='客户端会话状态';

-- ----------------------------
-- Table structure for jmqtt_subscription
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_subscription`;
CREATE TABLE `jmqtt_subscription` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`client_id` varchar(64) NOT NULL COMMENT '客户端id',
`topic` varchar(128) NOT NULL COMMENT '订阅的topic',
`qos` tinyint(4) NOT NULL COMMENT '对应的qos',
PRIMARY KEY (`id`),
KEY `idx_client_id` (`client_id`),
KEY `idx_topic` (`topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='客户端订阅关系';

-- ----------------------------
-- Table structure for jmqtt_will_message
-- ----------------------------
DROP TABLE IF EXISTS `jmqtt_will_message`;
CREATE TABLE `jmqtt_will_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
`client_id` varchar(64) NOT NULL COMMENT '客户端id',
`content` text NOT NULL COMMENT '消息体',
`gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
PRIMARY KEY (`id`),
UNIQUE KEY `uqe_client_id` (`client_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='遗嘱消息表';

SET FOREIGN_KEY_CHECKS = 1;

```

