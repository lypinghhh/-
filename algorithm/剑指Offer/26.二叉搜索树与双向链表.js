/**
 * 【题目26】
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 * 【分析】
 * 把树分为三个部分：根节点、左子树、右子树
 * 把左子树中最大的节点、根节点、右子树中最小的节点连接起来
 * 二叉搜索树的中序遍历即排序后的序列

1.递归左子树，找到左子树的最后一个节点，根节点左侧连接到左子树的最后一个节点
2.当前节点变为已经转换完成的链表的最后一个节点
3.递归右子树，找到当前树的最后一个节点
4.回溯到上一层，进行链接...
 * 
 */

 function Convert(pRootOfTree){
     if(!pRootOfTree){
         return null;
     }
     ConvertCore(pRootOfTree);
     while(pRootOfTree.left){
         pRootOfTree = pRootOfTree.left
     }
     //返回首节点
     return pRootOfTree;
 }


//last是已经转换成的链表的最后一个节点
 function ConvertCore(node,last){
    if(node.left){
        last = ConvertCore(node.left,last);
    }
    //node的左指针 指向左子树的最后一个
     node.left = last;
     if(last){
         //左子树的最后一个的右指针，指向node
         last.right = node;
        }
    //将根节点与左子树合并之后的 尾节点
    last = node;
    if(node.right){
        last = ConvertCore(node.right,last);
    }
    return last;
 }
