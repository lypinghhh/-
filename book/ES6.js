

//立即执行函数表达式
for(const i = 0;i< 10;i++){
    (function(){
        console.log(i)
    })(i)
}




//块级绑定
var funcs = [];
for(let i = 0;i< 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs.forEach(item => {
    item()
})




let obj = {
    a:'1',
    b:'2'
}

for(const key in obj){
    console.log(key)
}