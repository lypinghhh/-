/**
 * 0! = 1;
 * 附属没有阶乘
 * @param {*} n 
 */


//while循环
function factorial(num){
    var result = 1;
    while(num){
        result *= num;
        num--;
    }
    return result;
}
console.log(factorial(13))

//函数递归
function jc(n){
	if(n <= 1){
		return 1;
	}
	if(n > 1){
	return n*jc(n-1)
	}
}




function jc(n){
	if(n <= 1){
		return 1;
	}
	if(n > 1){
        
	return BigInt(n)*BigInt(jc(n-1))
	}
}
console.log(jc(10000))