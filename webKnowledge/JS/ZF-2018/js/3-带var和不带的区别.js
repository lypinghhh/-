/**
 * => 在全局作用域下声明一个变量，
 * 也相当于给window全局对象设置了一个属性，变量的值就是属性值
 * 私有作用域中形成的私有变量和window没啥关系
 * 全局变量与 window下的属性存在双方互相映射机制 一个改 另一个也改
 * 
 * =>undefined 存在两种情况：
 * 1.存在属性，没值，则值默认为undefined --> 变量提升
 * 2.不存在该属性
 * 检测当前属性名是不是隶属于对象中  in 操作符  
 * 例:   'age' in obj  返回 true/false  判断有无属性
 * 
 * ！！！！=> 创建变量一定要加var  
 * 
 * => 私有作用于中带var和不带var的区别
 * 1.带var的在私有作用域变量提升阶段，都声明为私有变量，和外界没有任何的关系
 * 2.不带var的不是私有变量，会向上级作用域查找，看是否为上级的，不是继续向上查找，一直找到window为止
 * 这种查找机制叫做 作用域链
 * 也就是我们在私有作用中操作的这个非私有变量，是一直操作别人的
 * 如果查找到window中还是没有
 */


/************************************带var*****************************/

// console.log(a); //undefined
// console.log(window.a); //undefined
// //没有 a属性  或者 有 a属性，但值为 undefined
// console.log('a' in window)//true  
// //在变量提升阶段，在全局作用域中声明了一个变量a,
// //此时就已经把a当作属性赋值给了window了，只不过此时还没有给a赋值，默认值为undefined
// var a = 12;//全局变量值修改，window的属性值也跟着修改，反之，window下的属性值改，全局变量值也改
// console.log(a);//12
// console.log(window.a);//12


/************************************不带var*****************************/
//=>不加var本质是 window下的属性，
//console.log(a); //Uncaught ReferenceError: a is not defined 
//=>首先看是不是变量，再看是不是window下的属性


// console.log(window.a); //undefined 对象没有该属性，并不会报错
// console.log('a' in window)//false  window不存在该属性 
// a = 12;// => window.a = 12; 不加var 给window设置属性
// console.log(a);//12 虽然不是变量，但是 是window下的属性 输出
// console.log(window.a);//12



// var a = 12,
//     b = 13;// b带var

// var a = b = 12;// b不带var  => var a = 12; b = 12; 



console.log(a,b);// undefined,undefined
var a = 12,
    b = 12;

function fn(){
    //私有作用域中带var的是私有变量，不带var向上级作用域中查找看是不是上级作用域中的变量
    console.log(a,b) //undefined,12（上级作用域12）
    var a = b = 13; //a带var是私有变量，
    //b不带 var 不是私有变量 ，向上级作用域（全局）查找，把全局的b赋值为13
    console.log(a,b); // 13,13

}

fn();
console.log(a,b); // 12,13全局


// for(var i = 0;i<5;i++){
//     console.log(i);
    
// }


// for( i = 0;i<5;i++){
//     console.log(i);
    
// }