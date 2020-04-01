

//me - 报错 -- 返回空数组
function threeSum(arr){
    let result = [];
    arr.sort((a,b) =>{
        a-b
    })
    for(let i = 0;i<arr.length;i++){
        if( i && arr[i] === arr[i-1] ){
            continue;
        }
        let left = i+1;
        let right = arr.length - 1;
        while(left < right){
            let sum = arr[i] + arr[left] + arr[right];
            if(sum > 0){
                right--;
            }else if(sum < 0){
                left++;
            }else{
                //注意嵌套关系
                result.push([arr[i],arr[left++],arr[right--]])
                while(arr[left] === arr[left - 1]){
                    left++;
                }
                while(arr[right] === arr[right+1]){
                    right--;
                }
            }
            
        }
    }

    return result;

}






//示例

var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      // 跳过重复数字
      if (i && nums[i] === nums[i - 1]) { continue; }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum > 0) {
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          result.push([nums[i], nums[left++], nums[right--]]);
          // 跳过重复数字
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          // 跳过重复数字
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
    }
    return result;
  }