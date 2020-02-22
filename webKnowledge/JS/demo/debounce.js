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
    //timer是闭包中的
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout( () => {
            //debounce 可能会传入参数 
            //fn()
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

input1.addEventListener('keyup',debounce( function(){

},1000 ))




