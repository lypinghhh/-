#### path

> normalize join resolve 
>
> basename extname dirname
>
> parse format 
>
> sep delimiter win32 posix

```
const {basename} = require('path');
```



**path.basename(path[, ext])**

返回文件名

**path.dirname(path)**

返回 `path` 的目录名

**path.extname(path)**

返回 `path` 的扩展名，从最后一次出现 `.`（句点）字符到 `path` 最后一部分的字符串结束。

如果在 `path` 的最后一部分中没有 `.` ，或者如果 `path` 的基本名称（参阅 `path.basename()`）除了第一个字符以外没有 `.`，则返回空字符串。

**path.normalize(path)**

返回格式化的规范路径

**path.join([...paths])**

把路径进行拼接

**path.resolve([...paths])**

把相对路径解析成绝对路径

**path.format(pathObject)**

`path.format()` 方法从对象返回路径字符串。

format 

存在拼接的优先级 dir优于 root

 base优于 ext  name

**path.parse(path)**

返回一个对象，其属性表示 `path` 的重要元素

**path.sep**

提供平台特定的路径片段分隔符：

```
'foo\\bar\\baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']
```



**path.delimiter**

提供平台特定的路径定界符：

```
console.log(process.env.PATH);
// 打印: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

process.env.PATH.split(path.delimiter);
// 返回: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
```

##### 注：path

- __ dirname 、 __ filename总是返回文件的绝对路径
- process.cwd()总是返回执行node命令所在的文件夹，进程的启动脚本的位置
- ./ 在require方法中总是相对于当前文件所在的文件夹



#### Buffer

- 处理二进制数据流

- 实例类似整数数组，大小固定，不能随便修改，
- global对象上，全局变量，无需使用require引用
- C++代码在V8堆外分配物理内存

Buffer.alloc(10);
Buffer.alloc(10, 1);
Buffer.allocUnsafe(10);
Buffer.from([1, 2, 3]);

Buffer.from('test','base64');

1. 类常用的方法

>  \* Buffer.byteLength  

返回字符串的实际字节长度。 

字母一个字节，一个汉字三个字节

>  \* Buffer.isBuffer()

如果 `obj` 是一个 `Buffer`，则返回 `true`，否则返回 `false`。

>  \* Buffer.concat()

拼接

传入的是一个数组，只有一个参数

2. 实例常用的方法

 \* buf.length buf的空间长度，不一定等于实际的长度

 \* buf.toString('base64')

 \* buf.fill()

 \* buf.equals()

 \* buf.indexOf()

 \* buf.copy()

#### events

```
//引入
const EventEmitter = require('events');

//继承
class CustomEvent extends EventEmitter{
    
}

//实例化
const ce = new CustomEvent();

//绑定事件，并添加事件处理程序
ce.on('test',()=>{
    console.log('ajjj')
})

//定时触发
setInterval(()=>{
    ce.emit('test')
},500)
```

触发 `'error'` 事件

**emitter.once(eventName, listener)**

一个事件可以绑定多个程序

**'removeListener' 事件**

**emitter.removeListener(eventName, listener)**

**emitter.removeAllListeners([eventName])**

#### fs

异步方法的最后一个参数都是一个回调函数，回调函数的第一个参数都会保留给异常

```
const fs = require('fs');
//读文件
fs.readFile('/etc/passwd','utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//同步操作，直接返回结果，没有回调
const data = fs.readFileSync('')

//写文件
fs.writeFile('文件.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});

//文件信息
fs.stat('',(err,stats)=>{
	if (err) throw err;
	console.log(stats.isFile());
})
//重命名
fs.rename('旧文件.txt', '新文件.txt', (err) => {
  if (err) throw err;
  console.log('重命名完成');
});
//删除
fs.unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('文件已删除');
});
//读文件夹
fs.readdir('/etc/passwd', (err, files) => {
  if (err) throw err;
  console.log(files);
});
//创建文件夹
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
//删除dir
fs.rmdir('path', (err) => {
  if (err) throw err;
  console.log('文件夹已删除');
});
//监视
fs.watch('./',{
	recursive:true
},(eventType,filename) =>{

})
```

先同步，后异步

优先使用异步

写文件除了可以写字符串，也可以写buffer

可以使用stat来判断文件是否存在，不存在的话报错，打印提示信息

在高并发的情况下使用同步会卡住其他的用户

#### stream

方向 数据

write 只能是字符串或者buffer不建议数字，需转成字符串



```
const fs = require('fs')

const rs = fs.createReadStream('./22_stream.js')
//将此可写流添加到其目标集。方向：stdout控制台
 rs.pipe(process.stdout);

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
```

#### 解决回调地狱问题util

```
const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./22_promisify.js').then(data =>{
//     console.log(data.toString())
// }).catch(ex =>{
//     console.log(ex);
// })


async function test(){
    try{
        const content = await read('./22_promisify.js');
        console.log(content.toString());
    }catch(ex){
        console.log(ex);
    }
}

test();


```



