

var str = 'abgcyccdddeeueeejjjjjjbbbbbb'
const arr = str.match(/(\w)\1*/g);
console.log(arr);
const maxLen = Math.max(...arr.map(s => s.length));
console.log(maxLen);
const result = arr.reduce( (pre,curr) =>{
    if(curr.length === maxLen){
        pre[curr[0]] = curr.length;
        console.log(pre);
    }
    return pre;
},{});
console.log(result)