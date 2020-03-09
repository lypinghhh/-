

//未通过 0
function InversePairs(data) {
    return mergeSort(data, 0, data.length - 1, []);
}

function mergeSort(array, left, right, temp) {
    if (left < right) {
        const mid = parseInt((left + right) / 2);
        const l = mergeSort(array, left, mid, temp);
        const r = mergeSort(array, mid + 1, right, temp);
        //注意传入mid
        const m = merge(array, left, right,mid, temp);
        return l + m + r;
    } else {
        return 0;
    }
}
//参数mid
function merge(array, left, right, mid, temp) {
    let leftIndex = mid;
    let rightIndex = right;
    //
    let count = 0;
    //temp数组从最后开始往前添加
    let tempIndex = right - left;
    //从大数开始，向左遍历
    while (leftIndex >= left && rightIndex > mid) {
        if (array[leftIndex] > array[rightIndex]) {
            count += (rightIndex - mid);
            temp[tempIndex--] = array[leftIndex++];
        } else {
            temp[tempIndex--] = array[rightIndex--];
        }

    }
    while (leftIndex >= left) {
        temp[tempIndex--] = array[leftIndex--];
    }
    while (rightIndex > mid) {
        temp[tempIndex--] = array[rightIndex--];

    }
    tempIndex = 0;
    for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
    }
    return count;
}

function mergeSort(array, left, right, temp) {
      if (left < right) {
        const mid = parseInt((left + right) / 2);
        const l = mergeSort(array, left, mid, temp);
        const r = mergeSort(array, mid + 1, right, temp);
        const m = merge(array, left, right, mid, temp);
        return l + m + r;
      } else {
        return 0;
      }
    }

    function merge(array, left, right, mid, temp) {
      let leftIndex = mid;
      let rightIndex = right;
      let tempIndex = right - left;
      let count = 0;
      while (leftIndex >= left && rightIndex > mid) {
        if (array[leftIndex] > array[rightIndex]) {
          count += (rightIndex - mid);
          temp[tempIndex--] = array[leftIndex--];
        } else {
          temp[tempIndex--] = array[rightIndex--];
        }
      }
      while (leftIndex >= left) {
        temp[tempIndex--] = array[leftIndex--];
      }
      while (rightIndex > mid) {
        temp[tempIndex--] = array[rightIndex--];
      }
      tempIndex = 0;
      for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
      }
      return count;
    }