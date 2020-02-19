/**
 * 【题目30】
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)

例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 * 
 * @param {*} array 
 */



function FindGreatestSumOfSubArray(array) {
    if (Array.isArray(array) && array.length > 0) {
      let sum = array[0];
      let max = array[0];
      //注意循环是从1开始的
      for (let i = 1; i < array.length; i++) {
        if (sum < 0) {
          sum = array[i];
        } else {
          sum = sum + array[i];
        }
        if (sum > max) {
          max = sum;
        }
      }
      return max;
    }
    return 0;
  }