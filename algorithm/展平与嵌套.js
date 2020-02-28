/**
 * 
var entry = {
a: {
b: {
  c: {
    dd: 'abcdd'
  }
},
d: {
  xx: 'adxx'
},
e: 'ae'
}
}

// 要求转换成如下对象
var output = {
'a.b.c.dd': 'abcdd',
'a.d.xx': 'adxx',
'a.e': 'ae'
}
 */
var entry = {
    a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
    }
    }

    
 function flatObj(obj,parentKey = '',result = {}){
     //遍历的属性包含原型链上扩展的属性
     for(const key in obj){
        //过滤出自身的属性
         if(obj.hasOwnProperty(key) ) {
            let keyName = `${parentKey}${key}`;
            if(typeof obj[key] === 'object'){
                //递归深入
                flatObj(obj[key],`${keyName}.`,result)
            }else{
                result[keyName] = obj[key];
            }
         }

     }
     return result;
 }

 console.log(flatObj(entry));



 //展平 改成嵌套
 var entry2 = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
  }

  function map(entry) {
    const obj = Object.create(null);
    console.log(obj);
    for (const key in entry) {
      const keymap = key.split('.');
      console.log(keymap)
      set(obj, keymap, entry[key])
    }
    return obj;
  }

  function set(obj, map, val) {
    let tmp;
    console.log('obj[map[0]]',obj[map[0]])
    if (!obj[map[0]]) obj[map[0]] = Object.create(null);
    tmp = obj[map[0]];
    for (let i = 1; i < map.length; i++) {
        console.log('tmp[map[i]]',tmp[map[i]])
      if (!tmp[map[i]]) tmp[map[i]] = map.length - 1 === i ? val : Object.create(null);
      console.log('tmp[map[i]]',tmp[map[i]])
      tmp = tmp[map[i]];
      console.log('tmp',tmp)
    }
  }
  console.log(map(entry2));