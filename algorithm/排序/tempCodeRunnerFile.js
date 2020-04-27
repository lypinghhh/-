function quickSort(array,start,end){
    if(end - start < 1){
        return;
    }
    let target = array[start];
    let l = start;
    let r = end;
    while( l < r){
        while(l < r && array[r] >= target){
            r--;
        }
        array[l] = array[r];
        while(l < r && array[l] > target){
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