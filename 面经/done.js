//call

Function.prototype.myCall = function(context = window,...args){
    if(this === Function.prototype){
        return undefined;
    }
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

//apply

Function.prototype.myApply = function(context = window,args){
    if(this === Function.prototype){
        return undefined;
    }
    context.fn = this;
    var result;
    if(Array.isArray(args)){
      result =   context.fn(...args)
    }else{
       result = context.fn()
    }

   delete context.fn;
   return result;
}

//bind

Function.prototype.myBind = function(context,...args1){
    if(this === Function.prototype){
        throw new TypeError('Error')
    }
    const _this = this;
    return function F(...args2){
        if(this  instanceof F){
            return new _this(...args1,...args2)
        }
        return _this.apply(context,args1.concat(args2))

    }

}

//EventEmitter 发布订阅


function EventEmitter(){
    this._maxListeners = 10;
    this._events = Object.create(null);
}

EventEmitter.prototype.addListener = function(type,listener){
    if(!this._events){
        this._events = Object.create(null);
    }
    if(this._events[type]){
        this._events[type].push(listener)
    }else{
        this._events[type] = [listener];
    }
}

EventEmitter.prototype.removeListener = function(type,listener){
    if(Array.isArray(this._events[type])){
        if(!listener){
            delete this._events[type];
        }else{
            this._events[type] = this._events[type].filter(e => e !== listener)
        }
    }
}




//第二种做法


class EventEmitter{
    constructor(){
        this.handlers = {};
    }
    on(eventName,cb){
        if(!this.handlers[eventName]){
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(cb);
    }
    emit(eventName,...args){
        if(this.handlers[eventName]){
            this.handlers[eventName].forEach((cb) =>{
                cb(...args);
            } )
        }
    }
    off(eventName,cb){
        const callbacks = this.handlers[eventName];
        const index = callbacks.indexOf(cb);
        if(index !== -1){
            callbacks.splice(index,1)
        }


    }
    once(eventName,cb){
        const wrapper = (...args) =>{
            cb.apply(this,args);
            this.off(eventName,cb)
        }
        this.on(eventName,wrapper)
    }
}



//防抖

function debounce(fn,delay = 50){
    let timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

//防抖立即执行

function debounce(event,time,flag){
    let timer = null;
    return function(...args){
        clearTimeout(timer)
        if(flag && !timer){
            event.apply(this,args);
        }
        timer = setTimeout(() =>{
            event.apply(this,args)
        },time)
    }
}


//节流

function throttle(event,time){
    let pre = 0;
    return function(...args){
        if(Date.now() - pre > time){
            pre = Date,now;
            event.apply(this,args)
        }
    }
}



function throttle(event,time){
    let timer = null;
    return function(...args){
        if(!timer){
            timer = setTimeout(() =>{
                timer = null;
                event.apply(this,args)
            },time)
        }
    }
}


function throttle(event,time){
    let pre = 0;
    let timer = null;
    return function(...args){
        if(Date.now() - pre > time){
            clearTimeout(timer);
            timer  = null;
            pre = Date.now();
            event.apply(this,args);
        }else if(!timer){
            timer = setTimeout(() =>{
                event.apply(this,args);
            },time)
        }
    }
}


//浅拷贝


JSON.parse(JSON.stringify(obj))


//去重
const unique = (array) =>{
    let container ={};
    return array.filter((item,index) =>
        container.hasOwnProperty(item)?false:(container[item] = true)
    )
}

console.log(unique([1,2,3,4,2,3]))

const unique = arr => arr.filter((e,i) => arr.indexOf(e) ===i )

const unique = arr => Array.from(new Set(arr));
const unique = arr => [...new Set(arr)];

const unique = (array) =>{
    array.sort((a,b) =>{
        a-b;
    })
    let pre = 0;
    const result = [];
    for(let i = 0;i<array.length;i++){
        if( !i||array[i] != array[pre]){
            result.push(array[i])
        }
        pre = i;
    }
    return result;
}

const filterNonUnique = arr => arr.filter(i => 
    arr.indexOf(i) === arr.lastIndexOf(i)
  )
  

//扁平
const flat = (array) =>{
    const result = [];
    for(let i = 0;i<array.length;i++){
        if(Array.isArray(array[i])){
           //注意返回的是新数组
            result = result.concat(flat(array[i]))
        }else{
            result.push(array[i])
        }
    }
    return result;
}

function flatten(array){
    return array.reduce((target,current) =>{
        Array.isArray(item)?target.concat(flatten(current)):target.concat(current);
    },[])
}

function flattenByDeep(array, deep = 1) {
    return array.reduce(
      (target, current) =>
        Array.isArray(current) && deep > 1 ?
          target.concat(flattenByDeep(current, deep - 1)) :
          target.concat(current)
      , [])
  }

const max = array => array.reduce((c,n)=>Math.max(c,n))

  console.log(max([2,6,8,9]))


  Array.prototype.reduceToMap = function(handler){
      return this.reduce((target,item,index)=>{
        target.push(handler.call(this,item,index))
        return target;
      },[])
  }

  Array.prototype.reduceToFilter = function (handler) {
    return this.reduce((target, current, index) => {
      if (handler.call(this, current, index)) {
        target.push(current);
      }
      return target;
    }, [])
  };


//洗牌
  function disorder(array) {
    const length = array.length;
    let current = length - 1;
    let random;
    while (current >-1) {
      random = Math.floor(length * Math.random());
      [array[current], array[random]] = [array[random], array[current]];
      current--;
    }
    return array;
  }
//柯里化
  function curry(fn,...args){
      if(args.length >= fn.length){
          return fn(...args)
      }else{
          return function(...args2){
              return curry(fn,...args,...args2)
          }
      }

  }
//JSONP
function jsonp(url,params,callback){
    return new Promise((resolve,reject) =>{
        let script = document.createElement('script')
        window[callback] = function(data){
            resolve(data)
            document.body.removeChild(script)
        }
        params = {...params,callback}
        let arrs = [];
        for(let key in params){
            arrs.push(`${key}=${params[key]}`)
        }
        script.src = `${url}?${arrs.join('&')}`
        document.body.appendChild(script)

    })
}

//promise


//继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(child1);



// instanceof

function myInstanceof(left, right) {

    let proto = Object.getPrototypeOf(left), // 获取对象的原型
 
      prototype = right.prototype; // 获取构造函数的 prototype 对象
 
 
 
    // 判断构造函数的 prototype 对象是否在对象的原型链上
 
    while (true) {
 
      if (!proto) return false;
 
      if (proto === prototype) return true;
 
 
 
      proto = Object.getPrototypeOf(proto);
 
    }
 
  }


  //ajax Promise



function ajax(url){

    const p = new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest()

        xhr.open('GET',url,true)

        xhr.onreadystatechange = function () {

            if(xhr.readyState === 4){

                if(xhr.status === 200){

                    resolve(JSON.parse(xhr.responseText))

                }else if (xhr.status === 404){

                    reject(new Error('404 not found'))

                }

            }

        }

        xhr.send(null)

    })

    return p;

}


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


//闭包实现每隔一秒打印 1,2,3,4
for(var i = 0;i<5;i++){
    (function(j){
        setTimeout(()=>{
            console.log(j)
        },1000*j)
    })(i)
}

//千分位
function commafy(num){
    return num && num.toString().replace(/(?!^)(?=(\d{3})+\.)/g,',')
}

console.log(commafy(124334656367.23))