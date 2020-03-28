/**
 * 方法一：
 * 检查参数数组的长度是否大于函数的形参个数
 */


function curry(fn,...args){
    if (args.length >= fn.length){
       return fn(...args)
    }
    return function(...args2){
       return curry(fn,...args,...args2)
    }

}

const add = (a, b, c, d, e) =>{
    return a+b+c+d+e;
}

console.log(curry(add,1)(2)(3,4,5))


/**
 * 方法二：
 * @param {*} fn 
 */
var currying = function(fn) {
    // 主要还是收集所有需要的参数到一个数组中，便于统一计算
    var args = [].slice.call(arguments, 1);
    return function(){
        var _args = args.concat([].slice.call(arguments));
        return fn.apply(null, _args);
    }
  }
  
  var sum = function(){
    var args = [].slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    });
  };
  
  var sum10 = currying(sum, 10);
  console.log(sum10(20, 10));  // 40
  console.log(sum10(10, 5));   // 25






/**
 * 方法三：
 * 设置一个参数数组，当数组的长度达到函数的形参个数时，执行函数
 */

const add = (a, b, c, d, e) =>{
    return a+b+c+d+e;
}

const currying = (fn,arr = []) =>{
    let len = fn.length;
    return function(...args){
        arr = arr.concat(args);
        if(arr.length < len){
            return currying(fn,arr)
        }
        return fn(...arr);
    }
}


console.log(currying(add)(1,2)(3,4,5))