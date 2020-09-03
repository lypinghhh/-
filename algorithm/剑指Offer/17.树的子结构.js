/**
 * 【题目17】
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * （ps：我们约定空树不是任意一个树的子结构）
 * 【分析】
 * 首先找到A树中和B树根节点相同的节点
 * 从此结点开始，递归AB树比较是否有不同节点
 */

function HasSubtree(pRoot1, pRoot2) {
    //若左右子树有一方为空 ，或双方均为空，则不存在子结构 
    let result = false;

    if (pRoot1 && pRoot2) {
        if (pRoot1.val === pRoot2.val) {
            result = compare(pRoot1, pRoot2);
        }

        if (!result) {
            result = HasSubtree(pRoot1.right, pRoot2)
        }
        if (!result) {
            result = HasSubtree(pRoot1.left, pRoot2)
        }

    }
    return result;
}


function compare(pRoot1, pRoot2) {

    if (pRoot2 === null) {
        return true;
    }
    if (pRoot1 === null) {
        return false;
    }
    if (pRoot1.val !== pRoot2.val) {
        return false;
    }
    return compare(pRoot1.right, pRoot2.right) && compare(pRoot1.left, pRoot1.left)
}



const arr = [1, [2, 3],
    [4, [5, 6, [7, 8, 9]]]
];


Array.prototype.newFlat = function(deep = 1){
    const arr = this;
    return arr.reduce((target,current) =>{
        console.log(target,current)
        Array.isArray(current) && deep > 1?
        target.concat(current.newFlat(deep - 1)):
        target.concat(current)
    },[])
}



console.log(arr.newFlat()) 
//=> [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(1)) 
//=> [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.newFlat(2)) 
//=> [1, 2, 3, 4, 5, 6, [7, 8, 9]];
console.log(arr.newFlat(3)) 
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.newFlat(4)) 
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9];
