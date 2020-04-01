/**
 * 方法一:
 * 递归实现
 * 循环数组元素，如果还是一个数组，就递归调用该方法：
 */


var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten(arr))

/**
 * 方法二：reduce
 */



 function flatten(arr){
     return arr.reduce(function(prev,next){
        return prev.concat(Array.isArray(next)?flatten(next):next)
     },[])
 }
 console.log(flatten(arr))



 /**
  * 方法三： ...扩展运算符,扁平一层
  */

 var arr = [1, [2, [3, 4]]];

 function flatten(arr){
     while(arr.some(item => Array.isArray(item))){
         arr = [...arr];
     }
     return arr
 }
 console.log(flatten(arr))