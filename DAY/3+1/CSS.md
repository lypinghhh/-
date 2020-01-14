## CSS

> START:2020-1-11

`2020-1-11`

#### 1.圣杯布局和双飞翼布局的理解和区别，并用代码实现

> [參考文章](https://www.jianshu.com/p/81ef7e7094e8)

两者的功能相同，都是为了实现一个**两侧宽度固定，中间宽度自适应的三栏布局**。

圣杯布局来源于文章[In Search of the Holy Grail](https://alistapart.com/article/holygrail)，而双飞翼布局来源于淘宝UED。虽然两者的实现方法略有差异，不过都遵循了以下要点：

- 两侧宽度固定，中间宽度自适应
- 中间部分在DOM结构上优先，以便先行渲染
- 允许三列中的任意一列成为最高列
- 只需要使用一个额外的`<div>`标签

#### 圣杯布局

##### 1.DOM结构

```
<div id="header"></div>
<div id="container">
  <div id="center" class="column"></div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

首先定义出整个布局的DOM结构，主体部分是由`container`包裹的`center`,`left`,`right`三列，其中`center`定义在最前面。

##### 2.CSS代码

假设左侧的固定宽度为200px，右侧的固定宽度为150px

```
body {
  min-width: 550px;
}

#container {
  padding-left: 200px; 
  padding-right: 150px;
}

#container .column {
  float: left;
}

#center {
  width: 100%;
}

#left {
  width: 200px; 
  margin-left: -100%;
  position: relative;
  right: 200px;
}

#right {
  width: 150px; 
  margin-right: -150px; 
}

#footer {
  clear: both;
}
```

#### 双飞翼布局

##### 1.DOM结构

```
<body>
  <div id="header"></div>
  <div id="container" class="column">
    <div id="center"></div>
  </div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
  <div id="footer"></div>
<body>
```

用`container`仅包裹住`center`，另外将`.column`类从`center`移至`container`上。

##### 2.CSS代码

```
#container {
  width: 100%;
}

.column {
  float: left;
}

#center {
  margin-left: 200px;
  margin-right: 150px;
}

#left {
  width: 200px; 
}

#right {
  width: 150px; 
}

#footer {
  clear: both;
}

```

`2020-1-12`

#### 2. CSS3有哪些新增的特性？

##### 边框圆角

border-radius

##### 盒子阴影

box-shadow

##### 文字阴影

text-shadow

##### 2d、3d变换

transform
rotate()
scale()
skew()
translate()

##### 过度动画

transition

##### 自定义动画

animation

#### 3.第3天在页面上隐藏元素的方法有什么？

- display: none
- opacity: 0
- visibility: hidden
- z-index: -9999999999999
- transform: scale(0)
- margin-left: -100%
- position: relative; left: -100%
- width: 0; height: 0;
- font-size: 0; 