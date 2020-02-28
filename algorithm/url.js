
const url = [
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33",
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33",
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33",
  ];
  //报错
  function getUrlValue(url){
    if(!url) return;
    let res = url.match(/(?<=elective=)(\d+(,\d+)*)/);
    return res ?res[0].split(',') : [];
}

console.log(getUrlValue(url))