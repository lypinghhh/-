/**
 * 【题目28】
 * 数组中有一个数字出现的次数超过数组长度的一半，
 * 请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 * 【分析】
 * 解法1:
开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)，逻辑简单
 */








function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers && numbers.length > 0){
        const length = numbers.length;
        let  temp = {}; 
        for(let i = 0;i < length;i++ ){
            if(temp['s'+numbers[i]]){
                temp['s'+numbers[i]]++
            }else{
                temp['s'+numbers[i]] = 1
            }
            
            if(temp['s'+numbers[i]] > length / 2){
                return numbers[i]
            }
        }
        return 0;
    }
}