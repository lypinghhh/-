function TreeDepth(pRoot)
{
    // write code here
    if(pRoot === null ){
        return 0;
    }
    return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1;
}