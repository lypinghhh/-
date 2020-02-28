const {env} = process;

console.log(env);
console.log(process.cwd());


//同步的执行完了之后才能执行异步的操作
setImmediate(()=>{
    console.log('setImmediate');
});

setTimeout(()=>{
    console.log('timeout');
},0)

process.nextTick(()=>{
    console.log('nextTick')
})