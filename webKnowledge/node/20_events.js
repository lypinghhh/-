// EventEmitter是nodejs内建对象
//引入
const EventEmitter = require('events');

//定义类并继承
class CustomEvent extends EventEmitter{
    
}

//实例化
const ce = new CustomEvent();

//绑定事件，并添加事件处理程序
ce.on('test',()=>{
    console.log('ajjj')
})

//定时触发
setInterval(()=>{
    ce.emit('test')
},500)




//通用的事件处理程序
ce.on('error',(err,time)=>{
    console.log(err,time)
})
//触发事件可添加附加信息
ce.emit('error',new Error('错误'),Date.now())



