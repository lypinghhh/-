/**
 * 方法一：while循环
 * 有序的二分查找，返回-1或存在的数组下标
 * @param {*} arr 
 * @param {*} target 
 */

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;

    while (left <= right){
        //middle的变化写在循环里面
        let middle = parseInt(left+(right-left)/2);
        // let middle = Math.floor((left+right)/2)
        if(target < arr[middle]){
            right =  middle -1;
        }else if(target > arr[middle]){
            left = middle +1;
        }else{
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,3,6,7,9],3))

/**
 * 方法二：递归实现
 * @param {*} target 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function binarySearch(target,arr,start = 0,end = arr.length-1) {

    console.log(start,end)
    if( start > end){
      
        return -1};
    //用let的话，会报错，因为不可以重复声明
   

    var mid = parseInt(start+(end-start)/2);
    if(target==arr[mid]){
        return mid;
    }else if(target>arr[mid]){
        return binarySearch(target,arr,mid+1,end);
    }else{
        return binarySearch(target,arr,start,mid-1);
    }
   
}



console.log(binarySearch(3,[1,3,6,7,9]))





