/*<<JS中的变量提升，变量内存及闭包详解>>
 * 基本类型值/引用类型值
*1.数组里面常用的方法（参数/返回值/原有数组是否改变）
* 数组也是一个对象
*window全局作用域
定义一个变量并进行赋值 =>  先有一个变量，再有一个数据，然后将变量和数据关联在一起
2.
栈内存--作用域/执行栈 全局/私有  代码执行的环境 基本类型值直接存储 
提供一个供js代码自上而下执行的环境（代码都是在栈中执行的）
由于基本数据类型值比较简单，都是直接在栈内存中开辟一个位置，把值直接存储进去的。
（当栈内存被销毁，存储的的基本值也跟着被销毁）
----------------------------------------------
堆内存 -- 对象/函数  存储 引用值对应的空间
1.存储引用类型值的（对象:键值对  函数：代码字符串）
当前堆内存释放销毁，那么这个引用值彻底没了
堆内存的释放:当前堆内存没有被任何的变量或者其他东西所占用 （没有人知道仓库的地址）
ary1 = null;
ary2 = null;
sum = null;
XXX = null; 通过空对象指针null可以让原始变量（或者其他东西）谁都不指向，那么原有被占用的堆内存就没有被堆内存占用了，浏览器就会销毁他
js的内存回收机制：
浏览器会在空闲的时候，间隔时间去查找一遍，自主地进行内存回收，把所有不被占用的堆内存销毁掉（谷歌浏览器）
内存占用的计数器（IE浏览器） 存在问题 计数混乱 不能进行销毁 “内存泄漏”
*/
/****************1-基本类型**************** */
var a = 12;
/**
 * 1.先声明一个变量a，没有赋值（默认值是undefined）
 * 2.在当前作用域中开辟一个位置存储12这个值
 * 3.让变量a和12关联在一起（定义 ： 赋值）
 */
var b = a;
// a存的是基本类型，也叫做值类型，直接拿值来进行操作
/**
 * 把a存储的值放到一个新的位置上，（直接操作值）
 * 让新位置上的值和b保持关联，此时的b和a没有关系
 * b=12;
 */
b = 13;
/**
 * =13 新的位置上放值13 跟13保持关联。原有的与12的关联断开
 */

console.log(a);//12 复制内容，原始数值不改变 



/****************2-引用类型*****************/
// 对象
var ary1 = [1,2,3];
/**
 * 新开辟内存空间  16进制地址 键值、长度
 */
var ary2 = ary1;
// 引用类型的值,内存空间对应的地址，指针
ary2.push(100);
//修改内存
console.log(ary1);//[ 1, 2, 3, 100 ] 复制指针，原始数组改变
//函数
//任意数求和
function sum(){
    var total = null;
    for(var i = 0;i<arguments.length;i++){
        var item =parseFloat(arguments[i])
        !isNaN(item)?total+=item:null;
    }
    return total;
}
sum(1,2,3);
// sum  表示函数本身
//sum() 表示函数执行，也即函数执行后的返回结果 函数执行 形成私有作用域 执行代码字符串
/**
 * 声明函数 引用数据类型 开辟新的内存空间 对应内存地址记录  存储字符串
 */