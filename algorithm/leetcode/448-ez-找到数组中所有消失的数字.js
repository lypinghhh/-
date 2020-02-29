

//!!!!报错的方法;下标为2的时候，出现对象键值

var findDisappearedNumbers = function(nums) {
    let ex = [];
    for(let i = 0;i < nums.length;i++){
        console.log(i,nums)
        let num = nums[i];
        nums[num] = -1; 
        console.log(i,nums)
    }
    console.log(nums)
    for(let i = 0;i <= nums.length;i++){
        if(nums[i] !== -1){
            ex.push(i)
        }
    }

    return ex;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))


arr = [4,-1,2,7,8,2,3,1]
arr[1] = -1;
console.log(arr)



//map
const findDisappearedNumbers = (nums) => {
    let map = new Map();
    for (let i = 1; i <= nums.length; i++) {
      map.set(i, 1);
    }
    for (let j = 0; j < nums.length; j++) {
      if (map.get(nums[j])) {
        map.delete(nums[j]);
      }
    }
    let result = [];
    for (let key of map.keys()) {
      result.push(key);
    }
    return result;
  };
