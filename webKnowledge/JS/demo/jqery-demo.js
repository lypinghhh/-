class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0;i<length;i++){
            this[i] = result[i]
        }
        this.length = length
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0;i < this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type,fn){
        return this.each(elem =>{
            elem.addEventListener(type,fn,false)
        })
    }
    //阔以扩展很多DOM操作的API

}


// 使用，控制台
// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem)=>console.log(elem.nameNode))
// $p.on('click',()=> alert('clicked'))




//插件
jQuery.prototype.dialog = function(){
    alert(info)
}

//复写 “造轮子”
 
class myJQuery extends jQuery {
    constructor(selector){
        super(selector)
    }
    //扩展自己的方法
    addClass(className){

    }
    style(data){
        
    }
}