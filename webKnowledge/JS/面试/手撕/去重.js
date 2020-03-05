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
    arr.= Object.keys(unique).map
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





