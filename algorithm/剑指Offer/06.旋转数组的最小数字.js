/***
 * 【题目】
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 【分析】
 * 旋转之后的数组实际上可以划分为两个排序的子数组
 * 而且前面的子数组的元素都大于或者等于后面子数组的元素
 * 最小的元素刚好是这两字数组的分界线
 */
function minNumberInRotateArray1(rotateArray){
    //若数组大小为0，则返回0
    if(rotateArray.length === 0){
        return 0;
    }
    //若数组中相邻元素。后者比前者大，则处于两个子数组的临界
    for(let i = 0;i<rotateArray.length;i++){
        if(rotateArray[i]>rotateArray[i+1]){
            return rotateArray[i+1];
        }
    }
    //若数组单调递增，则未搬移旋转，最小的元素为第一个
    return rotateArray[0];
}

function minNumberInRotateArray2(rotateArray){
    //二分查找，指定两个起使、终止坐标
    let left = 0;
    let right = rotateArray.length-1;

}

