/**
 * argv
 * argv0
 * execArgv
 * execPath
 */
const { argv,argv0,execArgv,execPath} = process;

argv.forEach( item =>{
    console.log(item);
    //可包含命令行传入的参数
})

console.log(argv0);
console.log(execArgv);
console.log(execPath);
