/**
 * 【题目25】输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * 【分析】
 * 时间复杂度n
 拆分成三步

1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N,把N直接放在N的next位置，让复制后的链表和原始链表组成新的链表。

2.给复制的链表random赋值，即N.random=N.random.next。

3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。
 * 
 */



 function Clone(pHead){
     if(pHead === null){
         return null;
     }
     cloneNodes(pHead);
     cloneRandom(pHead);
     return reconnectNodes(pHead);
 }

 function cloneNodes(pHead){
    var current = pHead;
    while(current){
        //创建克隆指针
        var cloneNode = {
            label:current.label,
            //指定克隆指针的下一个节点
            next:current.next
        }
        //链接 指定克隆节点的前一个结点
         current.next = cloneNode;
         //!!!!!!!!!!!!更新current节点
         current = cloneNode.next;
    }
 }

 function cloneRandom(pHead){
     var current  = pHead;
     while(current){
         var cloneNode = current.next;
         //查找当前指针是否有随机指针
         if(current.random){
             cloneNode.random = current.random.next;
         }else{
             cloneNode.random = null;
         }
         //更新克隆指针
         current = cloneNode.next;
     }
 }


 function reconnectNodes(pHead){
     var cloneHead = pHead.next;
     var cloneNode = pHead.next;

     var current = pHead;
     while(current){
         //原始链表
         current.next = cloneNode.next
         //原始链表向前移动下一个节点
         current = cloneNode.next;

         if(current){
            cloneNode.next = current.next;
            //复制链表向前移动一个节点
            cloneNode = current.next;
         }else{
            cloneNode.next = null;
         }

     }
     return cloneHead;
 }



