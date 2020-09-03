/**
 * 【题目24】输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 * 
 * 【分析】
 * 套用回溯算法的思路
 * 设定一个结果数组result来存储所有符合条件的路径
 * 设定一个栈stack来存储当前路径中的节点
 * 设定一个sum来标识当前路径之和
 * 1.从根节点开始深度优先遍历，每经过一个节点，将节点入栈
 * 2.到达叶子节点，且当前路径之和等于给定目标值，则找到一个可行的解决方案，将其加入结果数组
 * 3.遍历到二叉树的某个节点时有2个可能的选项，选择前往左子树或右子树
 * 4.若存在左子树，继续向左子树递归
 * 5.若存在右子树，继续向右子树递归
 * 6.若上述条件均不满足，或已经遍历过，将当前节点出栈，向上回溯
 * 
 * 
 */


function FindPath(root, expectNumber) {
    const result = [];
    if (root) {
        FindPathCore(root, expectNumber, [], 0, result);
    }
    return result;
}
function FindPathCore(node, expectNumber, stack, sum, result) {
    //将节点入栈，累加节点值
    stack.push(node.val);
    sum += node.val;
    //到达叶子节点，判断和是否为指定值
    if (!node.left && !node.right && sum === expectNumber) {
        result.push(stack.slice(0));
    }
    if (node.left) {
        FindPathCore(node.left, expectNumber, stack, sum, result)
    }
    if (node.right) {
        FindPathCore(node.right, expectNumber, stack, sum, result)
    }
    stack.pop();
}