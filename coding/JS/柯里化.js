/**
 * 牛客网
 */

 function curryIt(fn){
     let len = fn.length;
     let args = [];
     return function(arg){
         args.push(arg);
         if(args.length === len){
             return fn.apply(this,args)
         }else{
             console.log(arguments.callee)
             return curryIt(fn)
         }

     }
 }

 function fn2(a,b,c){
     return a+b+c;
 }
 console.log(curryIt(fn2))
 curryIt(fn2)



 function curryIt(fn){
     let n = fn.length;
     let args = [];
     let result= function(arg){
        args.push(arg);
        n--;
        if(n > 0){
            return result;
        }else{
            fn.apply(this,args)
        }
        return result;
     }
 }

 let to =  function (a,b,c){
     
    return a+b+c;
}

console.log(curryIt(to(1,2,3)))






/**
 * 实现通用的函数柯里化
 */


 const add = (a,b,c) =>{
     return a+b+c;
 }

 const curring = (fn) =>{
     let len = fn.length;
     let arr = [];
     return (...args )=>{//保存用户传入的参数
        arr = arr.concat(args)
        if(arr.length < len){
            return curring(fn,arr)
        }
        return fn(...arr);
     }
 }



 function fn2(a,b,c){
    return a+b+c;
}
 function curry(fn,...args1){
     console.log(args1,'args1')
     if(args1.length > fn.length){
         return fn(...args1)
     } 
     return function(...args2){
         return curry(fn,...args1,...args2)
     }
 }
let result = curry(fn2,1,2)(fn2,3)
console.log(result)




//法一：
function curry(fn, ...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    }
    return function(...args2) {
      return curry(fn, ...args1, ...args2);
    };
  }


/***
 * 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数
 */




  //传入三个参数
  function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result =  function (arg){
        args.push(arg);
        length --;
        //注意边界条件
        if(length <= 0 ){
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
     
    return result;
}