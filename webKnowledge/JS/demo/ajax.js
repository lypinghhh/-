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

//使用

const url = '/data/test.json'
ajax(url)
.then(res => console.log(res))
.catch(err => console.error(err))