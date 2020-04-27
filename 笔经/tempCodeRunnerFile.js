
function tran(num,n){
    let strArr = [];
    while( parseInt(num / n) >=0){
        strArr.unshift((num % n));
        num = parseInt(num / n);
    }
    return strArr.join('')
}

console.log(tran(10,2))