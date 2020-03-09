/**
 * 【题目20】
 * 定义栈的数据结构，
 * 请在该类型中实现一个能够得到栈中所含最小元素的min函数
 * （时间复杂度应为O（1））。
 * 【分析】
 * 增加了一个辅助栈，每次压入数据栈时，把当前栈里面最小的值压入辅助栈当中。
 * 这样辅助栈的栈顶数据一直是数据栈中最小的值。
 * 比如，
 * data中依次入栈,  5, 4, 3, 8, 10, 11, 12, 1
 * 则min依次入栈，  5, 4, 3, 3,  3,  3,  3, 1
 */
var dataStack = [];
var minStack = []; 

function push(node)
{
    dataStack.push(node);
    // write code here
    if(minStack.length === 0|| node < min()){
        minStack.push(node)
    }else{
        minStack.push(min())
    }

}
function pop()
{
    // write code here
    minStack.pop();
    return dataStack.pop();

}
function top()
{
    // write code here
    var length = dataStack.length;
    return length>0 && dataStack[length-1] 

}
function min()
{
    // write code here
    var length = minStack.length
    return length>0 && minStack[length-1];

}