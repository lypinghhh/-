/**
 * 数字
 */


 function  numCount(num){
    let num = num.toString()
    let len = num.length;
    let a = b = c = d = e = 0;
    for(let i = 0;i<len;i++){
        if( num[i] === 2){
            a++;
        }
    }
 }








 //等差数列
 

function fn(num){
 

    
       
            let temp = num.toString();
            
           let arrSpieces = num.split('')
           for(let k = 0 ;k < arrSpieces.length;k++){
               let arr2  = [];
               arr2.push(toJudge(arrSpieces[k]))
           }
            let mapString = arr2.join('');
            if(temp === mapString){
                console.log('YES')
            }else{
                console.log('NO')
            }

    
}





function toJudge(a){
    let map ={
        '1':1,
        '2':5,
        '3':8,
        '4':7,
        '5':2,
        '6':9,
        '7':4,
        '8':3,
        '9':6
        
    }
    return map[a]
}

console.log(1)
setTimeout(() =>{
    console.log(2)
    Promise.resolve().then(() =>{
        console.log(3)
    })
},0);

Promise.resolve().then(() =>{
    console.log(4);
    setTimeout(() =>{
     console.log(5)   
    },0)
}).then(() =>{
    console.log(6)
})