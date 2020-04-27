var lengthOfLargestSubString = function(s){
    const set = new Set();
    let i = 0,j = 0,maxLength = 0;
    let len = s.length;
    if(len === 0){
        return 0;
    }
    for(i;i<len;i++){
        //没有重复字符，加到set
        if(!set.has(s[i])){
            set.add(s[i]);
            maxLength = Math.max(maxLength,set.size)
        }else{
            //删除重复的字符
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);                     
        }
       
    }
    return maxLength;
}