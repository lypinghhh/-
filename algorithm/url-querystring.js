/**
 * 简单实现一个queryString，具有parse和stringify的能力，
 * parse，用于把一个URL查询字符串解析成一个键值对的集合。
 * 输入：查询字符串 'foo=bar&abc=xyz&abc=123'
 * 输出：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * stringify，相反的，用于序列化给定对象的自身属性，生成URL查询字符串。
 * 输入：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * 输出：查询字符串 'foo=bar&abc=xyz&abc=123'
 */



 var  obj1 =   {
     foo: 'bar',
     abc: ['xyz', '123'],
 }
const queryString = {
    parse(querystring) {
        /* 功能实现 */
        //1.按 & 符号将字符串中单个键值对分隔开 
        let list = querystring.split('&');
        //初始化返回的对象
        let ret = {}


        //对键值对数组 的每一项 进行 键/值 拆分
        list.forEach(item => {
            //将键值对通过=号分隔开
            slices = item.split('=');
            //数组第一个元素是键
            let key = slices[0];
            //数组第二个元素是值
            let val = slices[1];

            //将键插入对象中时进行判断，看该键是否已经存在
            //1.如果该键已经存在，
            if (ret[key]) {
                //判断值是否为含有两个或两个以上元素的数组 
                //或者是单个值（此时若想插入新的值，则需要先把原始的值变为数组）
                ret[key] = Array.isArray(ret[key]) ? ret[key] : [ret[key]];
                ret[key].push(val);
            } else {
                //该键不存在直接创建新的键值
                ret[key] = val;
            }
        });


        return ret;
    },
    stringify(obj) {
        /* 功能实现 */
     
            /* 功能实现 */
          let arr=[];
          for( let key in obj){
              if(typeof obj[key] === 'object'){
              while(obj[key].length >0){
                  arr.push(`${key}=${obj[key].shift()}`);
              }
            }else{
              arr.push(`${key}=${obj[key]}`)
            }
            
          
          }
        return arr.join('&')
          
          
        }


    };


console.log(queryString.parse('foo=bar&abc=xyz&abc=123'))








//parse  方法二：正则表达式

var parse = function (querystring) {
    let ret = {};
    //注意正则表达式的匹配
    let reg = /([^&]*)=([^&]*)/g;
    let matches;

    while (matches = reg.exec(querystring)) {
        console.log(matches)
        //注意是选的第一、第二个元素
        let key = matches[1];
        let val = matches[2];

        if (ret[key]) {

            ret[key] = Array.isArray(ret[key]) ? ret[key] : [ret[key]];
            ret[key].push(val);
        } else {

            ret[key] = val;
        }
    }

    return ret;
}

console.log(parse('foo=bar&abc=xyz&abc=123'))



console.log('agfdhfsd')
console.log(queryString.stringify(obj1))