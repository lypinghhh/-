


//美团

//给出一个序列包含n个正整数的序列A，
//你可以从中删除若干个数，使得剩下的数字中的最大值和最小值之差不超过x，
//请问最少删除多少个数字。
//输入：
// 5 2
// 2 1 3 2 5
// 输出 1



function over(arr,diff){
    let len = arr.length;
    arr.sort();
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        if(arr[right] - arr[left] > diff){
            left++;
        }
    }

    return len-(right - left) - 1;
}

// 题目描述：
// 有一款叫做空间回廊的游戏，游戏中有着n个房间依次相连，如图，1号房间可以走到2号房间，以此类推，n号房间可以走到1号房间。



// 这个游戏的最终目的是为了在这些房间中留下尽可能多的烙印，在每个房间里留下烙印所花费的法力值是不相同的，已知他共有m点法力值，这些法力是不可恢复的。

// 小明刚接触这款游戏，所以只会耿直的玩，所以他的每一个行动都是可以预料的：

// 1. 一开始小明位于1号房间。

// 2. 如果他剩余的法力能在当前的房间中留下一个烙印，那么他就会毫不犹豫的花费法力值。

// 3. 无论是否留下了烙印，下一个时刻他都会进入下一个房间，如果当前位于i房间，则会进入i+1房间，如果在n号房间则会进入1号房间。

// 4. 当重复经过某一个房间时，可以再次留下烙印。

// 很显然，这个游戏是会终止的，即剩余的法力值不能在任何房间留下烙印的时候，游戏终止。请问他共能留下多少个烙印。
// 4 21
// 2 1 4 3
// 9


function magic(target,arr){
    let result = arr.reduce((a,b) =>{
        a+b
    })
    let n = result / target
    let  m = result % target
    return  n * arr.length + m;
}


// 小仓酷爱射击运动。今天的小仓想挑战自我。小仓有N颗子弹，接下来小仓每次会自由选择K颗子弹进行连续射击，全中靶心的概率为p[k]。如果成功小仓将获得a[k]的得分，并且可以使用余下子弹继续射击，否则今天的挑战结束。小仓想知道在最佳策略下，自己能得到的最高期望分数是多少。
// 2
// 0.80 0.50
// 1 2
// 1.44
// 样例1解释
// 选择用一颗子弹射击：如果命中则再用余下子弹射击（仅剩一颗子弹故只能选择一颗）：0.80 * 1 + 0.80 * 0.80 * 1= 1.44
// 选择用两颗子弹射击：0.5 * 2 = 1.00
// 此时最高期望得分为1.44

// 输入样例2
// 3
// 0.90 0.10 0.10
// 2 1 1
// 输出样例2
// 4.88

// 选择用一颗子弹射击：如果命中则再用一颗子弹进行射击，如果命中则再用一颗子弹进行射击（即3轮均使用了一颗子弹进行）：0.90 * 2 + 0.90 * 0.90 * 2+0.90 * 0.90 * 0.90 * 2= 4.878≈4.88  此种情况的期望得分最高，故为4.88







// 给你一个长度为n的序列a，请你求出对每一个1<=l<r<=n的区间中最大值和最小值的异或和的异或和。

// 例如序列为{1,3,5},不同的a(1,2)=1^3,a(1,3)=1^5,a(2,3)=(3^5),a(1,2)^a(1,3)^a(2,3)=0，所以最后的答案是0。






// 给定长度为n的串S，仅包含小写字母。定义



// 公式中，|A|代表字符串A的长度

// 也就是说如果子串是一个ABA型的字符串，且满足长度限制，则f(l,r)=1，否则等于0。（注意：形如“ababab”也可视为ABA型）



// 例如当n=2时，原式为f(1,1)+f(1,2)+f(2,2)。





const helperObj = {
    name: 'one piece'
}
const obj = {
    name : 'lufy',
    say(){
        console.log(this)
            console.log(this.name)
    },
    say2: ()=>{
        console.log(this)
            console.log(this.name)
    },
    say3(){
        console.log(this)
            const f = function(){console.log(this.name)}
            f()
    },
    say4(){
        console.log(this)
            const f = ()=>console.log(this.name)
            f()
    },
    say5(){
        console.log(this)
            const f = ()=>console.log(this.name)
            f.call(helperObj)
    },
    embed:{
            name: 'solon',
            say(){
                console.log(this)
                    console.log(this.name)
            }
    }
}
const say = obj.embed.say
const say4 = obj.say4

say()
say4()

obj.say()
obj.embed.say()
obj.say2()
obj.say3()
obj.say4()
obj.say5()




function toPay(arr,num){
    let arr1 = [];
    while(num >= arr[arr.length-1]){
        num -= arr[arr.length-1];
        arr1.push(arr[arr.length-1]);
        while(num < arr[arr.length - 1] ){
            arr.pop()
        }
    }
    return arr1.reverse();
}

console.log(toPay([1,2,5,10,20,50],75))