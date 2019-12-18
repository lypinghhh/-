//TEST01
// function print(n){
//     setTimeout((() => {
//         console.log(n)
//         return ()=>{}
//     }).call(n,[]), Math.floor(Math.random() * 1000));
// }
// for(var i = 0; i < 100; i++){
//     print(i);
// }

//TEST02
// function print(n){
//     setTimeout(() => {
//         console.log(n);
//     }, 1, Math.floor(Math.random() * 1000));
// }
// for(var i = 0; i < 100; i++){
//     print(i);
// }

//TEST03
// function print(n){
//
//     setTimeout(() => {
//
//         setTimeout( () =>{
//             console.log(n);
//         }, 1000 * n);
//
//     }, Math.floor(Math.random() * 1000));
// }
// for(var i = 0; i < 100; i++){
//     print(i);
// }

//TEST04
// function print(n){
//     setTimeout( (() => {
//         console.log(n);
//         return ()=>{};
//     })(), Math.floor(Math.random() * 1000));
// }
// for(var i = 0; i < 100; i++){
//     print(i);
// }

//TEST05
function print(n){
    setTimeout(() => {
        setTimeout(()=>{
            console.log(99-n);
        },1000*n)
    }, Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
    print(i);
}








//TEST05
// function print(n){
//     setTimeout(() => {
//         setTimeout(()=>{
//             console.log(n);
//         },1000*n)
//     }, Math.floor(Math.random() * 1000));
// }
// for(var i = 0; i < 100; i++){
//     print(i);
// }