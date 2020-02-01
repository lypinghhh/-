/**
 * 1.带var 和 function 关键字 声明相同的名字，算作重名
 * 变量提升阶段，其实是一个属性，只是存储值的类型不同
 * 2.重名的处理；
 * 如果名字重复了，不会重新的声明，但是会重新的定义（重新赋值）
 * 不管是变量提升还是代码执行阶段 皆是如此，
 * 
 */


//window.fn;
//window.fn;

 var fn = 12;

 function fn(){
}
console.log()

/******************TEST01************** */
/**
 * 变量提升
 * fn = ....(1)
 *    = ....(2)
 *    = ....(3)
 *    = ....(4)
 *    = ....(5)
 * 名字相同的时候，不会重新的声明，只会重新的赋值
 */

fn(); //5
function fn(){ console.log(1)}
fn(); //5
function fn(){ console.log(2)}
fn(); //5
var fn = 100; //提升阶段只声明不赋值，执行阶段 赋值 fn=100
fn(); //100()不能执行 Uncaught TypeError: fn is not a function
function fn(){ console.log(3)}
fn();
function fn(){ console.log(4)}
fn();
function fn(){ console.log(5)}
fn();