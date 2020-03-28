//第一题  变换次数
//对一个数做若干次变换，直到这个数只剩下一个数字
//输入一个正整数输出一个整数 285，输出变换次数2
function timeNum(num){
    let len = num.toString().length;
    return len-1
}
console.log(timeNum(22345685))



function timeNum(num){
    let count = 0;
    while(num/10 !== 0){
        num = num / 10;
        count++;
    }
    return count;
}

//第二题 神奇数
//给出一个区间，计算区间内神奇数的个数
//神奇数，存在不同数位的两位数组成两位数，为质数
//输入两个整数a和b，代表区间  11 20
//输出为一个整数，表示区间内满足条件的整数个数 6









//第三题 组队竞赛
/**
 * 
 * @param  {...any} args 3n个选手，每个队伍的水平为第二高水平
 * 输入第一行为一个正整数n   2
 * 第二行是3n个整数，表示水平值   5 2 8 5 1 5
 * 输出10 所有队伍水平值总和最大值
 */
function team(...args){
   
    let arr = args.shift();
    if(arr.length > 4){
        arr.sort((a,b) =>{
            return a-b;
        }
        )
        return arr[arr.length-3]+arr[arr.length-4]
    }else{
        return ;
    }
     
    
}




/**
 * 说明：生成一个指定长度（默认6位）的随机字符，随机字符包含小写字母和数字。
 * 输入：输入随机字符长度，无输入默认6位
 * 输出：随机字符，如"6bij0v"
 */

function idGenerator(num = 6) {
    /* 功能实现 */
  
  let result ='';
  	for(let i=0;i<num;i++){
      //根据随机数判断生成数字还是字母
      if(Math.random()>0.5){
        result += String.fromCharCode((Math.floor(Math.random()*26)+97))
      }else{
        result += String.fromCharCode((Math.floor(Math.random()*10)+48))
    }
     
    }
  	 return result;	
}


console.log(idGenerator())
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

const queryString = {
    parse(str) {
        /* 功能实现 */
      let result = {};
      let arr = str.split('&');
      //把每个键值对分割成两个元素的数组
      arr.forEach(
        item => {
            item.split('=')
      });
      console.log(arr)
      for( let i = 0;i<arr.length;i++){
          console.log(arr)
        //元素数组的第一个元素为键 是否已存在
        if(result[arr[i][0]]){
          result[arr[i][0]].push(arr[i][1])
        }else{
 		result[arr[i][0]]=arr[i][1]
      	
      }
        return result;
      }
    },
    stringify(obj ={}) {
        /* 功能实现 */
      let arr=[];
      //注意使用of报错  TypeError: obj is not iterable
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
      
      
    },
};

console.log(queryString.stringify( {foo: 'bar',abc: ['xyz', '123']}))






function fn(nth){
  for(let i =1;i <= Nn;i++){
    while(i>=5){
        count++;
        
    }
}
}
function fn(nth){
  for(let i =1;i <= Nn;i++){
    while(i>=5){
        count++;
        
    }
}
}


function born(n){
  let count = 1;
  for(let i =1;i <= n;i++){
      if(i>=5){
          count++;
          deepBorn(i,n,count)
          
      }
  }
  return count;
}


function fn(n){
  if(n>990){
      return 1;
  }   
  return n*0.01
  
}



function log(obj){
  for(let key in obj){
    if(typeof obj1[key] === "string"){
      console.log(`${key}=${obj1[key]}`)
    }else if(typeof obj[key] === "object"){
      for(let key in obj[key]){
        console.log(`${key}=${obj[key]}`)
      }
    }
  }
}





function log(obj,parentKey = ''){

  //遍历的属性包含原型链上扩展的属性

  for(const key in obj){

     //过滤出自身的属性

      if(obj.hasOwnProperty(key) ) {

         let keyName = `${parentKey}${key}`;

         if(typeof obj[key] === 'object'){

             //递归深入

             log(obj[key],`${keyName}.`)

         }else{
            console.log(`${keyName} = ${obj[key]}`)
           

         }

      }



  }

  
}


log({
  foo : 'test',
  bar : {
      id : 123,
      name : 'tx'
  }
})