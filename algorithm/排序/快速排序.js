function quickSort(array,start,end){
    //判断是否到临界
    if(end - start  < 1){
        return;
    }
    //枢轴
    const target = array[start];
    let l = start;
    let r = end;
    while(l < r){
        while(l < r && array[r] >= target){
            r--;
        }
        array[l] = array[r];
        while(l < r && array[l] < target){
            l++;
        }
        array[r] = array[l];
    }
    array[l] = target;
    quickSort(array,start,l-1);
    quickSort(array,l+1,end);
    return array;
}

function quickSort(array,start,end){
    //判断是否到临界
    if(end - start  < 1){
        return;
    }
    //枢轴
    const target = array[start];
    let l = start;
    let r = end;
    while(l < r){
        while(l < r && array[r] >= target){
            r--;
        }
        array[l] = array[r];
        while(l < r && array[l] < target){
            l++;
        }
        array[r] = array[l];
    }
    array[l] = target;
    quickSort(array,start,l-1);
    quickSort(array,l+1,end);
    return array;
}









  console.log(quickSort([1,5,4,6,7,2,9],0,6))

//普通的做法

function quickSort(array){
    if(array.length < 2){
        return array;
    }
    const target = array[0];
    const left = [];
    const right = [];
    for(let i = 1;i<array.length;i++){
        if(array[i] < target){
            left.push(array[i])
        }else{
            right.push(array[i])
        }

    }
    return quickSort(left).concat([target],quickSort(right))

}

console.log(quickSort([1,5,4,6,7,2,9],0,6))