## JS

> START:2020-1-11

`2020-1-11`

#### 1.用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

```
var arr = new Array(5);
var num = randomNumber();
var i = 0;
randomArr(arr,num);
function randomArr(arr,num){
	if(arr.indexOf(num)<0){
		arr[i] = num;
		i++;
	}else{
	num = randomNumber;
	}
	if(i>=arr.length){
		console.log(arr);
		return;
	}else{
		//递归调用
		randomArr(arr,num)
	}
}
//随机生成2-32整数
function randomNumber(){
	return Math.floor(Math.random()*31 + 2)
}

```

`2020-1-12`

#### 2. 写一个方法去掉字符串中的空格

```
//法一
	var str = '  abc d e f  g ';
        function trim(str) {
            var reg = /\s+/g;
            if (typeof str === 'string') {
                var trimStr = str.replace(reg,'');
            }
            console.log(trimStr)
        }
        trim(str)
        
        
//法二
var trim = function(str){
return str.replace(/\s*/g,"");
}
str.replace(/\s*/g,""); //去除字符串内所有的空格
str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
str.replace(/^\s*/,""); //去除字符串内左侧的空格
str.replace(/(\s*$)/g,""); //去除字符串内右侧的空格


//法三

var str = ' 1 2 3445 6    ';
console.log(str.split(' ').join('')) // 输出"1234456"
```

