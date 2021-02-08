module.exports = {
  theme:"antdocs",
  title: "Jmqtt 官方文档",
  description: "基于Java的mqtt 服务器.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/Cicizz/jmqtt",
    editLinks: false,
  },
};
