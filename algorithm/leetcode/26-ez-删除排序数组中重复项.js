//法一
//循环需要注意，nums.length会随着nums.splice的执行而改变，所以在for循环中我们不是每次都需要i++。
var removeDuplicates = function (nums) {
    var cur = nums[0];
    for (var i = 1; i < nums.length;) {
        console.log(i)
        if (nums[i] === cur)
            nums.splice(i, 1);
            
        else
           //新插入元素与当前元素不相同，则移动cur指到当前i元素
            cur = nums[i++];
    }
    return nums.length
};
removeDuplicates([1,1,1,1,3,4])
