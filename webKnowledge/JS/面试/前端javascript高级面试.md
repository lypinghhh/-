> [揭秘一线互联网企业前端JavaScript高级面试](https://coding.imooc.com/class/190.html)

[TOC]







## ES6

- 开发环境已经普及使用
- 浏览器环境却支持不好（需要开发环境编译）
- 内容很多，重点了解常用语法
- 面试：开发环境的使用+重点语法的掌握

#### 1.ES6模块化如何使用，开发环境如何打包

- 模块化的基本语法
- 开发环境配置
- 关于js众多模块化标准

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c220fd584d21?w=527&amp;h=592&amp;f=png&amp;s=164059" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c230d54fe0fc?w=664&amp;h=473&amp;f=png&amp;s=151750" style="zoom: 50%;" />

export 如果是默认，则import时直接使用 文件名，如果export导出好几个，则导入时使用对象{}

使用的时候没区别

##### Babel

> 解析 停留在语法层面，对于模块化处理，import等引用是无能为力的

电脑有node环境，运行 npm init  生成package.json

```
npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest

```

创建.babelrc文件  是一个json文件

```
npm install --global babel-cli
babel --version
```

创建index.js

```
//运行
babel index.js
```

淘宝npm镜像  快速安装 https://npm.taobao.org

```
npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
  --registry=https://registry.npm.taobao.org
```

```
//.babelrc
{
	"presets":["es2015","latest"],
	"plugins":[]
}
```

全局安装 通过 管理员模式打开 控制台  -g

##### webpack

处理模块化

```
npm install webpack babel-loader --save-dev

```

配置根目录webpack.config.js

```
//符合node.js
moudle.exports = {
	entry:'./src/index.js',
	output:{
		path:__dirname,
		filename:'./build/bundle.js'
	},
	module:{
		rules: [{
			test:/\.js?$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		}]
	}
}
```



配置package.json中的scripts

添加start

```
"start":"webpack" 
```

运行npm start

在文件夹下面，起一个静态的服务

```
http-server -p 8881
```

没有安装的话,管理员权限

```
npm install http-server -g
```

##### rollup

small pieces 输出的更小

新建项目文件夹

```
npm init
npm i babel-core rollup rollup-plugin-node-resolve rollup-plugin-babel 
babel-plugin-external-helpers babel-preset-latest --save-dev
```

配置 .babelrc

```
//.babelrc
{
	"presets":["latest",{
		"es2015":{
		"modules":false
		}
	}],
	"plugins":["external-helpers"]
}
```

不关心引入的第三方插件的语法，只编译自己写的代码

配置根目录rollup.config.js

```
//rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'


export default{
	entry:'src/index.js',
	format:'umd',
	plugins:[
		resolve(),
		babel({
		exclude:'node_modules/**'
		})
	],
	dest:'build/bundle.js'
}
```

umd  既兼容直接链接，引入script，又兼容common.js ,兼容的规范，自己进行判断

配置package.json中的scripts

添加start

```
"start":"rollup -c roll.config.js" 
```

运行npm start

rollup功能单一，只能打包模块化，webpack功能强大

参考设计原则和《Linux/Unix设计思想》

工具要尽量功能单一，可集成，可扩展

wangEditor 用的gulp+rollup  打包出来没有冗余代码

##### 模块化

- 没有模块化
- AMD成为标准，require.js（也有CMD）
- 前端打包工具，node.js模块化可以被使用 Common.js
- ES6，统一现有所有模块化标准
- node.js积极支持，浏览器尚未统一
- 可以自造lib，但不要自造标准，没法兼容扩展



#### 2.Class和普通构造函数的区别

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c8a23f2e449f?w=753&amp;h=603&amp;f=png&amp;s=166862" style="zoom:50%;" />

###### JS构造函数

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c8ae06e86dc2?w=956&amp;h=608&amp;f=png&amp;s=260348" style="zoom:50%;" />

- 构造函数
- 原型扩展
- 实例化 执行实例的方法

原型里面添加方法

###### Class基本语法

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c902b9cb3e51?w=776&amp;h=647&amp;f=png&amp;s=225998" style="zoom:50%;" />

定义class，constructor构造器中是new实例中需传入参数立马执行的方法

class是一种函数

语法糖

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704c9634ff8c4d0?w=1112&amp;h=538&amp;f=png&amp;s=241696" style="zoom:50%;" />

所有的实例都有一个隐式的原型等于MathHandle的显式原型

m.__proto__ === MathHandle.prototype

###### 继承

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ca0f01420361?w=534&amp;h=642&amp;f=png&amp;s=207518" style="zoom:50%;" />

从抽象到具象，从高级到低级

把低级构造函数的显式原型 赋值 高级构造函数的一个实例，实现对高级的继承

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ca3b54e85b24?w=1214&amp;h=565&amp;f=png&amp;s=289188" style="zoom:50%;" />

super（必须）先执行 父级的构造器









#### 3.Promise的基本使用和原理

- callback hell 回调地狱

- promise语法

  ​	网络请求 异步

  <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cb41c7f976bf?w=967&amp;h=642&amp;f=png&amp;s=306322" style="zoom:50%;" />



改造

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cb8c98899264?w=995&amp;h=588&amp;f=png&amp;s=247699" style="zoom:50%;" />

使用

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cbb31768ddb7?w=981&amp;h=564&amp;f=png&amp;s=234232" style="zoom:50%;" />

.then(....,....)

第一个参数resolve函数 第二个参数reject函数

可以多个 then ，可以依次执行

#### 4.总结一下ES6的其他常用功能

###### let/const

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ccadd07b3749?w=746&amp;h=646&amp;f=png&amp;s=141099" style="zoom:50%;" />

###### 多行字符串/模板变量

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ccc1ba265c1c?w=963&amp;h=656&amp;f=png&amp;s=353851" style="zoom:50%;" />

###### 解构 -赋值

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ccc1ba265c1c?w=963&amp;h=656&amp;f=png&amp;s=353851" style="zoom:50%;" />

###### 块级作用域

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ccd0033606c2?w=1211&amp;h=613&amp;f=png&amp;s=321493" style="zoom:50%;" />

```
var obj = {a:100,b:200}
var item
for (item in obj){
console.log(item)
}
console.log(item)
```

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cdff769ee6a5?w=372&amp;h=166&amp;f=png&amp;s=67178" style="zoom:50%;" />

###### 函数默认参数

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704ccfed6ab0597?w=1107&amp;h=518&amp;f=png&amp;s=142883" style="zoom:50%;" />

###### 箭头函数 this

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cd33cc63f092?w=592&amp;h=630&amp;f=png&amp;s=223296" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704cd18365f1064?w=749&amp;h=643&amp;f=png&amp;s=245316" style="zoom:50%;" />

箭头函数this为绑定的对象

普通函数 this为创建的位置

## 异步

#### 1.什么是单线程，和异步有什么关系？

单线程：只有一个线程，同一时间只能做一件事情,两段js不能同时执行

原因：

避免DOM渲染的冲突

- 浏览器需要渲染DOM
- JS可以修改DOM结构
- JS执行的时候，浏览器DOM渲染会暂停
- 两段js也不能同时执行（都修改DOM就冲突了）
- webworker支持多线程，但是不能访问DOM

解决方案：异步

实现方式：eventloop



<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d02e580665fb?w=876&amp;h=643&amp;f=png&amp;s=296026" style="zoom:50%;" />



<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d0bee1b426d2?w=1042&amp;h=449&amp;f=png&amp;s=186362" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d0cffacb6fed?w=1018&amp;h=498&amp;f=png&amp;s=191290" style="zoom:50%;" />

先执行同步，异步的之后再说，先执行可以执行的

执行的顺序和代码的顺序不一致

BootCDN jquery 引入 

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d163979f6938?w=613&amp;h=292&amp;f=png&amp;s=97098" style="zoom:50%;" />

异步：

问题：

- 没按照书写方式执行，可读性差
- 异步执行时的函数，callback不容易模块化

#### 2.什么是 event-loop

- 事件轮询/事件循环：JS实现异步的具体解决方案
- 同步代码，直接执行
- 异步函数先放在异步队列中（何时？被放入异步队列）
- 轮询的过程：待同步函数执行完毕，轮询执行 异步队列的函数

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d2117777925b?w=893&amp;h=594&amp;f=png&amp;s=239445" style="zoom:33%;" />

异步函数 是条件达到之后，再放到异步队列中

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d2501ab3dbe8?w=1073&amp;h=625&amp;f=png&amp;s=356294" style="zoom:50%;" />

3 2 1

轮询监视异步队列是否有可执行的函数

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d2b059a3acd3?w=629&amp;h=644&amp;f=png&amp;s=214468" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d2d205ee1ee1?w=879&amp;h=662&amp;f=png&amp;s=214275" style="zoom:50%;" />

#### 3.是否用过jQuery的Deferred

（待）

#### 4.Promise的基本使用和原理

- 基本语法

  <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d47b550ef946?w=692&amp;h=675&amp;f=png&amp;s=279680" style="zoom:50%;" />

  可以直接在浏览器中进行调试：

  <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d4b82fa74c20?w=729&amp;h=133&amp;f=png&amp;s=52884" style="zoom:50%;" />

  www.bootcdn.cn bluebird 完全支持promise标准 复制 <script>

  控制台打印，可以看到源码

- 异常捕获

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d51699cbf6f7?w=904&amp;h=533&amp;f=png&amp;s=242800" style="zoom:50%;" />

catch捕获异常：

 1. 程序语法报错

    ```
    throw new Error('自定义错误')
    ```

 2. 业务逻辑中的reject (传入字符串)可以被catch捕获到

    <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d51699cbf6f7?w=904&amp;h=533&amp;f=png&amp;s=242800" style="zoom:50%;" />

- 多个串联-链式执行的好处

  基本ajax需要写多层callback

  上一个.then要返回参数给下一个then 按顺序加载

  ajax 请求中，响应的请求需要有先后顺序

  <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d5f688a668a8?w=1028&amp;h=640&amp;f=png&amp;s=409908" style="zoom:50%;" />

- Promise.all 和Promise.race,

  前者是全部完成，才能继续下面的操作，后者是只要有一个完成，就可以继续下面的操作

  - 全局的构造函数，接收数组

    <img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d6550f640f5c?w=1072&amp;h=655&amp;f=png&amp;s=420815" style="zoom:50%;" />

- Promise标准

  - 状态变化

    1. 三种状态：

       - pending
       - fulfilled
       - rejected

       初始状态是pending,pending 只能变为后两种状态之一，状态变化不可逆

  - then

    ​	Promise实力必须实现then这个方法

    ​	then()必须可以接受两个函数作为参数

    ​	then()返回的必须是promise实例

    若then()没有明文返回实例，则是本身promise，可以继续链式操作

    若返回了别的promise实例，则是串联操作

#### 5.async/await（ES7）(和Promise的区别、联系)

koa 实现

- then只是将callback拆分了，传的依然是函数，只是改成链式，而不是嵌套

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d7f889fefd10?w=675&amp;h=570&amp;f=png&amp;s=291640" style="zoom:50%;" />

- async/await是最直接的同步写法（异步的编写和执行顺序不一致的终极解决方案）

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d8150588418f?w=909&amp;h=505&amp;f=png&amp;s=297266" style="zoom:50%;" />



1. 使用await,函数必须用async标识
2. await后面跟的是一个Promise实例
3. 需要babel-polyfill

<img src="https://user-gold-cdn.xitu.io/2020/2/16/1704d8150588418f?w=909&amp;h=505&amp;f=png&amp;s=297266" style="zoom:50%;" />

```
npm i --save-dev babel-polyfill 
```

```
//...js
import 'babel-polyfill'
```



#### 6.总结一下当前JS解决异步的方案

1. jQuery Deferred
2. Promise
3. Async/Await
4. Generator

