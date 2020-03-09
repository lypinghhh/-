> 
>
> 拿到面试题，第一时间看到 -> 考点 -> 题目 
>
> eg:
>
> ​	JS变量类型
>
> ​	强制类型转换
>
> ​	页面加载过程
>
> ​	JS作用域
>
> ​	性能、体验优化in
>
> ​	JS异步
>
> 高效学习三部曲：找准知识体系；刻意训练；及时反馈！

- W3C标准
- ECMA 262 标准

[TOC]



### 变量类型和计算

##### 值类型和引用类型



<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057b7a25acf3d7?w=583&amp;h=440&amp;f=png&amp;s=154129" style="zoom: 50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057ba6de8878ae?w=1218&amp;h=182&amp;f=png&amp;s=94600" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057b955ac379aa?w=653&amp;h=414&amp;f=png&amp;s=184504" style="zoom: 50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057bc28456fb73?w=1205&amp;h=385&amp;f=png&amp;s=255637" style="zoom:50%;" />

##### 堆栈模型

值类型在栈中存储，

引用类型 栈中只存储内存地址，在堆中存储

（对象可能会比较大，不利于存储和复制，直接赋值会比较慢，性能）

在堆中存储，考虑性能和存储的问题，内存的空间和CPU耗时

计算机变量存储中，栈和堆同时存在，栈从上往下存储，堆从下往上存储

const定义变量必须赋值

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057c5c09cddd3d?w=648&amp;h=430&amp;f=png&amp;s=201447" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057c832f335025?w=1276&amp;h=513&amp;f=png&amp;s=378872" style="zoom:50%;" />

也可以把函数作为第三种类型

##### typeof运算符

- 识别所有的值类型
- 识别函数
- 判断是不是引用类型（不可再细分，数组/对象/null，没办法进一步识别）

```
http-server -p 8001
```

深拷贝针对对象或数组，递归一层一层找到值类型进行拷贝

##### 变量计算

1. ###### 字符串拼接

   <img src="https://user-gold-cdn.xitu.io/2020/2/18/17057cc85c1f969c?w=872&amp;h=187&amp;f=png&amp;s=142755" style="zoom:50%;" />

只要有字符串，加法就变成了字符串拼接

2. ###### ==运算符

   <img src="https://user-gold-cdn.xitu.io/2020/2/18/17057ce072618588?w=717&amp;h=307&amp;f=png&amp;s=156565" style="zoom:50%;" />

只有一个地方用两等  ==null

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057d09568b6fdb?w=1234&amp;h=380&amp;f=png&amp;s=246123" style="zoom:50%;" />

3. ###### if语句和逻辑运算

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057d6e6bc59b1b?w=670&amp;h=166&amp;f=png&amp;s=76328" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057d816d61423b?w=1067&amp;h=430&amp;f=png&amp;s=266694" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057d8d08b14073?w=740&amp;h=633&amp;f=png&amp;s=241898" style="zoom:33%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057d9cc72c79b2?w=860&amp;h=183&amp;f=png&amp;s=161296" style="zoom:50%;" />

与运算符 当遇到 falsely变量就返回,或运算符 当遇到 truely变量就返回

#### 1.typeof能判断哪些类型

- 识别所有值类型
- 识别函数
- 判断是否是引用类型（不可再细分）

#### 2.何时使用 === 何时使用 ==

一般都使用 ===

除了判断 null 或 undefined 时 ，使用两等

#### 3.值类型和引用类型的区别

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17057e07b75338f6?w=884&amp;h=364&amp;f=png&amp;s=202361" style="zoom:50%;" />

#### 4.手写深拷贝

- 注意判断值类型和引用类型，如果是值类型或者Null则直接返回，引用类型继续遍历递归
- 注意判断是数组还是对象
- 递归

```javascript
function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        //obj是null，或者不是对象和数组，直接返回
        return obj;
    }
    //初始化返回结果
    let result ;
    if(obj instanceof Array){
        return [];

    }else{
        return {}
    }

    for(let key in obj){
        //保证不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result;
}
```

### 原型和原型链

js基于原型继承的语言

##### class和继承

class

- constructor
- 属性
- 方法 

```
class Student {
	constructor(name,number){
		//this指向正在构建的实例
		this.name = name;
		this,number = number;
		//也可以赋默认值
	}
	sayHi(){
		console.log('hdksghks')
	}
}

//通过类 new 对象/实例
const xialuo = new Student('夏洛'，100)
```

继承

- extends
- super
- 扩展或重写方法

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705834e5dfa2c0f?w=866&amp;h=611&amp;f=png&amp;s=254310" style="zoom:50%;" />

多个子类才有意义，子类通过super把属性传给父类

##### 类型判断Instanceof

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058392ec057aea?w=859&amp;h=409&amp;f=png&amp;s=260210" style="zoom:50%;" />

instanceof判断前者是否由后者构建出来

##### 原型和原型链

###### 原型

隐式原型 __proto__

显式原型 prototype 

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170583c99fd589d8?w=1108&amp;h=521&amp;f=png&amp;s=381599" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170583da2ca93c08?w=600&amp;h=164&amp;f=png&amp;s=88944" style="zoom:50%;" />

![](https://user-gold-cdn.xitu.io/2020/2/18/17058408206cd154?w=661&h=237&f=png&s=106742)

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058419f54edb8b?w=911&amp;h=475&amp;f=png&amp;s=199109" style="zoom:50%;" />



<img src="https://user-gold-cdn.xitu.io/2020/2/18/170583e5f353d5c0?w=751&amp;h=79&amp;f=png&amp;s=43162" style="zoom:50%;" />

当作隐式原型的方法来执行，name 是没有的

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058b3b907f6849?w=734&amp;h=458&amp;f=png&amp;s=207486" style="zoom:50%;" />

- 每个class都有显式原型prototype
-  每个实例都有隐式原型__proto__,指向class的显示原型
- 实例的__proto__指向对应class的prototype(方法存在此处)

###### 基于原型的执行机制

- 获取属性xialuo.name或执行方法xialuo.sayhi()时
- 现在自身属性和方法寻找
- 如果找不到则自动到隐式原型__proto__中寻找（class的显示原型中存放方法）

###### 原型链

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058483f05cf846?w=1273&amp;h=151&amp;f=png&amp;s=191987" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705849781bec26f?w=990&amp;h=553&amp;f=png&amp;s=270264" style="zoom:50%;" />

隐形原型向上查找，是否有方法

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170584c52c53e532?w=714&amp;h=339&amp;f=png&amp;s=152412" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170584dfb6baf2af?w=1071&amp;h=616&amp;f=png&amp;s=323054" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170584f157152d30?w=612&amp;h=176&amp;f=png&amp;s=87053" style="zoom:50%;" />

函数存在于原型上

instanceof

左侧的隐式原型 向上查找 是否能找到右侧的显式原型

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705852433d69032?w=1100&amp;h=477&amp;f=png&amp;s=312939" style="zoom:50%;" />

#### 1.如何判断一个变量是不是数组？

- a instanceof Array

#### 2.手写一个简易的JQuery，考虑插件和扩展性

```javascript
class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0;i<length;i++){
            this[i] = result[i]
        }
        this.length = length
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0;i < this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type,fn){
        return this.each(elem =>{
            elem.addEventListener(type,fn,false)
        })
    }
    //阔以扩展很多DOM操作的API

}


// 使用，控制台
// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem)=>console.log(elem.nameNode))
// $p.on('click',()=> alert('clicked'))




//插件
jQuery.prototype.dialog = function(){
    alert(info)
}

//复写 “造轮子”
 
class myJQuery extends jQuery {
    constructor(selector){
        super(selector)
    }
    //扩展自己的方法
    addClass(className){

    }
    style(data){
        
    }
}
```



#### 3.class的原型本质，如何理解

- 原型和原型链的图示
- 属性和方法的执行规则

### 作用域和闭包

##### 作用域和自由变量

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170587031f24dc4f?w=584&amp;h=623&amp;f=png&amp;s=171030" style="zoom:50%;" />

作用域：变量合法使用的范围

- 全局作用域
- 函数作用域
- 块级作用域（ES6） if for while{}

自由变量

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058726ea9ad07f?w=914&amp;h=479&amp;f=png&amp;s=262415" style="zoom:50%;" />

##### 闭包

函数定义的地方和执行的地方不一样

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705874b2537bd21?w=747&amp;h=472&amp;f=png&amp;s=93064" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058752ef5fee8e?w=992&amp;h=587&amp;f=png&amp;s=305335" style="zoom:50%;" />

闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！

##### this

this 取值是在函数执行的的时候确定！！！！！！

- 作为普通函数  -- window
- 使用call,apply,bind  --绑定传入的对象

- 作为对象方法被调用，-- this指向对象
- 在class方法中调用 --- 绑定实例
- 箭头函数 ，取上级作用域的this

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705880df8007cd3?w=663&amp;h=529&amp;f=png&amp;s=193014" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/18/1705883e59c7dcc0?w=1034&h=578&f=png&s=335109)

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705883e59c7dcc0?w=1034&amp;h=578&amp;f=png&amp;s=335109" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705884f35f0b520?w=629&amp;h=572&amp;f=png&amp;s=221732" style="zoom:50%;" />

#### 1.this的不同应用场景，如何取值

#### 2.手写bind函数

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705891867dd9328?w=553&amp;h=304&amp;f=png&amp;s=119183" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/1705888b46cc2f80?w=952&amp;h=599&amp;f=png&amp;s=411060" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170589dd9de7e1eb?w=610&amp;h=89&amp;f=png&amp;s=54375" style="zoom:50%;" />



#### 3.实际开发中闭包的应用场景，举例说明

- 隐藏数据

- 如做一个简单的cache工具

  <img src="https://user-gold-cdn.xitu.io/2020/2/18/17058aa13ca7acb0?w=748&amp;h=502&amp;f=png&amp;s=196663" style="zoom:50%;" />

#### 4.创建 10个a标签，点击的时候弹出来对应的需序号

<img src="https://user-gold-cdn.xitu.io/2020/2/18/170586ed41a29337?w=870&amp;h=492&amp;f=png&amp;s=277419" style="zoom:50%;" />

弹出的都是10，

先创建所有标签，后面点击时再绑定事件时已经i为10 ，i为全局作用域，自由变量往上找

事件点击时才执行

改进：

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058adbf053c801?w=735&amp;h=332&amp;f=png&amp;s=155643" style="zoom:50%;" />let i 形成for块级作用域,每次产生一个新的块

不会立即执行的函数 引用自由变量，可能会被外面改变值

### 异步和单线程

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705de3dcda7d1ad?w=844&amp;h=296&amp;f=png&amp;s=156526" style="zoom:50%;" />

#### 1.同步和异步的区别是什么？

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ddc697d392ba?w=724&amp;h=470&amp;f=png&amp;s=205564" style="zoom:50%;" />



#### 2.手写用Promise加载一张图片

#### 3.前端使用异步的场景有哪些？

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd339051b053?w=730&amp;h=384&amp;f=png&amp;s=152707" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd3f568398f5?w=950&amp;h=489&amp;f=png&amp;s=223581" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd4e4668c1f8?w=807&amp;h=530&amp;f=png&amp;s=294797" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd50de99555e?w=1105&amp;h=457&amp;f=png&amp;s=347160" style="zoom:50%;" />

callback hell

<img src="C:\Users\lenovo2017lyp\AppData\Roaming\Typora\typora-user-images\1582122304310.png" alt="1582122304310" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd8c2ee8af79?w=763&amp;h=615&amp;f=png&amp;s=205323" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dd950a12484a?w=603&amp;h=625&amp;f=png&amp;s=361634" style="zoom:50%;" />

### ajax

- XMLHttpRequest

  true表示异步，一般用===

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058f614fdbf7b0?w=749&amp;h=546&amp;f=png&amp;s=251704" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/18/17058ebdc28be820?w=679&h=630&f=png&s=334755)<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058f614fdbf7b0?w=749&amp;h=546&amp;f=png&amp;s=251704" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/18/17058ebdc28be820?w=679&h=630&f=png&s=334755)

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058ecc72268ad1?w=1054&amp;h=539&amp;f=png&amp;s=381470" style="zoom:50%;" />

- 状态码

301: 永久重定向  跳到b

302: 临时重定向

304：资源未改变

404：请求地址不存在，或有错误

403：没有权限

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058f0fb1d30ab8?w=940&amp;h=450&amp;f=png&amp;s=252607" style="zoom:50%;" />

- 跨域：同源策略，跨域解决方案

  1. JSONP
  2. CORS(服务端支持)

  ###### 同源策略

  浏览器要求的

  <img src="https://user-gold-cdn.xitu.io/2020/2/18/17058f969cec9221?w=1087&amp;h=419&amp;f=png&amp;s=289140" style="zoom:50%;" />

server没有同源策略，可以发起，搜索引擎爬虫可由服务端发起，进行跨域攻击

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058fbb324646c3?w=940&amp;h=485&amp;f=png&amp;s=267372" style="zoom:50%;" />

服务器端可能会做图片防盗链，限制只能本域名访问

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17058ffc23ac9f58?w=932&amp;h=478&amp;f=png&amp;s=284520" style="zoom:50%;" />

###### 跨域

<img src="https://user-gold-cdn.xitu.io/2020/2/18/17059013ae2a8cc0?w=1056&amp;h=372&amp;f=png&amp;s=214803" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b5bc63d50fa1?w=1076&amp;h=493&amp;f=png&amp;s=300806" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705b5ce3f7331e5?w=1043&h=468&f=png&s=262451)

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b5bc63d50fa1?w=1076&amp;h=493&amp;f=png&amp;s=300806" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705b5ce3f7331e5?w=1043&h=468&f=png&s=262451)

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b5e99253e053?w=1004&amp;h=498&amp;f=png&amp;s=293588" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705b5f8096ecefc?w=567&h=184&f=png&s=46883)

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b5f8096ecefc?w=567&amp;h=184&amp;f=png&amp;s=46883" style="zoom:50%;" />

script可以实现跨域，server端也可以动态拼接信息 返回不同的内容

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b60f89a14eec?w=868&amp;h=40&amp;f=png&amp;s=46244" style="zoom:50%;" />

script可以动态插进入，DOM操作插入 标签

JSONP使用的是script的标签

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b63b7d9ad885?w=1129&amp;h=590&amp;f=png&amp;s=345047" style="zoom:50%;" />



###### CORS

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b65c2ec20e1d?w=1281&amp;h=520&amp;f=png&amp;s=516287" style="zoom:50%;" />

服务器端的操作

#### 1.手写一个简易的 ajax

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b66facc2dcfa?w=771&amp;h=632&amp;f=png&amp;s=327982" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b7bdf034373e?w=809&amp;h=570&amp;f=png&amp;s=307307" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b7cfee90dac6?w=635&amp;h=156&amp;f=png&amp;s=80686" style="zoom:50%;" />

#### 2.跨域的常用实现方式

- JSONP
- CORS

##### AJAX的常用插件

1. jq  callback   不需要链式操作的情况可以使用无所谓，不会触发层次深的回调地狱

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b7fb68bb9c8c?w=887&amp;h=605&amp;f=png&amp;s=280648" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b80353fd447c?w=902&amp;h=397&amp;f=png&amp;s=140768" style="zoom:50%;" />

2. fetch

   新的api ,浏览器的兼容性不是很好

   默认返回promise

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b846865a9467?w=1221&amp;h=431&amp;f=png&amp;s=512073" style="zoom:50%;" />

3. axios

   支持浏览器 和node.js 对 xmlrs的封装，支持promise

### 存储

##### cookie

1. 本身用于浏览器和server通讯，http请求的一部分
2. 被借用到本地存储中来，当时还没有后两种本地存储（HTML5）
3. 可用document.cookie = "..."来修改
4. 字符串的形式，分号分隔，每一部分都是 key = value，每次赋值一个，追加的形式

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b92e0b1dfd2e?w=483&amp;h=330&amp;f=png&amp;s=112265" style="zoom:50%;" />

不同key追加，同一个key覆盖登陆的功能是通过cookie实现的

可以做本地存储，前端对其进行赋值，cookie不清除，信息一直保存，刷新也在

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b9c0802bb582?w=948&amp;h=484&amp;f=png&amp;s=257722" style="zoom:50%;" />

##### local session

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b9d7c10cee06?w=939&amp;h=496&amp;f=png&amp;s=274666" style="zoom:50%;" />





<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705b9e5869e07c4?w=536&amp;h=155&amp;f=png&amp;s=50801" style="zoom:50%;" />

存储的是字符串，会强制类型转换

自己实现存储缓存的功能，也是实现 set  get

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ba095daa02be?w=1007&amp;h=475&amp;f=png&amp;s=303974" style="zoom:50%;" />

sessionstorage存在于用户活跃期间，连接期间

#### 1.描述 cookie localStorage sessionStorage的区别

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ba120cb65469?w=1221&amp;h=495&amp;f=png&amp;s=292475" style="zoom:50%;" />

### 开发环境

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ba48f3ed67b3?w=866&amp;h=459&amp;f=png&amp;s=234868" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705ba6b03692f45?w=906&h=459&f=png&s=144641)

![](https://user-gold-cdn.xitu.io/2020/2/19/1705ba6b03692f45?w=906&h=459&f=png&s=144641)

##### git

分布式版本管理工具

- 大型项目多人协作开发
- 存储到服务端，防止丢失
- 版本修改

码云  gitignore node   mit

https协议 提交的时候需要输用户名 密码

ssh 生成ssh key

```
//查看当前状态
git status
//查看分支
git branch
//查看更改，新增的不包括
git diff  (文件名可指定)
//提交 (可指定也可提交全部)
git add .
//生成一条记录
git commit -m ""
//配置 提交的用户名和邮箱,以便多人协作查看提交
git config user.name wfp
git config user.email wfp@imooc.com
//查看提交记录
git log
//查看某次提交
git show id(log中的)
//在commit之前  撤销某文件 或者 所有文件的修改 
git checkout .
//push到服务端
git push origin master
//pull拉最新的代码
git pull origin master
//切换分支
git checkout -b feature-login 
//合并分支
git checkout master
//本地没有分支，把所有的分支拉下来
git fetch
//合并前，先切换到子分支，拉最新的下来，确保最新，再回到主分支进行合并
git merge  子分支
//提交远端
git push origin master
//若存在冲突 则vscode中进行修改 重新merge  add commit push
//若写错了分支，把当前修改搁到一边，让错误修改的分支重新干净起来
git stash
//切换分支
//把搁置的修改释放出来
git stash pop
```

查看当前修改 或者返回撤销

##### chrome调试工具

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705bca6f6a1b759?w=809&amp;h=527&amp;f=png&amp;s=196028" style="zoom:50%;" />

1. DOM结构的展示 元素 样式 事件 盒模型   计算的最终样式

2. 打印东西

3. storage  本地存储  cookie
4. 请求 xhr  ajax 

5. sources  源码  debugger
6. 查看内存泄露  高级

##### 抓包

https端口默认 443





<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705bde5d967d964?w=870&amp;h=492&amp;f=png&amp;s=209286" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705bded25a4f63c?w=724&amp;h=476&amp;f=png&amp;s=179079" style="zoom:50%;" />



<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705be01ded89a7e?w=797&amp;h=491&amp;f=png&amp;s=158535" style="zoom:50%;" />

##### webpack/babel

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705bf338a4a30ff?w=822&amp;h=476&amp;f=png&amp;s=221145" style="zoom:50%;" />

缓存，让代码更多的命中缓存，网页更快

```
npm init -y
npm install webpack webpack-cli -D 
npm install html-webpack-plugin -D  //解析html
npm install webpack-dev-server -D //启动服务

npm install @babel/core @babel/preset-env babel-loader  -D
```

//webpack.config.js  node.js

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705c524d758a6db?w=772&amp;h=338&amp;f=png&amp;s=155511" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705c52b815deebc?w=952&amp;h=609&amp;f=png&amp;s=255552" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705c5767ca15878?w=942&amp;h=553&amp;f=png&amp;s=282828" style="zoom:50%;" />

```
"dev":"webpack-dev-server"
```

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ca23a88d6e54?w=804&amp;h=171&amp;f=png&amp;s=64321" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705ca3313e41f32?w=967&h=660&f=png&s=338970)

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ca3313e41f32?w=967&amp;h=660&amp;f=png&amp;s=338970" style="zoom:50%;" />

###### ES6 moudle

一个一个导出，解构赋值 导入

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705caa21c51088d?w=550&amp;h=311&amp;f=png&amp;s=93857" style="zoom:50%;" />

多个导出

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705ca9d30308f12?w=419&amp;h=459&amp;f=png&amp;s=95658" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cab2d56b20ad?w=417&amp;h=188&amp;f=png&amp;s=48763" style="zoom:50%;" />

使用default时，只能导出一个，默认，不能使用解构赋值，只能调用内部属性、方法

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cab2d56b20ad?w=417&amp;h=188&amp;f=png&amp;s=48763" style="zoom:50%;" />

###### webpack配置生产环境

webpack.prod.js

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cb22a2f8594a?w=998&amp;h=632&amp;f=png&amp;s=335200" style="zoom:50%;" />![](https://user-gold-cdn.xitu.io/2020/2/19/1705cb2ca6b33494?w=969&h=652&f=png&s=391981)

![](https://user-gold-cdn.xitu.io/2020/2/19/1705cb2ca6b33494?w=969&h=652&f=png&s=391981)

##### linux

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cd2e0e413871?w=1081&amp;h=502&amp;f=png&amp;s=284327" style="zoom:50%;" />

```
//连接，本地登陆到线上机器
ssh 用户名@ip地址
//新建文件夹

//查看文件夹
ls  看平铺
//显示隐藏文件 .babelrc
ls -a
//看列表
ll
//清屏
clear
//创建文件夹
mkdir abc
//删除文件夹  remove -r递归/f强制
rm -rf abc
//删除文件
rm abc
//去目录
cd 
//修改文件名
mv 旧文件名 新文件名
//移动 输入时 tab键自动补全
mv 旧文件 ../上级目录文件名
//拷贝
cp  原件  副本
//新建文件
touch d.js
//进入vim编辑器 创建文件
vi d.js
// i insert模式 可以输入 
esc
:w 写入保存
:q 退出
:q!强制退出
//回到上级目录
cd ..
//查看  打印到控制台上
cat 文件名
//打印前几行
head
//打印末几行
tail
//查找文件内容 
grep "内容"  文件
//教程
vimtutor
```

### 运行环境

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cee180bd2ebb?w=925&amp;h=487&amp;f=png&amp;s=262829" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cef5ab84eeeb?w=829&amp;h=447&amp;f=png&amp;s=158190" style="zoom:50%;" />



##### 网页加载过程

###### 加载资源的形式

1. html代码
2. 媒体文件，如图片、视频等
3. javascript css

###### 加载资源的过程

1. DNS解析：域名-> IP地址

域名解析服务，容易记，ip地址在不同区域内不一样，在不同地域解析不同的ip地址

2. 浏览器根据ip地址向服务器发起http请求
3. 服务器处理Http请求，并返回给浏览器

###### 渲染页面的过程

1. 根据HTML代码生成DOM Tree
2. 根据CSS代码生成 CSSOM
3. 将DOM Tree 和 CSSOM 整合形成 Render Tree

文本代码 转化为 结构模型

js进程和渲染进程是共用一个线程的，因为js有可能会改变DOM结构

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705cfd3c0b50092?w=1079&amp;h=495&amp;f=png&amp;s=278989" style="zoom:50%;" />

#### 1.从输入url到渲染出页面的整个过程

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d0a7f8e48f26?w=981&amp;h=383&amp;f=png&amp;s=237568" style="zoom:50%;" />

#### 2. window.onload和DOMContentLoaded的区别

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d07236a542cd?w=1124&amp;h=464&amp;f=png&amp;s=321104" style="zoom:50%;" />

js操作一般都是DOM的操作

#### 3.为何建议把css放在Head中？

否则 页面的样式 先默认 后再重新渲染

建议css代码在DOM树生成之前就搞定，整合成render tree

#### 4.为何建议把js放在body最后？

遇到js要暂停渲燃，页面渲染时间比较长

把先能渲染出来东西先渲染出来

img src不会阻塞渲染过程

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d05a4c80a79c?w=512&amp;h=395&amp;f=png&amp;s=153135" style="zoom:50%;" />

##### 性能优化

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d1079c55d4b3?w=992&amp;h=501&amp;f=png&amp;s=270134" style="zoom:50%;" />

每个标签页一个进程

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d128ec86ee98?w=858&amp;h=391&amp;f=png&amp;s=145995" style="zoom:50%;" />

服务器端gzip压缩

webpack 生产环境打包，合并代码，访问次数少

雪碧图

cdn根据区域做服务器的处理

<img src="C:\Users\lenovo2017lyp\AppData\Roaming\Typora\typora-user-images\1582109727333.png" alt="1582109727333" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d17373e56712?w=925&amp;h=501&amp;f=png&amp;s=270700" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d182abd940d5?w=933&amp;h=480&amp;f=png&amp;s=244822" style="zoom:50%;" />

示例：

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3808b05558c?w=723&amp;h=475&amp;f=png&amp;s=251042" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3880cc51886?w=824&amp;h=630&amp;f=png&amp;s=292338" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3902dcb098d?w=948&amp;h=469&amp;f=png&amp;s=252837" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3a471ec8b50?w=983&amp;h=616&amp;f=png&amp;s=488675" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3b6bb61bd5c?w=1071&amp;h=472&amp;f=png&amp;s=277666" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3c7097cbdeb?w=920&amp;h=352&amp;f=png&amp;s=261468" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3cd2117d3c0?w=1035&amp;h=548&amp;f=png&amp;s=386095" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3d48b74e7a5?w=952&amp;h=607&amp;f=png&amp;s=411563" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d3d719dfe1aa?w=937&amp;h=413&amp;f=png&amp;s=260092" style="zoom:50%;" />

###### 防抖

```javascript
const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout( () => {
//         //模拟触发chage事件
//         console.log(input1.value)
//         //清空定时器
//         timer = null
//     },500)
    
// })


function debounce(fn,delay = 500){
    //timer是闭包中的
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout( () => {
            //debounce 可能会传入参数 
            //fn()
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

input1.addEventListener('keyup',debounce( function(){

},1000 ))

```

###### 节流

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705d5f901c2f34e?w=923&amp;h=474&amp;f=png&amp;s=276759" style="zoom:50%;" />

```
function throttle(fn,delay = 100){
    let timer = null;
    return function (){
        if(timer){
            return
        }
        timer = setTimeout(() =>{
            //传递参数，例如此处的e
            fn.apply(this,arguments)
            timer = null
        },delay )
    }
}

div1.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
}))
```

##### 安全

###### XSS跨站请求攻击

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705dadfaecda027?w=1089&amp;h=503&amp;f=png&amp;s=315433" style="zoom:50%;" />

<img src="C:\Users\lenovo2017lyp\AppData\Roaming\Typora\typora-user-images\1582119719736.png" alt="1582119719736" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705db03e5ec5ec1?w=834&amp;h=183&amp;f=png&amp;s=93611" style="zoom:50%;" />

npm  xss  可以帮忙替换 xss攻击的预防

###### XSRF跨站请求伪造

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705db2caf909558?w=923&amp;h=472&amp;f=png&amp;s=231744" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705db342fb34b12?w=959&amp;h=478&amp;f=png&amp;s=247234" style="zoom:50%;" />

此时你在登陆着购物网站，会携带自己的登陆信息 cookie就进行了购买



post进行跨域需要server端配合

<img src="https://user-gold-cdn.xitu.io/2020/2/19/1705db342fb34b12?w=959&amp;h=478&amp;f=png&amp;s=247234" style="zoom:50%;" />

#### 1.常见的web前端攻击方式有哪些？

### web API

- JS基础知识，规定语法（ECMA 262标准）
- JS Web API ,网页操作的API(W3C标准)

前者是后者的基础，两者结合才能真正实际应用

##### DOM

1. ###### DOM本质

   xml 可扩展标记语言->html 特定xml

   本身是从html语言解析出来的一棵树型结构

2. ###### DOM节点操作

   1. 获取DOM节点

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706a306af856ab6?w=1278&amp;h=516&amp;f=png&amp;s=462063" style="zoom:50%;" />

   ###### attribute

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706aa9dc6142553?w=991&amp;h=477&amp;f=png&amp;s=396313" style="zoom:50%;" />

   作用到节点的属性上去

   ###### property

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706aa724ee49b55?w=880&amp;h=594&amp;f=png&amp;s=479784" style="zoom:50%;" />

   js获取元素并进行修改，修改的是js变量的属性，不会对标签产生影响

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706ab233f4bb92f?w=972&amp;h=439&amp;f=png&amp;s=271261" style="zoom:50%;" />

3. ###### DOM结构操作

   - 新增/插入节点
   - 获取子元素列表，获取父元素
   - 删除子元素

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b2d67e42d7a8?w=936&amp;h=534&amp;f=png&amp;s=444252" style="zoom:50%;" />

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b3b6a942e74e?w=933&amp;h=492&amp;f=png&amp;s=395011" style="zoom:50%;" />

   <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b40297510f99?w=1002&amp;h=374&amp;f=png&amp;s=238400" style="zoom:50%;" />

4. ###### DOM性能

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b412a562a7a4?w=845&amp;h=450&amp;f=png&amp;s=222748" style="zoom:50%;" />

##### <img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b412a562a7a4?w=845&amp;h=450&amp;f=png&amp;s=222748" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b443907abae8?w=714&amp;h=620&amp;f=png&amp;s=366930" style="zoom:50%;" />

先建片段，是一个临时区域

##### BOM

###### navigator

###### screen

###### location

###### history

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b4ccf740153b?w=893&amp;h=580&amp;f=png&amp;s=366430" style="zoom:50%;" />
<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b4e5dd77f932?w=956&amp;h=577&amp;f=png&amp;s=388187" style="zoom:50%;" />

#### 1.如何识别浏览器的类型

#### 2.分析拆解url各个部分

### 事件绑定

###### 事件绑定

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b5981552c6b3?w=900&amp;h=413&amp;f=png&amp;s=193970" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b5a373b88708?w=783&amp;h=569&amp;f=png&amp;s=312130" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b5b9b192fd50?w=750&amp;h=373&amp;f=png&amp;s=204729" style="zoom:50%;" />

###### 事件冒泡

event.target

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b663d11c4363?w=1309&amp;h=603&amp;f=png&amp;s=437327" style="zoom:50%;" />

###### 事件代理

元素太多，不好绑定的东西，绑定到他的父元素上，进行事件代理，判断触发元素

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b6aed94c3587?w=797&amp;h=603&amp;f=png&amp;s=347947" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b6e9841a1c6b?w=708&amp;h=482&amp;f=png&amp;s=161993" style="zoom:50%;" />

#### 1.编写一个通用的事件监听函数

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b6f6767340c9?w=518&amp;h=606&amp;f=png&amp;s=228772" style="zoom:50%;" />

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b7a7028a746d?w=626&amp;h=369&amp;f=png&amp;s=144835" style="zoom:50%;" />

箭头函数只能绑定上级作用域

#### 2.描述事件冒泡的流程

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b7f0a2878383?w=956&amp;h=473&amp;f=png&amp;s=258063" style="zoom:50%;" />

#### 3.无限下拉的图片列表，如何监听每个图片的点击

<img src="https://user-gold-cdn.xitu.io/2020/2/22/1706b7f6ad8c16c7?w=1087&amp;h=521&amp;f=png&amp;s=316502" style="zoom:50%;" />

