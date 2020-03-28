
/**
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {*} nums 
 * @param {*} target 
 */
//法一：暴力解法
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[j] == dif)
                return [i,j];
        }
    }
};

//法二
var twoSum = function(nums, target) {
    //键为数值，值为索引
    var temp = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        //数组中不存在该对应的差值
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        //注意设置 数组中的  值为 键/ 索引为值，方便返回
        temp[nums[i]] = i;
    }
};




v

