const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout( () => {
//         //模拟触发chage事件
//         console.log(input1.value)
//         //清空定时器
//         timer = null
//     },500)
    
// })


function debounce(fn,delay = 500){
    //timer是闭包中的，被隐藏不会被外面拿到
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout( () => {
            //debounce 可能会传入参数 
            //fn()，不能使用箭头函数
            //确保上下文环境为当前的this
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

input1.addEventListener('keyup',debounce( function(){
    console.log(input1.value)
},1000 ))

/**
 * yayu--underscore 专题
 */


 function debounce2(func,wait){

    var timeout;


    return function(){
    
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context,args);
        },wait)

    }

 }




//箭头函数
// 防抖函数
const debounce3 = (fn, delay) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

