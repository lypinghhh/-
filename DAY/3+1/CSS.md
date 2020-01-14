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

#### 3.在页面上隐藏元素的方法有什么？

- display: none
- opacity: 0
- visibility: hidden
- z-index: -9999999999999
- transform: scale(0)
- margin-left: -100%
- position: relative; left: -100%
- width: 0; height: 0;
- font-size: 0; 

#### 4.CSS选择器有哪些？哪些属性可以继承？

https://juejin.im/entry/5e1ddb206fb9a02fd30654cc/detail

 https://www.jianshu.com/p/fbfc6c751e34 

### 有继承性的属性：

​    1、字体系列属性

​    font：组合字体

​    font-family：规定元素的字体系列

​    font-weight：设置字体的粗细

​    font-size：设置字体的尺寸

​    font-style：定义字体的风格

​    font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为

​    大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

​    font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。

​    font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与

​    "font-size" 高度之间的比率被称为一个字体的 aspect 值。这

​    样就可以保持首选字体的 x-height。

   2、文本系列属性

​    text-indent：文本缩进

​    text-align：文本水平对齐

​    line-height：行高

​    word-spacing：增加或减少单词间的空白（即字间隔）

​    letter-spacing：增加或减少字符间的空白（字符间距）

​    text-transform：控制文本大小写

​    direction：规定文本的书写方向

​    color：文本颜色

   3、元素可见性：visibility

​    4、表格布局属性：caption-side、border-collapse、border-spacing、

​    empty-cells、table-layout

​    5、列表属性：list-style-type、list-style-image、list-style-position、list-style

​    6、生成内容属性：quotes

​    7、光标属性：cursor

​    8、页面样式属性：page、page-break-inside、windows、orphans

​    9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、

​    speech-rate、volume、voice-family、pitch、pitch-range、

​    stress、richness、、azimuth、elevation

### 所有元素可以继承的属性：

1、元素可见性：visibility、opacity    2、光标属性：cursor

###  内联元素可以继承的属性:

1、字体系列属性    2、除text-indent、text-align之外的文本系列属性

### 块级元素可以继承的属性:

1、text-indent、text-align

### 无继承的属性

​    1、display

​    2、文本属性：vertical-align：

​    text-decoration：

​    text-shadow：

​    white-space：

​    unicode-bidi：

​    3、盒子模型的属性:宽度、高度、内外边距、边框等

​    4、背景属性：背景图片、颜色、位置等

​    5、定位属性：浮动、清除浮动、定位position等

​    6、生成内容属性:content、counter-reset、counter-increment

​    7、轮廓样式属性:outline-style、outline-width、outline-color、outline

​    8、页面样式属性:size、page-break-before、page-break-after

继承中比较特殊的几点

1、a 标签的字体颜色不能被继承

1、h1-h6标签字体的大下也是不能被继承的

因为它们都有一个默认值