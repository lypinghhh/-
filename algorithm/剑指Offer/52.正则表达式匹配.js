//s, pattern都是字符串
function match(s, pattern)
{
   if (s == undefined || pattern == undefined) {
        return false;
      }
      return matchStr(s, pattern, 0, 0);
    }

    function matchStr(s, pattern, sIndex, patternIndex) {
      if (sIndex === s.length && patternIndex === pattern.length) {
        return true;
      }
      if (sIndex !== s.length && patternIndex === pattern.length) {
        return false;
      }
      if (patternIndex + 1 < pattern.length && pattern[patternIndex + 1] === '*') {
        if (sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
          return matchStr(s, pattern, sIndex, patternIndex + 2) ||
            matchStr(s, pattern, sIndex + 1, patternIndex + 2) ||
            matchStr(s, pattern, sIndex + 1, patternIndex);
        } else {
          return matchStr(s, pattern, sIndex, patternIndex + 2)
        }
      }
      if (sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
        return matchStr(s, pattern, sIndex + 1, patternIndex + 1)
      }
      return false;
    }