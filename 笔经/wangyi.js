/**
 * 
 * @param {*} nums 
 * @param {*} target 
 */












/**
 * 输入：包含n个整数的数组nums ( 4<n<10)，目标值
 * 输出： 所有满足条件且不重复的四个元素组成的一维数组
 */















function findArray(nums,target){
    let result = [];
    let temp = [];
    let diff = target;
    for(let i = 0;i<nums.length;i++){
        for(let j = 1;j<nums.length;j++){
            if(temp.length < 4){
                diff = diff - nums[i];
                temp.push(nums[i])
            }else if(diff === 0){
                result.push(temp)
                temp = [];
            }
             
        }
    }
    console.log(result)
    return result.filter(item =>{
        item.length === 4;
    })
}




console.log(findArray([5,0,-6,0,6,-5,2],1))




function Encrypt(str){
let strArr = str.split('');
let transArr = [];
for(let i = 0;i < strArr.length;i++ ){
    if( 97 <= strArr[i].charCodeAt() <= 122){
        transArr[i] = String.fromCharCode( strArr[i].charCodeAt()+1 === 123 ? 97 :  strArr[i].charCodeAt()+1).toUpperCase();
    }else if( 0 <= strArr[i] <= 9){
        transArr[i] =  strArr[i]+1 === 10 ? 0 :  strArr[i]+1;
    }
}
    return transArr.join('')
}


function unEncrypt(str){
    let strArr = str.split('');
    let transArr = [];
    for(let i = 0;i < strArr.length;i++ ){
        if( 65 <= strArr[i].charCodeAt() <= 90){
            transArr[i] = String.fromCharCode( strArr[i].charCodeAt()-1 === 64 ? 90 :  strArr[i].charCodeAt()-1).toLowerCase();
        }else if( 0 <= strArr[i] <= 9){
            transArr[i] =  strArr[i]-1 === -1 ? 9 :  strArr[i]-1;
        }
    }
        return transArr.join('')
    }

console.log(unEncrypt('BCDA340'))



console.log(('/'.charCodeAt()))






function tran(num,n){
    let strArr = [];
    while( parseInt(num / n) >= 0){
        strArr.unshift((num % n));
        num = parseInt(num / n);
    }
    return strArr.join('')
}

console.log(tran(7,2))






//huyu
function bigNumAdd(num1,num2){
    let arr1 = num1.split('').reverse();
    let arr2 = num2.split('').reverse();
    let len1 = num1.length;
    let len2 = num2.length;
    let result = [];
    let carry = 0;
    for(i = 0;i<Math.max(len1,len2);i++){
        result[i] = (arr1[i] + arr2[i]) % 10 + carry;
        carry = (arr1[i] + arr2[i]) /10;
    } 
    return result.join('');

}

let result1 =   bigNumAdd('2354678908','23476986764365')
console.log(result1)




function maxBoxes( boxes ) {
    // write code here
    for( let i = 0 ;i< boxes.length-1;i++ ){
        for(let  j = i+1 ;j<boxes.length ;j++ ){
            if(boxes[i][0] <boxes[j][0] && boxes[i][1] <boxes[j][1] && boxes[i][2] <boxes[j][2]){

            }else if(boxes[i][0] >boxes[j][0] && boxes[i][1] >boxes[j][1] && boxes[i][2] >boxes[j][2]){

            }
        }
    }
}


