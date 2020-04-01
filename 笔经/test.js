/**
 * 腾讯一面
 * @param {*} arr 
 */

//1
function unique(arr){
    return [...new Set(arr)];
}
unique([2,4,5,6,8,4,3,4,3])

//2
function log(str){
    let str2 = str.replace(/[-|_](\w)/g,function($0,$1){
        return $1.toUpperCase();
    })
    return str2;
}

console.log(log('join-tencent'))
console.log(log('join_tencent'))

//腾讯 二面
function maxLength(root){
    if(root){
        let left = TreeDepth(root.left);
        let right = TreeDepth(root.right);
        return left + right -1;
    }
    
    return 0;
}


function TreeDepth(pRoot){
    return pRoot !== 0 ?Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) +1:0;
}