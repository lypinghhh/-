## JS

> START:2020-1-11

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



