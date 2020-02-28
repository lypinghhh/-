const path = require('path')

const mod = require('./05_modA')
console.log(mod.test);

//node模块传入的时候都会包裹一个方法，方法中包含__dirname __filename
console.log('__dirname    ',__dirname);


console.log('process.cwd()',process.cwd())

console.log('./           ',path.resolve('./'))



//均为当前的路径 pwd