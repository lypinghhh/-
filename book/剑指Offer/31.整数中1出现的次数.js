
/**
 * 【题目31】
 * 求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */



function NumberOf1Between1AndN_Solution(n) {
    let count = 0;
    let i = 1;
    let high = low = current = level = 0;
    let length = n.toString().length;
    while (i <= length) {
      level = Math.pow(10, i - 1); //第i位数位于什么量级 1 10 100 ...
      high = parseInt(n / (level * 10));
      low = n % level;
      current = parseInt(n / level) % 10;
      if (current === 0) {
        count += (high * level);
      } else if (current === 1) {
        count += (high * level + low + 1);
      } else {
        count += ((high + 1) * level);
      }
      i++;
    }
    return count;
  }