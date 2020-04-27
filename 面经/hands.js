

//七牛云
function findDeep(obj){
    let deep = [];
    if(typeof obj !== object || obj === null ){
        return 1;
    }
    for(let key in obj){

            deep.push(findDeep(obj[key])+1)
           
      
    }
    let deepMax = deep.sort((a,b) =>(b-a))[0]
    return deepMax;
}



function binarySearch(array,target){
    let left = 0;
    let right = array.length;
    let mid;
    while(left < right){
        mid = Math.floor(left+right / 2);
        if(target < mid){
            right = mid - 1;
        }else if(target > mid){
            left = mid+1;
        }else{
            return mid;
        }
    }
}


//滴滴
Array.prototype.map1 = (fn,this) =>{
    let newArr = [];
    let arr = this;
    for(let i = 0;i<arr.length;i++){
        newArr.push(fn(arr[i]))
    }   
    return newArr;
}


const p = Promise.resolve();

(async () => {await p; console.log("eng")})()

 p.then(_ => console.log(1)).then(_ => console.log(2))

 var a = 3;
 b = 3;
 a = 4;
 console.log(b);
 setTimeout(function () {
     console.log(this.a,'11')
 },0)
// 3  1 2  eng 4 11
