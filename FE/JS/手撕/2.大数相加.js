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









function sumString(a, b) {
    a = '0' + a;
    b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
    var arrA = a.split(''),  //将字符串转为数组
        arrB = b.split(''),
        res = [],  //相加结果组成的数组
        temp = '',  //相同位数相加的值
        carry = 0,  //同位数相加结果大于等于10时为1，否则为0
        distance = a.length - b.length,  //计算两个数字字符串的长度差
        len = distance > 0 ? a.length : b.length;  //和的长度
    // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
    if(distance > 0) {
      for(let i = 0; i < distance; i++) {
        arrB.unShift('0');
      }
    }else{
      for(let i = 0; i < distance; i++) {
        arrA.unShift('0');
      }
    }
    // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
    // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
    for(let i = len-1; i >= 0; i--) {
      temp = Number(arrA[i]) + Number(arrB[i]) + carry;
      if(temp >= 10) {
        carry = 1;
        res.unshift((temp + '')[1])
      }
      else{
        carry = 0;
        res.unshift(temp)
      }
    }
    res = res.join('').replace(/^0/, '');
    console.log(res);
  }



console.log(sumString(21537685,6787677432))




function add(a,b){
    var arr1 = a.toString().split('');
    var arr2 = b.toString().split('');
    var carry = 0,
        result = '';
        while(a.length || b.length || carry ){
            var temp = parseInt(arr1.pop() || 0) + parseInt(arr2.pop() || 0) + carry;
            result += temp %10;
            carry = temp/10;
        }
        return result;
}
console.log( add('253465675433567','3467543567543567'))










function sumString(a,b){
    var res = '',
        c = 0;
        a = a.toString().split('');
        b = b.toString().split('');
        while(a.length || b.length || c){
            c += ~~a.pop() + ~~b.pop();
            res = c % 10 + res;
            c = c>9;
        }
        var num = parseInt(res.replace(/^0+/,''));
        return num;
}

console.log(sumString(1234354,32547647))















function sumString(a, b) {
    a = '0' + a;
    b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
    var arrA = a.split(''),  //将字符串转为数组
        arrB = b.split(''),
        res = [],  //相加结果组成的数组
        temp = '',  //相同位数相加的值
        carry = 0,  //同位数相加结果大于等于10时为1，否则为0
        distance = a.length - b.length,  //计算两个数字字符串的长度差
        len = distance > 0 ? a.length : b.length;  //和的长度
    // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
    if(distance > 0) {
      for(let i = 0; i < distance; i++) {
        arrB.unShift('0');
      }
    }else{
      for(let i = 0; i < distance; i++) {
        arrA.unShift('0');
      }
    }
    // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
    // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
    for(let i = len-1; i >= 0; i--) {
      temp = Number(arrA[i]) + Number(arrB[i]) + carry;
      if(temp >= 10) {
        carry = 1;
        res.unshift((temp % 10))
      }
      else{
        carry = 0;
        res.unshift(temp)
      }
    }
    res = res.join('').replace(/^0/, '');
    console.log(res);
  }
 

console.log(sumString(2436547657,465876))








function sumString(a, b) {
    a = '0' + a;
    b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
    var arrA = a.split(''),  //将字符串转为数组
        arrB = b.split(''),
        res = [],  //相加结果组成的数组
        temp = '',  //相同位数相加的值
        carry = 0,  //同位数相加结果大于等于10时为1，否则为0
        distance = a.length - b.length,  //计算两个数字字符串的长度差
        len = distance > 0 ? a.length : b.length;  //和的长度
    // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
    if(distance > 0) {
      for(let i = 0; i < distance; i++) {
          console.log(arrB)
        arrB.unShift('0');
      }
    }else{
      for(let i = 0; i < distance; i++) {
        arrA.unShift('0');
      }
    }
    // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
    // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
    for(let i = len-1; i >= 0; i--) {
      temp = Number(arrA[i]) + Number(arrB[i]) + carry;
      if(temp >= 10) {
        carry = 1;
        res.unshift((temp + '')[1])
      }
      else{
        carry = 0;
        res.unshift(temp)
      }
    }
    res = res.join('').replace(/^0/, '');
    console.log(res);
  }
  console.log(sumString(2436547657,465876))
