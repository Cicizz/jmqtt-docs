###官网搭建指导文件
##1、本地搭建
安装v.12.0版本以上的node.js，通过node.js的npm install -g vuepress@0.14.5安装vuepress。
在终端以管理员模式进入vuepress目录下，运行命令vuepress dev . 
运行后复制终端上显示的地址就可以本地查看效果。由于vuepress是热部署的，修改保存后即可在浏览器看到最新的效果，无需重新构建。

##2、服务器部署
在本地终端以管理员身份在vuepress目录下，运行命令vuepress build . 
命令执行后会在.vuepress目录下生成dist目录，里面的就是最终的html文件。

网址的根目录为vuepress文件夹下的README.md，导航栏课在.vuepress文件夹下config.js文件中修改。
静态文件放在.vuepress下public文件夹中