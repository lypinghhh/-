/**
 * 作用域链
 * 变量提升：
 * var a; var b; var c;
 * fn = xXXXXX;
 */




var a = 12,
    b = 13,
    c = 14;

function fn(a){
    /**私有作用域
     * 1.形参赋值 a = 12;
     * 2.变量提升
     * var b;
     * 3.代码自上而下执行
     * =>在私有作用域中，只有以下两种变量是私有变量 a b
     * A:声明过的变量（var/function）
     * B:形参也是私有变量
     * 剩下的都不是自己私有的变量，都需要基于作用域链机制向上查找
     */
    console.log(a,b,c) //12(形参赋值),undefined,14（向上级作用域查找）
    var b = c = a = 20;
    console.log(a,b,c)//20,20,20（全局）
}
fn(a);//=> 把fn执行，小括号中是实参：(值) 
//=> 执行fn 相当于 把全局变量a的值12当作实参传递给函数的形参
//=> fn(12)
console.log(a,b,c)//**12**,13,20



/******************TEST01************** */

/**
 * 
 */
var ary = [12,23]

function fn(ary){
    /**
     * 1.形参赋值：数组的地址赋值
     */
    console.log(ary);//[12,23]
    ary[0] = 100;//[100,23]
    console.log(ary);
    ary = [100];//=>[100]新数组，开辟一个新的堆内存，私有变量不指向和全局ary同一个空间
    console.log(ary);
    ary[0] = 0;//[0]
    console.log(ary);//新数组[0]
}

fn(ary)//=>传值，传的是数组的地址
console.log(ary);//[**100**,23]

