/**
 * 【题目27】
 * 输入一个字符串，按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * 【分析】
 * 使用回溯法

记录一个字符（temp），用于存储当前需要进入排列的字符

记录一个字符串（current），用于记录当前已经排列好的字符

记录一个队列（queue），用于存储还未被排列的字符

每次排列将temp添加到current
如果queue为空，则本次排列完成，将curret加入到结果数组中，结束递归
如果queue不为空，说明还有未排列的字符
递归排列queue中剩余的字符
为了不影响后续排列，每次递归完成，将当前递归的字符temp加回队列
总结：利用树去尝试不同的可能性，不断地去字符串数组里面拿一个字符出来拼接字符串，当字符串数组被拿空时，就把结果添加进结果数组里，然后回溯上一层。（通过往数组加回去字符以及拼接的字符串减少一个来回溯。）
 */



 function Permutation(str){
     const result = [];
     if(str){
        queue = str.split('')
        PermutationCore(queue,result);
     }
     result.sort();
     return [...new Set(result)]
 }




 function PermutationCore(queue,result,temp = "",current = ""){
     current += temp;
     if(queue.length === 0){
         result.push(current);
         return;
     }
     for(let i = 0;i<queue.length;i++){
         temp = queue.shift();
         PermutationCore(queue,result,temp,current);
         queue.push(temp);
     }
 }