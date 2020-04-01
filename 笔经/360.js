function format(number){
    return number && number .toString().replace(/(?!^)(?=(\d{3})+\.)/g,",")
}

function format(number){
    return number && number.toString().replace(/(?!^)(?=(\d{3}))\./g)
}
console.log('348702754784.88'.search(/(?!^)(?=(\d{3})+\.)/g))


console.log(format('7889478945749877821000.11'))



//(\d{3})+\.  说明匹配3个及3的倍数个数字加“.”结尾的
function commafy(num) {
    return num && num
        .toString()
        //(\d)(?=(\d{3})+\.   说明只有匹配到该数字后有3个及3的倍数个数字加“.”结尾的该数字被匹配
        .replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2, $3) {
            console.log($1, $2, $3);
            return $2 + ',';
    });
}
console.log(commafy(12345678.11)); 




function format(number){
    return number && number.replace(/(?!^)(?=(\d{3})+\.)/g,",")
}

console.log(format('7889478945749877821000.11'))







function myInstanceof(left, right){
    
}