const mod = require('./08_global')
console.log(mod.testVar);
//报错，有自己的作用域，默认没有暴露到全局中
console.log(testVar2);
