/**【题目29】
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * 
 * @param {*} input 
 * @param {*} k 
 * 堆排序的方法报错未通过
 */



function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(k<1 || k > input.length){
        return [];
    }
    function compare(a,b){
        return a-b;
    }
    return input.sort(compare()).slice(0,k)
}


