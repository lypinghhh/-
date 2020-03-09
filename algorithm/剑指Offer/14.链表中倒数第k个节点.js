/**
 * 【题目14】
 * 输入一个链表，输出该链表中倒数第k个结点。
 * 【分析】
 * 两个指针中间相距k-1个节点
 * 第一个指针先走先走k-1步
 * 第二个指针随后赶上一起走
 * 当第一个指针指向尾节点时
 * 第二个指针指向倒数第k个
 */

function FindKthToTail(head, k) {
    if (head === null || k <= 0) return null;
    let pNode1 = head,
      pNode2 = head;
    while (--k) {
      if (pNode2.next !== null) {
        pNode2 = pNode2.next;
      } else {
        return null;
      }
    }
    while (pNode2.next !== null) {
      pNode1 = pNode1.next;
      pNode2 = pNode2.next;
    }
    return pNode1;
  }