/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //注意判断数组为空的情况
    if(!this.stack.length){
        return null;
    }
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //先进行slice，浅拷贝
    return this.stack.slice().sort( (a,b) => a-b )[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */