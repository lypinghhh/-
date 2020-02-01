/**
 * 在当前作用于下，不管条件是否成立，都会进行变量提升
 * => 带var的只进行声明
 * => 带function的
 * 在老版本的浏览器渲染机制下，声明加定义
 * 但是为了迎合ES6中的块级作用域，新版浏览器对于（条件判断中的）函数
 * 不管条件是否成立，都只是先声明，不进行定义，类似于var
 * 转布尔 只有五个为false  ： 0 '' NAN NULL UNDEFINED 
 * =>  [] == ![]  true
 * 先右侧 数组取反   空数组变成 布尔 true 取反 false 
 * 对象和布尔比较 转数字 0 == 0  所以结果为 true
 */
/******************TEST01************** */

console.log(a);//undefined

if( 1==2){
    var a = 12;
}

console.log(a);//条件不成立  undefined


/******************TEST02************** */

console.log(a);//undefined
//在变量提升阶段，在全局作用域中声明了一个变量a,
//此时就已经把a当作属性赋值给了window了，只不过此时还没有给a赋值，默认值为undefined
if( 'a' in window){
    var a = 100;
}

console.log(a);//条件成立 100


/******************TEST03************** */
/**
 * 变量提升：无
 * =左边 不带var  不进行提升
 * 不加var  给window加属性
 * 匿名函数基本上都不进行变量提升
 */
f = function () { return true};//window.f = 
g = function () {return false};//window.g = 
//自执行函数执行 形成私有作用域
~function(){
    /**
     * 变量提升
     * 声明 function g;//私有变量 undefined
     * (老版本 声明加定义  私有变量g() true if 条件成立)
     */
    if(g() && [] == ![]){  //g()是undefined 不能执行 Uncaught TypeError: g is not a function 报错不继续执行
        f  = function() {return false};// 老版本  修改全局变量 f值 false
        function g() {return true};
    }
}();
console.log(f()); // 老版本 false
console.log(g()); // 老版本 false



/******************TEST05 -- 扩展 -坑 ************** */
/**
 * 变量提升
 * function fn;
 */
//console.log(fn) //undefined
if(1 === 1){
    console.log(fn)//=>函数本身 当条件成立，进入到判断体中
    //在es6中，他是一个块级作用域 
    //第一件事 并不是代码执行，而是类似于变量提升一样，先把fn声明定义，
    //此时判断体中，代码执行之前已经赋值
    //条件一旦成立，就进行赋值，类似快捷作用域，但是fn还是全局的
    function fn(){
        console.log('ok')
    }
}
//console.log(fn)
// ƒ fn(){
//     console.log('ok')
// }