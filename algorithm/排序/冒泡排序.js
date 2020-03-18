function bubbleSort(array){

    for(let j = 0;j <array.length;j++ ){
        let complete = true;
        for(let i = 0;i<array.length-1-j;i++){
            if(array[i] > array[i+1]){
                [array[i],array[i+1]] = [array[i+1],array[i]];
                complete = false;
            }
        }
        if(complete){
            break;
        }
    }
    return array;
}

console.log(bubbleSort([3,6,8,3,2,7,2]))
