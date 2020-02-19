
//bind示例

// function fn1(a,b,c){
//     console.log('this',this)
//     console.log(a,b,c);
//     return 'this is fn1'
// }

// const fn2 = fn1.bind({x:100},10,20,30)
// const res = fn2()
// console.log(res)



//模拟bind
Function.prototype.bind1 = function(){
    //将参数拆解为数组,arguments是列表，不是数组
    const args = Array.prototype.slice.call(arguments)

    //获取this (数组第一项)
    const t = args.shift();
    

    //fn1.bind(...)中的fn1，bind是返回一个函数
    const self = this;

    // bind 是 返回一个函数
    return function(){
        //apply第一个参数是this,第二个参数是数组
        return self.apply(t,args)
    }



}