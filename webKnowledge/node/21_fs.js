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