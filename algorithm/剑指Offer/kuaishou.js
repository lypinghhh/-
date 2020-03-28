/*
 * @Author: LYP 
 * @Date: 2020-03-22 21:42:40 
 * @Last Modified by: LYP
 * @Last Modified time: 2020-03-22 21:43:00
 * 快手笔试题
 */



//1




function DistanceToHigher(height) {
    // write code here
    let result = [0];

    for(let i = 1;i < height.length;i++ ){
        for(j = i -1;j >=0 ;j--){
            if(height[j] - height[i] > 0){
                result[i] = i - j;
                break;
            }
            result[i] = 0;
        }
    }

 return result; 

}

//2
function findIdx(str){
    let arr = str.split(' ')
    let result = [];
    for(let i = 2;i < arr.length;i++){
        if(arr[i] < arr[i-1] && arr[i] >= arr[i-2]){
            result.push(i)
        }
    }
    if(result.length === 0){
        return -1;
    }else{
        return result.join(' ');
    }
   
}

console.log(findIdx('1 22 54 123'))






//3 靓号


function goodPhone(str){
    
    let inArr = str.split(',');
    let obj = {};
    for(let number of inArr){

        for(let i = 3;i<9;i++){
          if(  isLH(number[i],number[i+1] ) === 'NO'){
              break;
          }
          if(  isLH(number[i],number[i+1] ) === 'High'){
            for(let j = i+1; j < 11;j++){
                if(  isLH(number[i],number[j] ) !== 'High'){
                    break;
                }

            }
          }

          if(  isLH(number[i],number[i+1] ) === 'LOW'){
            for(let j = i+1; j < 11;j++){
                if(  isLH(number[i],number[j] ) !== 'High'){
                    break;
                }

            }
          }

        }
    }


}





//输出
function compare(a,b){
    return a-b;
}


//升降序

function isLH(a,b){
    if(a - b === 1){
        return 'LOW'
    }else if(b-a === 1){
        return 'High'
    }
    return 'NO'
}




//4
function 