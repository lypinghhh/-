//闭包隐藏数据，只提供API
function createCache(){
    //闭包中的数据，被隐藏，不被外界访问
    const data = {};
    return {
        set: function (key,val) {
            data[key] = val
        },
        get: function (key){
            return data[kay]
        }
    }
}

//data不能被外界作用域访问，只能用定义好的方法
const C = createCache();
//返回函数
C.set('A',100)
console.log(c.get('A'))


