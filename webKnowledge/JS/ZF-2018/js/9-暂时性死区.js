/**
 * 
 */


 var a = 12;
 if(true){
     console.log(a);//ReferenceError: a is not defined
     let a = 13;//基于let创建变量，会把{} 当成块级私有作用域
    //类似于函数的私有作用域，也是重新检测语法规范，看一下是否基于新语法创建变量，如果是按照新语法解析
   }


console.log(typeof a)//undefined ---> 暂时性死区bug
//在原有浏览器渲染机制下，基于typeof等逻辑运算符检测变量，即使没有声明也不会报错 ，会undefined(与window无关）
var a ;

console.log(typeof a);//ReferenceError: a is not defined
let a;//当前变量基于es6语法处理，在没有声明时，使用typeof会直接报错，解决了浏览器的暂时性死区