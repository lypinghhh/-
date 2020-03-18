function bubbleSort(array) {
    for (let j = 0; j < array.length; j++) {
      let complete = true;
      for (let i = 0; i < array.length - 1 - j; i++) {
        // 比较相邻数
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          complete = false;
        }
      }
      // 没有冒泡结束循环
      if (complete) {
        break;
      }
    }
    return array;
  }
  function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }

  function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
      let target = i;
      for (let j = i - 1; j >= 0; j--) {
        if (array[target] < array[j]) {
          [array[target], array[j]] = [array[j], array[target]]
          target = j;
        } else {
          break;
        }
      }
    }
    return array;
  }
