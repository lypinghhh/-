## HTML

> START:2020-1-11

`2020-1-11`

#### 1.页面导入样式时，使用link和@import有什么区别？

摘自：[CSS引入方式及link和@import的区别是?]( https://xiangshuo.blog.csdn.net/article/details/52885924 )

- 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；

  [@import](https://github.com/import)属于CSS类别，只能加载CSS。

- 区别2：链接引用CSS时，在页面加载时同时加载；

  [@import](https://github.com/import)需要页面网页完全加载以后加载。
  所以会出现一开始没有cs样式，闪烁一下出现样式后的页面（网速慢的情况下）

- 区别3：link是XHTML标签，无兼容问题；

  [@import](https://github.com/import)是在CSS2.1提出的，低版本的浏览器不支持。

- 区别4：链接支持使用Javascript控制DOM去改变样式；

  而[@import](https://github.com/import)不支持。

`2020-1-12`

#### 2. html的元素有哪些（包含H5）？

##### 行内元素

![](https://user-gold-cdn.xitu.io/2020/1/12/16f99cc201d57065?w=806&h=537&f=png&s=20693)

##### 块级元素

![](https://user-gold-cdn.xitu.io/2020/1/12/16f99ccdc05563d2?w=779&h=670&f=png&s=37444)

##### H5新增标签

![](https://user-gold-cdn.xitu.io/2020/1/12/16f99cdfbf91ba9a?w=858&h=888&f=png&s=135601)



