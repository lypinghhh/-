/**
 * 【题目23】输入一个整数数组，
 * 判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。
 * 假设输入的数组的任意两个数字都互不相同。
 * 【分析】
 * 二叉搜索树是经过排序的
 * 1.后序遍历：
 * 分成三部分:
 * 最后一个节点为根节点，
 * 第二部分为左子树的值=>比根节点都小
 * 第三部分为右子树的值=>比根节点都大
 * 2.先检测左子树，左侧比根节点小的值都判定为左子树
 * 3.除最后一个节点外和左子树外的其它值=>右子树
 * 检测 若右子树有一个比根节点小，则返回false
 * 4.若存在，左、右子树递归检测是否符合规范。
 */

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence && sequence.length >0){
        var root = sequence[sequence.length - 1];
        //注意 遍历到倒数第二个元素，排除根元素
        for(var i = 0 ;i < sequence.length-1;i++){
            if(sequence[i] > root){
                break;
            }
        }
        //遍历到左右分界点
        for(let j = i;j<sequence.length-1;j++){
            //查找右子树里是否存在小于根的树
            if(sequence[j] < root){
                return false;
            }
        }
        //判断左子树是不是二叉查找树
        var left = true;
        if(i>0){
            left = VerifySquenceOfBST(sequence.slice(0,i));
        }
        //判断右子树是不是二叉查找树
        var right = true;
        if(i<sequence.length-1){
            right = VerifySquenceOfBST(sequence.slice( i,sequence.length-1));
        }
        return left && right;
    }
}