/**
 * normalize帮我们把路径进行处理，改成比较标准的形式
 */
//const normalize = require('path').normalize
//es6的写法
const {normalize} = require('path');

console.log(normalize('/user//local/bin'))
console.log(normalize('user//local/../bin'))