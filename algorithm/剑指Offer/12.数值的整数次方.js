/**
 * 【题目】
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。 
 * 保证base和exponent不同时为0 
 * 【分析】
 * 这道题逻辑上很简单，但很容易出错。
 * 关键是要考虑全面，考虑到所有情况。
 * exponent 是正，负，0的情况
 * base为0的情况。
 */

function Power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      if (exponent > 0) {
        var result = 1;
        for (let i = 0; i < exponent; i++) {
          result *= base;
        }
        return result;
      } else if (exponent < 0) {
        var result = 1;
        for (let i = 0; i < Math.abs(exponent); i++) {
          result *= base;
        }
        //判断底是否为0
        return result ? 1 / result : false;
      }
    }
  }