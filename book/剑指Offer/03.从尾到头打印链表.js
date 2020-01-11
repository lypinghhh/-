/**
 * 【题目】
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 * 【分析】
 * val属性存储当前的值，next属性存储下一个节点的引用。
 * 要遍历链表就是不断找到当前节点的next节点，当next节点是null时，说明是最后一个节点，停止遍历。
 * 从尾到头的顺序，使用一个队列来存储打印结果，每次unshift从队列头部插入。
 */



 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead1(head)
{
    // write code here
    const array = [];
    //遍历节点
    while(head){
        array.unshift(head.val);
        head = head.next;
    }
    return array;
}


function printListFromTailToHead2(head) {
    // write code here
    const res = [];
    let pNode = head;
    while (pNode !== null) {
      res.unshift(pNode.val);
      pNode = pNode.next;
    }
    return res;
  }