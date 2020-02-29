




var majorityElement = function(nums) {
    let temp = {};
    for(let i = 0; i < nums.length;i++){
        if(temp[nums[i]] !== undefined){
            temp[nums[i]]++;
        }else{
            temp[nums[i]] = 1;
        }
        if(temp[nums[i]] > Math.floor( nums.length / 2)){
            return nums[i];
        }
    }

};


//方法二：map
var majorityElement = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i]) !== undefined) {
        map.set(nums[i], map.get(nums[i]) + 1);
        if (map.get(nums[i]) > nums.length / 2) {
          return nums[i];
        }
      } else {
        map.set(nums[i], 1);
        if (map.get(nums[i]) > nums.length / 2) {
          return nums[i];
        }
      }
    }
  };
  
//方法三：投票算法
/**
 * 介于题目约束 要找的元素个数大于 n/2
 * 通过不断消除不同元素直到没有不同元素，剩下的元素就是我们要找的元素。
 */

var majorityElement = function(nums) {
    let count = 1;
    let majority = nums[0];
    //从第二个元素开始，与首元素比较
    for(let i = 1;i<nums.length;i++){
        //如果投票元素的技术为0 ，则重置投票元素
        if(count === 0){
            majority = nums[i];
        }
        //当前元素等于投票元素，投票制加一
        if(nums[i] === majority){
            count++;
        }else{
        //当前元素不等于投票元素，投票制减一
            count--;
        }
    }
    return majority;
};
