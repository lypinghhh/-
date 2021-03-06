/**
 * 【题目】
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法
 * （先后次序不同算不同的结果）。
 */

//动态规划解法
function jumpFloor(n)
{
    if(n<=2){
        return n;
    }
    let i = 2;
    let pre = 1;
    let current = 2;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}


function jumpFloor(number) {
    // write code here
    let f = 1,
      g = 2;
    while (--number) {
      g += f;
      f = g - f;
    }
    return f;
  }