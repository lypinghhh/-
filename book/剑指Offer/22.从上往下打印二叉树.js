/**
 * 【题目22】
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * 【分析】
按层次打印，其实也就是树的广度遍历。

一般来说树的广度遍历用队列，利用先进先出的特点来保存之前节点，并操作之前的节点。

树的深度遍历一般来说用栈或者递归，利用先进后出的特点来保存之前节点，把之前的节点留到后面操作。
 * 思路：
 队列 先进先出 广度优先遍历二叉树
 每一次打印一个结点的时候，如果该节点有子节点，则把该节点的子节点放到一个队列的末尾。
 接下来到队列的头部取出最早进入队列的节点，重复前面的打印操作，直到队列中所有的节点都被打印出来为止。
 */




 function PrintFromTopToBottom(root){

    const queue = [],
            res = [];

    if(root === null){
        return res;
    }
    queue.push(root);

    while (queue.length){
        const pRoot =  queue.shift();
        if(pRoot.left !== null){
            queue.push(pRoot.left);
        }
        if(pRoot.right !== null){
            queue.push(pRoot.right)
        }
        res.push(pRoot.val);
    }
    return res;


 }