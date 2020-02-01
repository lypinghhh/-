


// function fn(){
//     var a = 12;
//         b = 13;
//         console.log(a,b); //12,13
// }

// fn();
// console.log(a,b);//not define





function fn(){
  // console.log(b);//Uncaught ReferenceError: b is not defined
        b = 13;
        console.log('b' in window)//true在作用域链查找的过程中，若找到window也没有，则相当于给window设置属性 window.b =13
        // 无法检测 是不经声明的全局变量 还是 window下的属性
        console.log(b); //13
}

fn();
console.log(b);//13


// window.b = 13;
// console.log(b);//window.b的简写  13 

//es6
let a = 13;
console.log(a);//13
console.log(window.a);//undefined