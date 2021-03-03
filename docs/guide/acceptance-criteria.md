---
title: 参与开发
---

## Jmqtt开发者
Jmqtt是完全开源的纯java MQTT实现，由一群热爱IOT技术的小伙伴自愿维护。如果你也热爱技术，并且对IOT技术感兴趣，欢迎加入我们，为Jmqtt贡献代码。
## 开发流程
1. clone 本项目 `git clone https://github.com/Cicizz/jmqtt.git`
2. 切换到devlop分支 `git checkout devlop`, 并基于devlop创建新的分支 `git checkout -b feature/${new-feature-name}`
3. 开发并提交，提交内容参考
4. 提交pr
5. 等待review完成并合并
## 验收准则
在源代码中的jmqtt-acceptance模块，基于spock（[Spock Framework Reference Documentation](https://spockframework.org/spock/docs/1.3/index.html)）测试框架，编写了Jmqtt的验收测试用例，这些测试用例包含了mqtt协议的大部分内容：
1. mqtt v3 (位于：src/test/java `package com.jmqtt.mqtt.v3.acceptance`)
2. mqtt v5 (位于：src/test/java `package com.jmqtt.mqtt.v5.acceptance`)
3. acl (位于：src/test/java `package com.jmqtt.mqtt.acl`)
4. tls (位于：src/test/java `package com.jmqtt.mqtt.tls`)

在运行这些测试用例前，我们需要先启动Jmqttt，然后修改`src/test/resources/applicaiton.yml`中的对应的配置：
```yaml
mqtt-broker:
  basic:
    host: 127.0.0.1
    port: 1883
  acl:
    host: 127.0.0.1
    port: 1883
  test:
    host: 127.0.0.1
    port: 1883
    enableTLS: false
```
>注意：我们现在Jmqtt只支持mqtt 协议的v3版本，我们在修改代码之后，只需要运行mqtt v3 (位于：src/test/java `package com.jmqtt.mqtt.v3.acceptance`)的测试用例即可。