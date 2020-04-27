//TEST-01 手机号

function isPhone(tel){
    //注意第二位的数字（多个数字可供选择，选其中一个）不需要/g
    let reg = /^1[34578]\d{9}$/;
    //注意test是正则的方法
    return reg.test(tel);
}

console.log(isPhone('13938121957'))

//TEST-02 千分位分隔符

//小数点后超过三位会进行四舍五入，数字的方法
console.log(11123123231.3216.toLocaleString());

//正则表达式
//匹配三个一组数字  (\d{3})+
//注意是字符串的方法，要把数字转为字符串

function format(number){
    return number && number.toString().replace(/(?!^)(?=(\d{3})+\.)/g,",")
}



console.log(format(7889470.11))



//TEST-