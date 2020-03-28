/**
 * 为 Array 对象添加一个去除重复项的方法
 * 输入：[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
 * 输出：[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
 */

//法一：
Array.prototype.uniq = function () {
    let arrResult = [];
    //用于不重复添加NAN的标志
    let flag = true;
    for (let i = 0; i < this.length; i++) {
        if (arrResult.indexOf(this[i]) == -1) {
            //不等于本身 NAN
            if (this[i] != this[i]) {
                if (flag) {
                    arrResult.push(this[i]);
                    //添加NAN之后设置标志
                    flag = false;
                }
            } else {
                arrResult.push(this[i])
            }
        }

    }
    return arrResult;
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())

//法二：
Array.prototype.uniq = function () {
    return [...new Set(this)]
}

//法三：
Array.prototype.uniq = function () {
    return Array.from(new Set(this));
}

//法四
Array.prototype.uniq = function () {
    var arr = [];
    var flag = true;
    this.forEach(function (item) {
        // 排除 NaN (重要！！！)
        if (item != item) {
            flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
            flag = false;
        } else {
            arr.indexOf(item) === -1 ? arr.push(item) : ''
        }
    });
    return arr;
}
//includes


/**
 * 数组对象去重的方法
 */

var arr = [{
    key: '01',
    value: '乐乐'
}, {
    key: '02',
    value: '博博'
}, {
    key: '03',
    value: '淘淘'
}, {
    key: '04',
    value: '哈哈'
}, {
    key: '01',
    value: '乐乐'
}];

/**
 * 
 */

var arr = [{
    a: 1,
    b: 2
},
{
    a: 1,
    b: 2
},
{
    a: 1,
    b: 2
},
{
    a: 3,
    b: 4
},
]

function distinctObjectArr(arr){
    let unique = {};
    arr.forEach(function(item){
        //对象的字符串是键，对象是值
        unique[JSON.stringify(item)] = item
    })
    arr= Object.keys(unique).map
}

var arr = [{
    a: 1,
    b: 2
},
{
    a: 1,
    b: 2
},
{
    a: 1,
    b: 2
},
{
    a: 3,
    b: 4
},
]

//根据对象中指定的属性去重
function distinctObjectArr(arr,key){
    let map = new Map();
    arr.forEach((item,index) =>{
        if(!map.has(item[key])){
            //键为 key值，值为对象
            map.set(item[key],item)
        }
    })
    return [...map.values()]
}

console.log(distinctObjectArr(arr,'a'))


/**
 * 普通的数组去重
 */
//indexOf方法
 function unique(arr){
     let temp = [];
     for(let i = 0;i<arr.length;i++){
         if(temp.indexOf(arr[i]) === -1){
             temp.push(arr[i])
         }
     }
     return temp;
 }


//排序后相邻去重法

function unique(arr){
    arr.sort();
    //设置返回数组初始只有第一个元素
    let temp = [arr[0]];
    for(let i = 0; i < arr.length;i++){
        if(temp[temp.length - 1] !== arr[i]){
            temp.push(arr[i])
        }
    }
    return temp;
}




var arr5 = [NaN,NaN,{A:1},{A:1}]




//对于对象类型的使用JSON.stringify序列化为字符串，但是我没有处理不能序列化的情况，然后是用typeof+item来代替item避免出现1和'1'同时作为key的情况
var arr = [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},{"a":1},{"a":1},[1,2],[1,2],/a/,/a/,function(){console.log(1)},function(){console.log(1)}]


function func(arr){
    var obj = {};
    var res = arr.filter(function(item){
        let key;
        if(typeof(item)==="object"){
          //  对于object使用JSON.stringify
            key = JSON.stringify(item)
        }else{
          //  为了避免 1 和 '1' 这样的情况出现在同一个key中
          key = typeof(item) + item;
        }
        return obj.hasOwnProperty(key) ? false : (obj[key] = true)
    })
    console.log(obj)
    return res
}

var arr5 = [NaN,NaN,{A:1},{A:1},null,undefined]
function reduce_sort(arr){
    arr.sort(); //先排序
    // 使用reduce挨个比较去重，去重后的结果保存在init数组中
    return arr.reduce(function(init,current){
        if(init.length === 0 || init[init.length-1]!==current){
            init.push(current)
        }
        return init
    },[]);
}
console.log(reduce_sort(arr5))



function reduce_(arr){
    arr.sort();
    arr.reduce(function(init,current){
        if(init.length === 0 || init[length-1] !== current){
            init.push(current)
        }
        return init;
    },[])
}




//NAN会被过滤掉 NAN !== NAN
var arr = [1,1,2,2,3,3,4,NaN,NaN];

const unique = arr => arr.filter((e,i) => arr.indexOf(e) === i);


console.log(unique(arr))



//为啥不显示 {a:1}???
function uniqueEasy(arr){
    // 判断arr是否为数组
    if(!Array.isArray(arr)){
        console.log('type error!')
        return
    }
    let list = []
    let obj = {}
    arr.forEach(v=>{
        if(!obj[v]){
            obj[v] = true
            list.push(v)
            console.log(v,obj[v])
        }
    })
    return list
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(uniqueEasy(arr))



function unique(arr){
    // 判断arr是否为数组
    if(!Array.isArray(arr)){
        console.log('type error!')
        return
    }
    let list = []
    let obj = {}
    let isUnique = false // 是否唯一
    let type = '' // 元素类型
    let item = null // 新元素项
    arr.forEach(v=>{
        temp = ''
        type = Object.prototype.toString.call(v)
        switch(type){
            case '[object Object]':
                // 对象 对象不能做为对象的key值
                item = '[object Object]' + JSON.stringify(v)
                isUnique = obj[item]
                break;
            case '[object Symbol]':
                // Symbol Symbol不能隐式转String
                item = '[object Symbol]' + v.toString()
                isUnique = obj[item]
                break;
            default:
                item = v
                isUnique = obj[v]
        }
        if(!isUnique){
            obj[item] = true
            list.push(v)
        }
    })
    return list
}
let arr = [1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]
console.log(unique(arr))