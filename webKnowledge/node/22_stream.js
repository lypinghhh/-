const fs = require('fs')

// const rs = fs.createReadStream('./22_stream.js')
// //将此可写流添加到其目标集。方向：stdout控制台
// rs.pipe(process.stdout);

const ws =fs.createWriteStream('./22_wirter.txt');



const tid = setInterval(()=>{
    const num = parseInt(Math.random()*10);
    console.log(num);
    if(num<8){
        //写入的数字需要转换成字符串，以防止抛出异常
        ws.write(num + '');
    }else{
        clearInterval(tid);
        ws.end();
    }
},500)






ws.on('finish', () => {
    console.error('写入已完成');
  });