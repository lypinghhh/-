
/**
 * 将非0的原地修改，最后补0即可。
 * @param {} nums 
 */


var moveZeroes = function(nums) {
    //要新建一个数组，保存删除的0
    let count = [];
    for(let i =0;i<nums.length;i++){
        console.log('循环',i)
        if(nums[i] === 0){
            nums.splice(i,1);
            count.push(0);
            //注意改变了原数组的长度，删除元素之后，仍比较当前坐标
            i--;
            console.log('-',i)
            console.log(nums);
        }
    }
    //注意要在原数组上修改，不可拷贝新的数组
    //concat是返回新数组，不改变原来的数组不能使用
    nums.push(...count);
    return nums;
};


moveZeroes([1,2,2,0,6,0,9])



//方法二：
//借助一个游标记录位置，然后遍历一次，将非0的原地修改，最后把数组剩余的位置补0即可。

var moveZeroes = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[index++] = num;
        }
    }

    for(let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }
};