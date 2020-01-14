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

#### 3.HTML全局属性(global attribute)有哪些（包含H5）？ 

全局属性：用于任何HTML5元素的属性

- accesskey:设置快捷键
- class:为元素设置类标识
- contenteditable:指定元素内容是否可编辑
- contextmenu:自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
- data-*:为元素增加自定义属性
- dir：设置元素文本方向（默认ltr；rtl）
- draggable:设置元素是否可拖拽
- dropzone:设置元素拖放类型（copy|move|link,H5新属性，主流均不支持）
- hidden:规定元素仍未或不在相关
- id:元素id，文档内唯一
- lang:元素内容的语言
- spellcheck:是否启动拼写和语法检查
- style:行内css样式
- tabindex:设置元素可以获得焦点，通过tab导航
- title:规定元素有关的额外信息
- translate:元素和子孙节点内容是否需要本地化（均不支持）

 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) 

#### 4.HTML5的文件离线储存怎么使用，工作原理是什么？

https://juejin.im/entry/5e1dda8451882520a167dd2d/detail

```
<!DOCTYPE HTML>
<html manifest = "cache.manifest">
...
</html>




```

```
//cache.manifest文件：

CACHE MANIFEST
#v0.11

CACHE:
js/app.js
css/style.css

NETWORK:
resourse/logo.png

FALLBACK:
/ /offline.html

```

