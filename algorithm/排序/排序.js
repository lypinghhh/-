/**
 * 冒泡排序：
 * 时间复杂度：n2
 * 空间复杂度：1
 * 稳定
 * PS：
 * 1.break提前终止
 * 2.数组越界处理
 * 3.双重循环，外层是总的元素，内层是一趟
 */


 function bubbleSort(arr){
  
    for(let j = 0 ;j<arr.length;j++ ){
        //每趟循环设置一个标志值
        let complete = true;
        //每一趟就位一个，排除后面已经就位的元素
        for(let i = 0;i<arr.length-1 - j;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                //该轮有交换，则设置标志值
                complete = false;
            }
        }
        //上一轮无交换
        if(complete){
            break;
        }
        console.log(j,arr)
    }
    return arr;

 }



 bubbleSort([5,4,3,2,1,0])


 /**
  * 选择排序
  * 时间复杂度：n2
  * 空间复杂度：1
  * 稳定性：不稳定
  * 
  */

//相邻元素 双层循环
  function selectionSort(arr){
    for(let i = 0;i < arr.length - 1;i++){
        //设置最小位为当前位
        let minIndex = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //一轮结束，找到最小，交换
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
        console.log(i,arr)
    }
    return arr;
  }
selectionSort([5,4,3,2,1,0])


/**
 * 插入排序
 * 时间复杂度：n2
 * 空间复杂度: 1
 * 稳定
 */
function insertSort(array) {
    //从第一位开始
    for (let i = 1; i < array.length; i++) {
        //目标元素
      let target = i;
      for (let j = i - 1; j >= 0; j--) {

        if (array[target] < array[j]) {
          [array[target], array[j]] = [array[j], array[target]]
          //更新目标元素，挪到指定位置
          target = j;
        } else {
          break;
        }
      }
      console.log(i,array)
    }
    return array;
  }


insertSort([9,4,7,2,1,6])


/**
 * 快速排序：
 */

 function quickSort(array){
     
 }