/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：


	左括号必须用相同类型的右括号闭合。
	左括号必须以正确的顺序闭合。


注意空字符串可被认为是有效字符串。


 */






/**
 * 方法一：
 * 将所有括号依次入栈，查看当前入栈的元素是否和顶部的元素是配对的括号
 * 根据最终栈是否为空来判断是否是有效的括号
 * @param {*} s 
 */
var isValid = function (s) {
    //做一个判断的映射
    let judge = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let str = s.split('');
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        //如果此时入栈的元素和栈顶的元素是配对的括号，则弹栈
        if (judge[stack[stack.length - 1]] !== str[i]) {
            stack.push(str[i]);
        } else {
            stack.pop();
        }
    }
    //判断数组为空，则为有效的括号
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};




/**
 * 方法二：左括号入栈，右括号比较
 * 自我实践
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let mapper = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let arr = s.split('')
    let stack = []
    for (let i = 0; i < arr.length; i++) {

        let v = arr[i]
        //注意是否查找到的判断条件是 是否大于-1
        if (['(', '{', '['].indexOf(v) > -1) {
            stack.push(arr[i])
        } else {
            //注意mapper中映射是从左括号映射到右括号的
            if (mapper[stack[stack.length - 1]] === arr[i]) {
                stack.pop();
            } else {
                return false;
            }
        }

    }
    if (stack.length === 0) {
        return true;
    } else {
        return false
    }
};

console.log(isValid("()[]{}"))


/**
 * 方法二 标准版
 * 
1.初始化栈 S。
2.一次处理表达式的每个括号。
3.如果遇到开括号，我们只需将其推到栈上即可,稍后处理。
4.如果我们遇到一个闭括号，那么我们检查栈顶的元素。
如果栈顶的元素是一个 相同类型的 左括号，那么我们将它从栈中弹出并继续处理。否则，这意味着表达式无效。
5.如果到最后我们剩下的栈中仍然有元素，那么这意味着表达式无效。

 * @param {*} s 
 */
var isValid = function (s) {
    //对返回值有一个初始赋值
    let vaild = true;
    const stack = [];
    const mapper = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i in s) {
        //for in遍历的是索引
        const v = s[i];
    
            if (['(', '[', '{'].indexOf(v) > -1) {
                stack.push(v);
            } else{
            //待入栈的是右括号，则弹出当前的栈顶进行比较
                const peak = stack.pop();
                if( v !== mapper[peak]){
                    return false;
                }
            }
  
    }
    if(stack.length > 0) return false;
    return vaild;
};

console.log(isValid("{[}]}"))