/**
 * 【题目15】
 * 输入一个链表，反转链表后，输出新链表的表头。
 * 【分析】
 * 以链表的头部节点为基准节点
 * 将基准结点的下一个节点挪到头部作为头节点
 * 将基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成。
 */


 function ReverseList(pHead){
    let currentNode = null;
    let headNode = pHead;
    while(pHead && pHead.next){
        //pHead不断遍历之后的节点
        currentNode = pHead.next
        pHead.next = currentNode.next
        currentNode.next = headNode;
        //headNode是已经挪到前面的部分
        headNode  = currentNode             
    }
    return headNode;
 }



