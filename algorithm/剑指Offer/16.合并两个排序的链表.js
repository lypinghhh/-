/**
 * 【题目16】
 * 输入两个单调递增的链表，
 * 输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 * 【分析】
 * 不断地比较他们的头结点就行
 * 考虑代码的鲁棒性，也是递归的终止条件，两个head为null的情况，取对方节点返回。
 */

 function Merge(pHead1,pHead2){
     if(!pHead1){
         return pHead2;
     }
     if(!pHead2){
         return pHead1;
     }
     let head  = null;
     if(pHead1.val < pHead2.val){
         head = pHead1;
         head.next = Merge(pHead1.next,pHead2)
     }else{
         head =  pHead2;
         head.next = Merge(pHead1,pHead2.next)
     }
     return head;
 }