


function FindFirstCommonNode(pHead1,pHead2){
    //其中一个链表为空，则不存在公共节点
    if(!pHead1 || !pHead2 ) {return null};

    //获取到两个链表的长度
    let len1 = getLength(pHead1),
        len2 = getLength(pHead2);
        let long,short,interval;
        //长链表先行
        if(len1 - len2 > 0){
            long = pHead1;
            short = pHead2;
            //注意是长度相减取差值
            interval = len1-len2;
        }else{
            long = pHead2;
            short = pHead1;
            interval = len2-len1;
        }
        while(interval--){
            long = long.next;
        }
        while(long){
            //比较相等
            if(long === short){
                return long;
            } 
            long = long.next;
            short = short.next;
            
        }
        return null;
}

function getLength(head){
    let current = head;
    let result = 0;
    while(current){
        result++;
        current = current.next;
    }
    return result;
}