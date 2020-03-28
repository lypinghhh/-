function tranformStr1(str){
    var strArr=str.split('-');
    for(var i=1;i<strArr.length;i++){
        strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1);
    }
    return strArr.join('');
}
