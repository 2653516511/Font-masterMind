## 什么是axios？如何使用？描述使用它实现登录功能的流程
1）axios是基于 promise的，用于浏览器和node.js的http客户端
2）作用是 向后台发送请求
3）支持promise
4）提供了一些并发的方法
5）提供拦截器
6）浏览器支持防止csrf（跨站请求伪造）
## axios fetch ajax(jquery) 区别
1）前二者是基于promise，后者主要还是利用callback的形式
2）fetch 脱离了xhr，是新的语法 (默认不穿cookie，不像xhr那样可以监听到请求的进度)