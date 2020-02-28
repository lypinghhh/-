/**
 * 输入：1，2，3，5，7，8
 * 输出：1~3，5，7~8
 * 类题： 连续至少三个进行连写
 */

 function transformStr(str){
    let result = []; 
    const arr =  str.split(',');
     let i = 0;
     for(let j = 1;j <= arr.length;j++){
         //注意下面这个表达式
         if(arr[j] -arr[j-1] !== 1){
            result.push(j - i === 1 ? arr[i]:`${arr[i]}~${arr[j-1]}`);
            console.log(result)
            i=j
         }
     }
     return result.join(',');
 }


 console.log( transformStr3('1,2,7,7,9,10,11'))


 function transformStr3(str){
    let result = []; 
    const arr =  str.split(',');
     let i = 0;
     for(let j = 1;j <= arr.length;j++){
         //注意下面这个表达式
         if(arr[j] -arr[j-1] !== 1){
            if(j-i < 3){
                for(i;i<j;i++){
                    result.push(arr[i])
                }
            }else{
                result.push(`${arr[i]}~${arr[j-1]}`);
                console.log(result)
                i=j;
            }

            
         }
     }
     return result.join(',');
 }

 