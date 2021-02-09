<template></template>
<script>
export default {
  name:"Msg",
  mounted() {
    this.$notification.open({
        message: '嗨！好久不见！',
        description:
          'Jmqtt 正在持续开发优化中，欢迎关注哦...',
        icon: <a-icon type="smile" style="color: #108ee9" />,
        duration: 0,
        placement: 'bottomRight',
        btn: h => {
          return h(
            'a-button',
            {
              props: {
                type: 'primary',
                size: 'small',
              },
              on: {
                click: () => window.location.href="/easter-eggs/gtfkNJKr.html",
              },
            },
            '敲彩蛋',
          );
        },
        key: 'egg'
      });
  },
};
</script>
