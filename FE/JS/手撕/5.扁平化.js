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




 Array.prototype.newFlat = function(deep = 1){
    const arr = this;
    return arr.reduce((target,current) =>{
        Array.isArray(current) && deep > 1?
        target.concat(current.newflat(deep - 1)):
        target.concat(current)
    },[])
}



console.log(arr.newFlat()) => [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(1)) => [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(2)) => [1, 2, 3, 4, 5, 6, [7, 8, 9]];
console.log(arr.newFlat(3)) => [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.newFlat(4)) => [1, 2, 3, 4, 5, 6, 7, 8, 9];



const arr = [1, [2, 3],
    [4, [5, 6, [7, 8, 9]]]
];


Array.prototype.newFlat = function(deep = 1){
    const arr = this;
    return arr.reduce((target,current) =>{
        console.log(target,current)
        Array.isArray(current) && deep > 1?
        target.concat(current.newFlat(deep - 1)):
        target.concat(current)
    },[])
}

console.log(arr.newFlat(4)) 


console.log(arr.newFlat()) 
//=> [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(1)) 
//=> [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(2)) 
//=> [1, 2, 3, 4, 5, 6, [7, 8, 9]];
console.log(arr.newFlat(3)) 
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.newFlat(4)) 
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9];