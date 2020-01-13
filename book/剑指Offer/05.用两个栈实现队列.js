/**
 * 【题目】
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 【分析】
 * 栈1:用于入队列存储 
 * 栈2:出队列时将栈1的数据依次出栈，并入栈到栈2中 
 * 栈2出栈即栈1的底部数据即队列要出的数据。 
 * 注意:栈2为空才能补充栈1的数据，否则会打乱当前的顺序。
 * 
 */



const stack1 = [];
const stack2 = [];

function push(node)
{
    // write code here
    stack1.push(node);


}
function pop()
{
    // write code here
    //栈2为空时，补充栈2的数据
    if(stack2.length === 0){
        while (stack1.length>0){
            stack2.push(stack1.pop());
        }
    }
    //出栈操作
    return stack2.pop() || null;
}


/**
 * 【扩展】
 * 用两个队列实现一个栈
 */


 const queue1 = [];
 const queue2 = [];

function push(x){
    //对空的队列进行push操作，或用另一个队列补充
    if(queue1.length === 0){
        queue1.push(x);
        while(queue2.length){
            queue1.push(queue2.shift())
        }
    }else if(queue2.length === 0){
        queue2.push(x);
        while(queue1.length){
            queue2.push(queue1.shift())
        }
    }
}




 function pop(){
     //两个队列不为空，即可进行弹栈操作
     if(queue1.length!==0){
         return queue1.shift();
     }else{
         return queue2.shift();
     }
 }