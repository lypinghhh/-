//素数(质数)： 只能被1 和 其本身整除的数 
//用户输入一个数，判断这个数是否是素数


function isPrime(num){
    let count = 0;
    for(let i = 1;i<=num;i++){
        if(num % i === 0){
            count++
        }
    }
    if(count == 2){
        return true;
    }else{
        return false;
    }
}


let result = isPrime(3);
console.log(result);



