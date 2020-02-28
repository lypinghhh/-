const div1 = document.getElementById('div1')





// let timer = null

// div1.addEventListener('drag',function(e){
//     if(timer){
//         return
//     }
//     timer = setTimeout( () =>{
//         console.log(e.offsetX,e.offsetY)
//         timer = null;
//     },500 )
    
// })




function throttle(fn,delay = 1000){
    let timer = null;
    return function (){
        if(timer){
            return
        }
        timer = setTimeout(() =>{
            //传递参数，例如此处的e
            fn.apply(this,arguments)
            timer = null
        },delay )
    }
}

div1.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
}))



//时间
function throttle2(fn, wait) {
	let prev = new Date();
	return function() { 
	    const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(this, args);
			prev = new Date();
		}
    }
}


//标志位
// 节流函数
const throttle3 = (fn, delay = 500) => {
    let flag = true;
    return (...args) => {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      }, delay);
    };
  };