/**
 * 【题目13】
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 【分析】
 * 1.新建两个数组，用来存放奇数或者偶数
 * 2.将偶数的数组连在奇数的后面
 */


 function reOrderArray(array){
     var odd = [];
     var even = [];
     for(let i = 0;i<array.length;i++){
         if(array[i] % 2 === 1){
             odd.push(array[i]);
         }else{
             even.push(array[i]);
         }
     }
     return odd.concat(even);
 }