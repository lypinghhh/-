/**
 * [思路]
 * 使用一个map将遍历过的数字存起来，键为数组中的值，值为数组中的索引
 * 遍历数组元素，计算差值，看是否可以在map中找到,返回
 * 没有的话，将当前值存入map
 * 
 * 
 * 
 * 
 * @param {*} arr 
 * @param {*} target 
 */


//awesome
var twoSum = function (nums, target) {
    const map = {};
    //注意判断为数组
    if (Array.isArray(nums)) {
      for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] != undefined) {
          return [map[target - nums[i]], i];
        } else {
          map[nums[i]] = i;
        }
      }
    }
    return [];
  };




//me
function twoSum(arr,target){
    let diff;
    let map = {};
    for(let i = 0;i < arr.length;i++){
        diff = target - arr[i];
        if(map[diff] !== undefined){
            return [i,map[diff]]
        }else{
            map[arr[i]] = i;
        }
    }
}

console.log(twoSum([1,2,3,4,5],7))