function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        //obj是null，或者不是对象和数组，直接返回
        return obj;
    }
    //初始化返回结果
    let result ;
    if(obj instanceof Array){
        return [];

    }else{
        return {}
    }

    for(let key in obj){
        //保证不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result;
}