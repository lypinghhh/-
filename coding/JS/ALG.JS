/**
 * TEST 01
 * 如何查找一篇英文文章中出现频率最高的单词？
 * 不区分大小写
 * 1. 正则
 */


function counts(article) {

    // 合法性判断
    if (!article) return;

    // 参数处理
    article = article.trim().toLowerCase();

    //单词列表
    let wordList = article.match(/[a-z]+/g),
        visited = [],
        maxNum = 0,
        maxWord = "";
    //前后加空格，格式化之后的文本
    article = " " + wordList.join("  ") + " ";
    console.log(wordList)

    // 遍历判断单词出现次数
    wordList.forEach(function (item) {
        //因为每一步都是全局匹配，匹配当前没有查找过的元素
        if (visited.indexOf(item) < 0) {
            //匹配单个单词
            let word = new RegExp(" " + item + " ", "g"),
                //记录匹配的个数
                num = article.match(word).length;

            if (num > maxNum) {
                maxNum = num;
                maxWord = item;
            }
        }
    });

    return maxWord + "  " + maxNum;

}


let result = counts("Age has reached The end of the beginning of a word. May be guilty in his seems to passing a lot of different life became The appearance of The same day;");
console.log(result);




//ME - TRY
function topK(text) {
    let maxNum = 0,
        maxWord = "";
    let article = text.trim().toLowerCase()
    //不能直接使用split，因为可能涉及到标点符号
    let wordList = article.match(/[a-z]+/g);
    console.log(wordList);
    let visited = [];
    //已经不能使用原来的文本进行匹配了，进行了大小写转换
    article = ' ' + wordList.join(' ') + ' ';
    //加空格是为了匹配单词边界，因为部分单词内部也有小的单词
    wordList.forEach((item) => {
        if (visited.indexOf(item) === -1) {
            //匹配文本中的单词，空格边界
            var num = article.match(new RegExp(' ' + item + ' ', 'g')).length;
            if (num > maxNum) {
                maxNum = num;
                maxWord = item;
            }
        }
    })
    console.log(article)
    return maxWord + maxNum
}



let result = topK("Age has reached The end of the beginning of a word. May be guilty in his seems to passing a lot of different life became The appearance of The same day;");
console.log(result)




/**
 * TEXT 2
 * 出现次数最多的字母
 */

function num(str) {
    //保存键值对的对象
    var a = {};
    //创建字符数组
    var b = str.split("");
    // key为元素   值为个数
    for (let i = 0; i < b.length; i++) {
        if (a[b[i]]) {
            a[b[i]]++;
        } else {
            a[b[i]] = 1;
        }
    }
    // 通过比较找出最大的
    var maxLetter = "";
    var levelNum = 0;
    //对象只能使用 for in
    for (const k in a) {
        if (a[k] > levelNum) {
            levelNum = a[k];
            maxLetter = k;
        }
    }

    console.log(maxLetter + ":" + levelNum);

    return maxLetter;
}
var cc = "dafsfsfasfafaqertyyuuioll,mmnnbvvsfsdfqgsafsafgff";
num(cc);