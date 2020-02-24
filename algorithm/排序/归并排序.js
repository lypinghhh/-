
//法一：记录数组的索引，使用left、right两个索引来限定当前分割的数组
function mergeSort(array, left, right, temp) {
    //注意判断数组的长度
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid, temp);
        mergeSort(array, mid + 1, right, temp);
        mergeSort(array, left, right, temp);
    }
    return array;
}

function merge(array, left, right, temp) {
    const mid = Math.floor((left + right) / 2);
    //两个子数组都从最左侧开始
    let leftIndex = left;
    let rightIndex = mid + 1;
    let tempIndex = 0;
    //注意是小于等于
    while (leftIndex <= mid && rightIndex <= right) {
        if (array[leftIndex] < array[rightIndex]) {
            temp[tempIndex++] = array[leftIndex++]
        } else {
            temp[tempIndex++] = array[rightIndex++]
        }

    }
    //其中一个子数组全部就位
    while (leftIndex <= mid) {
        temp[tempIndex++] = array[leftIndex++];
    }
    while (rightIndex <= right) {
        temp[tempIndex++] = array[rightIndex++];
    }
    //将temp拷贝至原来的数组
    let tempIndex = 0;
    for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
    }

}


//法二：分成两个数组
