/**
 * 百度 - 3-29
 */

// TEST-01
 function fun(){
     return () =>{
         return () =>{
             return () =>{
                 console.log(this.name)
             }
         }
     }
 }
 var f = fun.call({name:'foo'})
 var f1 = f.call({name:'bar'})()(); //foo
 var f2 = f().call({name:'baz'})(); //foo
 var f3 = f()().call({name:'cool'}) //foo


// TEST-02
 PromiseA = Promise.resolve('a');
 PromiseA.then((res) =>{
     console.log(res)
 }).then((res) =>{
    console.log(res)
 })

 PromiseB = Promise.resolve('b');
 PromiseB.then((res) =>{
    console.log(res)
})
PromiseB.then((res) =>{
    console.log(res)
})

//a b b undefined


// TEST-03
console.log(100['toString']['length'])
