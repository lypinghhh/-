var romanToInt = function (s) {
    var hashNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        hashNum[s[i]] < hashNum[s[i + 1]] ? result -= hashNum[s[i]] : result += hashNum[s[i]]
    }
    return result;
};




var strStr = function (haystack, needle) {
    if (haystack == needle || needle == "") {
        return 0;
    }
    var arrn = needle.split("") 
    var len = needle.length;
    var newstr = "",
        ii;
    for (var i in haystack) {
        if (haystack[i] == arrn[0]) {
            ii = parseInt(i) 
            newstr = haystack.substr(ii, len) 
            if (newstr == needle) {
                return ii;
            }
        }
    }
    return -1;

};




console.log()