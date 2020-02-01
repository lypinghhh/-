/**
 * => 日常倾向于使用函数表达式创建函数，严格按照顺序调用函数
 */




sum();//普通函数变量提升阶段完成声明加定义  2
fn();//var变量提升只对等号左边进行变量提升，声明 
//Uncaught TypeError: fn is not a function  不是函数不能执行


//把函数当作一个值赋值给表达式，匿名函数-函数表达式--创建函数
var fn = function () {

console.log(1)

}//=>代码执行到此处会把函数值赋值给fn
fn();//1
//=>普通的函数
function sum(){
    console.log(2)
};

