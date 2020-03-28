//1
function unique(arr){
    return [...new Set(arr)];
}
unique([2,4,5,6,8,4,3,4,3])

//2
function log(str){
    let str2 = str.replace(/-(\w)/g,function($0,$1){
        return $1.toUpperCase();
    })
    return str2;
}

console.log(log('join-tencent'))

