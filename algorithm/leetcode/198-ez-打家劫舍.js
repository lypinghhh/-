/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    if(nums.length === 1){
        return nums[0];
    }
    let current = [nums[0],Math.max(nums[0],nums[1])];
         for(let k = 2;k<nums.length;k++){
             current[k] = Math.max(current[k-2]+nums[k],current[k-1])
         }

         return current[nums.length-1];
                                
};

/**
 * 
 */
var rob = function (nums) {
    var len = nums.length;
    if (len < 2) {
      return nums[len - 1] ? nums[len - 1] : 0;
    }
    var current = [nums[0], Math.max(nums[0], nums[1])];
    for (var k = 2; k < len; k++) {
      current[k] = Math.max(current[k - 2] + nums[k], current[k - 1]);
    }
    return current[len - 1];
  };



  let arr = [1,2,3]
  arr[4]
  console.log(arr[-1])