/**
 * 【题目33】
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。
 *  习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */


function GetUglyNumber_Solution(index) {
    if (index <= 0) {
      return 0;
    }
    let arr = [1];
    let i2 = i3 = i5 = 0;
    let cur = 0;
    while (arr.length < index) {
      arr.push(Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5));
      const current = arr[arr.length - 1];
      while (arr[i2] * 2 <= current) {
        i2++;
      }
      while (arr[i3] * 3 <= current) {
        i3++;
      }
      while (arr[i5] * 5 <= current) {
        i5++;
      }
    }
    return arr[index - 1];
  }