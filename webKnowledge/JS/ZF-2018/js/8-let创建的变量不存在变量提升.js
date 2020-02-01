/**
 * 在es6中基于let/const等方式创建变量或者函数
 * 不存在变量提升机制
 * 切断了 全局变量 和 window属性的映射机制
 * 需要先声明定义 再使用
 * 
 * es6中没有单独的创建函数的方式，
 * 都是创建变量 然后赋值为函数
 * 在相同的作用域中，基于let不能声明相同名字的变量
 * 
 * 作用域形成之后 代码执行之前，浏览器进行重复性检测，自上而下，查找当前作用域下变量，一旦有重复的， 直接抛出错误，代码不再执行
 * 虽然没有变量提升机制 ，但会进行语法检测，浏览器已经记住了当前作用域下有哪些变量，在定义前使用就会报错
 * 不管用什么方式在当前作用域下声明了变量，再次使用let创建都会报错
 */

//  let a = 12;
//  let fn = function(){

//  }

//  let fn2 = () =>{

//  }


/******************TEST01************** */
//console.log(a);//ReferenceError: a is not defined 引用错误
let a = 12;
console.log(window.a);//undefined
console.log(a);//12


/******************TEST02************** */
//全局作用域形成，代码就开始执行（无变量提升）
let a = 10,
    b = 10;
let fn = function (){
    //私有作用域
    console.log(a,b)// ReferenceError: a is not defined
    //ReferenceError: Cannot access 'a' before initialization
    let a = b = 20;//把全局中的b修改为 20
    console.log(a,b) //20,20
}
fn();
console.log(a,b) // 10,20 

/******************TEST03************** */

var a = 12;
var a = 13;
console.log(a);

let a = 12;
console.log(a)//代码中预先检测有错误 不进行输出 
let a = 13;//语法错误SyntaxError: Identifier 'a' has already been declared 
// let不允许重复声明相同的变量
console.log(a);


var a = 12;
let a = 13;//SyntaxError: Identifier 'a' has already been declared
console.log(a);


let a = 12;
var a = 13;//SyntaxError: Identifier 'a' has already been declared
console.log(a);


b = 12;
console.log(b);
a=2;
console.log(a)
let a = 13;//SyntaxError: Identifier 'a' has already been declared
console.log(a);