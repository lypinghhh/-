/***
 * 【题目】
 * 大家都知道斐波那契数列，
 * 现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。 
 * n<=39 
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 也就是：
 * F(0) = 0,   
 * F(1) = 1 
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 给定 N，计算 F(N)。
 * 【分析】
 * 
 */


function Fibonacci1(n)
{
    // write code here
    let arr = [0,1];
    for (let i = 2 ;i <= n ;i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr(n);
}

//不太懂
// 动态规划的特点是：最优子结构、无后效性、子问题重叠
function Fibonacci2(n) {
    // write code here、
    let f = 0,
      g = 1;
    while (n--) {
      g += f;
      f = g - f;
    }
    return f;
  }

//动态规划解法
  function Fibonacci3(n){
    if(n<=1){
        return n;
    }
    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}
