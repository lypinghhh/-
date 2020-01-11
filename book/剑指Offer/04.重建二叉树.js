/**
 * 【题目】
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 * 【分析】
 * 前序遍历：根节点 + 左子树前序遍历 + 右子树前序遍历
 * 中序遍历：左子树中序遍历 + 根节点 + 右子数中序遍历
 * 后序遍历：左子树后序遍历 + 右子树后序遍历 + 根节点
 * 【算法步骤】
 * 前序遍历找到根节点 root
 * 找到root在中序遍历中的位置 ->左子树的长度和右子树的长度
 * 截取左子树的中序遍历、右子树的中序遍历
 * 截取左子树的前序遍历、右子树的前序遍历
 * 递归重建二叉树
 */


 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree1(pre, vin)
{
    // write code here
    //判断是否是空子树
    if(pre.length === 0){
        return null;
    }
    //判断是否只有一个结点,是的话以此为根创建树
    if(pre.length === 1){
        return new TreeNode(pre[0]);
    }
    //先序遍历找出根
    const value = pre[0];
    //中序遍历定位根，及左右两侧为子树
    const index = vin.indexOf(value);
    //截取左右子树的中序遍历
    const vinLeft = vin.slice(0,index);
    const vinRight = vin.slice(index+1);
    //根据左右子树的长度，在前序遍历中截取左右子树的前序遍历
    const preLeft = pre.slice(1,index+1);
    const preRight = pre.slice(index+1);
    //递归左右子树
    const node = new TreeNode(value);
    node.left = reConstructBinaryTree(preLeft,vinLeft);
    node.right = reConstructBinaryTree(preRight,vinRight);
    return node; 
}


function reConstructBinaryTree2(pre, vin){
    if(pre.length === 0 || vin.length === 0){
        return null;
    }
    // 前序第一个是根节点，也是中序左右子树的分割点
    const index  = vin.indexOf(pre[0]);
    const left = vin.slice(0,index);
    const right = vin.slice(index+1);
    //递归
    return {
        val:pre[0],
        left: reConstructBinaryTree2(pre.slice(1,index+1),left),
        right:reConstructBinaryTree2(pre.slice(index+1),right)
    }
}