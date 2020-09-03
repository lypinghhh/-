function findPrototypeByProperty(obj,propertyName){
    if(obj === null){
        return null;
    }
    if(obj.hasOwnProperty(propertyName)){
        return obj;
    }

    let proto = Object.getPrototypeOf(obj);
    return findPrototypeByProperty(proto,propertyName);
}

const foo = {a:1};
const bar = Object.create(foo)
bar.b = 2;
const baz = Object.create(bar)
baz.c = 3;

console.log(findPrototypeByProperty(baz,'a'))




function indexOf(a,b){
    let len = b.length;
    let arr = b.split('');
    let start = a.charAt();
    for(let i = 1;i < len;i++){
        if(arr[i] === a[start + i]){
            return 
        }
    }
}

let OrderedMap = new Map();

OrderedMap.prototype.set = function(key,value){
    
}


function OrderedMap(){
    this.elements = new Array();
    this.count = function(){
        return (this.elements.length)
    };
    this.set = function(key,value){
        this.elements.push({
            key,
            value
        })
    };
    this.get = function(key){
        for(let i = 0;i < this.elements;i++){
            if(this.elements[i].key === key){
                return this.elements[i].value;
            }
        }
    }
    this.item = function(index){
        return this.elements[index];
    }
}



function findTag(html){
    let arr = [];
    let reg = /</g;

}


function LRUCache(size){
    this.elements = new Array();

    this.put = function(key,value){

        if(this.get(key) < 0){
            if(this.elements.length >=size){
                this.elements.shift();
            }
            this.elements.push({
                key,
                value
            })
        }else{
            for(let i = 0;i < this.elements;i++){
                if(this.elements[i].key === key){
                    this.elements.splice(i,1);
                    this.elements.push({
                        key,
                        value
                    })
                }
            }
        }
        
    };
    this.get = function(key){
        for(let i = 0;i < this.elements;i++){
            if(this.elements[i].key === key){
                return this.elements[i].value;
            }
        }
        return -1;
    }

}






//百度


