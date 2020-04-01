












/**
 * 输入：包含n个整数的数组nums ( 4<n<10)，目标值
 * 输出： 所有满足条件且不重复的四个元素组成的一维数组
 */















function findArray(nums,target){
    let result = [];
    let temp = [];
    let diff = target;
    for(let i = 0;i<nums.length;i++){
        for(let j = 1;j<nums.length;j++){
            if(temp.length < 4){
                diff = diff - nums[i];
                temp.push(nums[i])
            }else if(diff === 0){
                result.push(temp)
                temp = [];
            }
             
        }
    }
    console.log(result)
    return result.filter(item =>{
        item.length === 4;
    })
}




console.log(findArray([5,0,-6,0,6,-5,2],1))