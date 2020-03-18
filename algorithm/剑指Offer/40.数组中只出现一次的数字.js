/**
 * 通过率80%
 * @param {*} array 
 */
function FindNumsAppearOnce(array) {
    let exclusive = 0;
    for (let i = 0; i < array.length; i++) {
      exclusive = exclusive ^ array[i];
    }
    let index = findFirst1(exclusive);
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < array.length; i++) {
      if (isN1(array[i], index)) {
        result1 = result1 ^ array[i]
      } else {
        result2 = result2 ^ array[i]
      }
    }
    return [result1, result2];
  }

  // 找到n的二进制第一个为1的位置
  function findFirst1(n) {
    let index = 0;
    while (((n & 1) === 0) && index < 64) {
      n = n >> 1;
      index++;
    }
    return index;
  }

  // 判断n的二进制第index位是否为1
  function isN1(n, index) {
    return n & (n >> index);
  }

















/**
 * 
 * @param {*} num 
 */


function findFirstBitIsOne(num) {
    let indexBit = 0,
      flag = 1;
    while (flag && (flag & num) === 0) {
      ++indexBit;
      flag = flag << 1;
    }
    return indexBit;
  }
  
  /**
   * 判断num的第index二进制位是否为1
   *
   * @param {Number} num
   * @param {Number} index
   */
  function checkIndexBitIsOne(num, index) {
    num = num >> index;
    return !!(num & 1);
  }
  
  /**
   * 主函数
   *
   * @param {Array} nums
   */
  function findNumsAppearOnce(nums) {
    if (!nums) {
      return null;
    }
  
    let orResult = 0;
    for (let num of nums) {
      orResult ^= num;
    }
  
    let indexOfOne = findFirstBitIsOne(orResult);
    let num1 = 0,
      num2 = 0;
    for (let num of nums) {
      if (checkIndexBitIsOne(num, indexOfOne)) {
        num1 ^= num;
      } else {
        num2 ^= num;
      }
    }
  
    return [num1, num2];
  }
  
  /**
   * 测试
   */
  
  console.log(findNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5]));