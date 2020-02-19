const xhr = new XMLHttpRequest();
xhr.open('GET','/data/test.json',true)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
            alert(xhr.responseText)
        }else{
            console.log('其他情况')
        }
    }
}
xhr.send(null);





//POST请求
// xhr.open('POST','/login',false)
// const postData = {
//     userName:'zhangsan',
//     password:'xxx'
// }
// xhr.send(JSON.stringify(postData))