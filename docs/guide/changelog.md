---
title: 更新日志
---

# 更新日志
<p></p> 
<p></p> 

<template>
  <a-timeline>
    <a-timeline-item>
      v3.0.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 架构优化，模块优化，删除一些不必要的代码和模块等<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持基于mysql的数据持久化/集群<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 插件化开发优化，更友好的支持插件化<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 集群处理优化，确定集群处理的两种方式<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 详细的技术文档和核心代码注释<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 日志优化，切换为log4j2<br/>
        &emsp;- <a-tag color="green">说明</a-tag> 请使用该版本之后的版本，会长期维护和优化<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v2.1.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持基于redis的中央集群，多主机横向扩展，实现高可用<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持SSL/TLS<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持安全认证<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 扩展了集群功能，解决之前相应的Bug<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 新增后台管理模块，新增后台管理页面(暂时只是页面模板)<br/>
      </p>
    </a-timeline-item>
      <a-timeline-item>
        v1.1.0
        <p>
          更新内容：<br/>
          &emsp;- <a-tag color="green">新增</a-tag> 支持连接，发布，订阅权限认证（插件化）<br/>
          &emsp;- <a-tag color="green">优化</a-tag> 优化rocksdb存储<br/>
          &emsp;- <a-tag color="green">优化</a-tag> 添加一些日志log<br/>
          &emsp;- <a-tag color="green">修复</a-tag> 移除redis的存储<br/>
          &emsp;- <a-tag color="green">修复</a-tag> 修复订阅bug<br/>
          &emsp;- <a-tag color="green">修复</a-tag> 修复离线消息bug<br/>
          &emsp;- <a-tag color="green">修复</a-tag> 修复retain消息bug<br/>
        </p>
      </a-timeline-item>
    <a-timeline-item>
      v1.0.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持mqtt3.1.1协议所有特性<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持websocket<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持消息，客户端会话信息本地持久化（采用rocksdb存储）<br/>
        &emsp;- <a-tag color="green">新增</a-tag> 支持redis存储（非集群）<br/>
      </p>
    </a-timeline-item>
  </a-timeline>
</template>
