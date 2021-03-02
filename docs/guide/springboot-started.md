---
title: springboot启动
---

## 优势
1. 拥抱主流框架，只需配置后，即可自动注入使用
2. 按需配置brokerConfig、nettyConfig
3. 不受底层brokerConfig、nettyConfig参数的变化的影响
## 劣势
1. 原模块中brokerController实例生成方式有变化也要相应修改注入方式

## 使用详解
在jmqtt-springboot-starter目录中使用maven命令
```bash
mvn install
```

在自己的项目pom文件中引入
```pom
<dependency>
    <groupId>org.jmqtt</groupId>
    <artifactId>jmqtt-springboot-starter</artifactId>
    <version>3.0.0</version>
</dependency>
```

在配置文件中按照规则配置想要修改的参数
```json
jmqtt:
# BrokerConfig配置规则为jmqtt.broker.参数名
  broker:
    jmqttHome: HomedycTest
    clusterMode: 28
    anonymousEnable: false
# NettyConfig配置规则为jmqtt.netty.参数名
  netty:
    tcpBackLog: 520
```

最后在想要使用brokerController的位置通过注解注入即可使用
```java
@Autowired
private BrokerController brokerController;
```

