/**
 * 【题目】
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * 【分析】
 * 1. 使用正则，全局替换
 * 2. 用空格将字符串切割成数组，再用20%进行连接。
 * 【测试用例】
 */


 function replaceSpace1(str){
    return str.replace(/\s/g,'%20');
 }

 function replaceSpace2(str){
    return str.split(' ').join('%20');
 }
 
 /**
  * 【拓展】
  * 允许出现多个空格，多个空格用一个20%替换：
  * 用正则表达式找到连续空格进行替换
  */

 function replaceSpace3(str)
 {
     return str.replace(/\s+/g,'%20');
 }