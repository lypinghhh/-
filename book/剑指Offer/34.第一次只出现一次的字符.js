
/**
 * 【题目34】
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 * 
 * @param {*} str 
 */




function FirstNotRepeatingChar(str)
{
    if(!str){
        return -1;
    }
    let countMap = {};
    const array = str.split('');
    const length = str.length;
    for(let i = 0;i < length;i++ ){
        const current = array[i];
        let count = countMap[current]
        if(count){
            countMap[current] = count + 1;
        }else{
            countMap[current] = 1;
        }
    }
    for(let i = 0;i<length;i++){
        if(countMap[array[i]] == 1){
            return i;
        }
    }
    return -1;
}