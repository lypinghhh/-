/**
 * 从左到右，更新当前的乘积
 * 从右往左，更新当前的乘积
 * https://www.bilibili.com/video/av82946524?from=search&seid=14986248262842043790
 */



function multiply(array)
{   
    //初始化数组
    let result = Array(array.length).fill(1);
    // write code here
    let product = 1;
    for(let i = 0;i < array.length;i++){
        result[i] = result[i] * product
        product = product * array[i];
    }
    //重置product
    product = 1;
    //注意从最后一个开始
    for(let i = array.length -1;i >= 0;i--){
        result[i] = result[i] * product;
        product = product * array[i];
    }
    return result;
    
    
    
}