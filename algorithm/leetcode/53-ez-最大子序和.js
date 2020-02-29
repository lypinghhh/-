/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //注意初始值为第一个元素，不能自己赋值0，因为数组中有可能第一个元素比0小
    let sum = nums[0];
    let max = sum;
    for(let i = 1;i<nums.length;i++){
        //对sum要么叠加，要么定位下一个元素
        if(sum < 0){
            sum = nums[i];
            
        }else{
            
            sum +=nums[i];
         
        }
        //每次max都取 max和sum的最大值
        max  = Math.max(sum,max);

    }
    return max;
};




//法二：
var maxSubArray = function(nums) {

    let max = nums[0];
    //val为累加值
    let val = 0;
    for(let i = 0;i<nums.length;i++){
        val = val + nums[i];
        max = val > max ? val : max;
        //val小于0,则重置累加器，负数没有增益
        val = 0 > val ? 0 :val; 
    }
    return max;
};



//法三： 分治法 
//需要再看看
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return helper(nums, 0, nums.length - 1);
};

function helper(list, m, n) {
  if (m === n) return list[m];
  let sum = 0;
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid);
  const r = helper(list, mid + 1, n);
  for (let i = mid; i >= m; i--) {
    sum += list[i];
    if (sum > lmax) lmax = sum;
  }

  sum = 0;

  for (let i = mid + 1; i <= n; i++) {
    sum += list[i];
    if (sum > rmax) rmax = sum;
  }

  return Math.max(l, r, lmax + rmax);
}