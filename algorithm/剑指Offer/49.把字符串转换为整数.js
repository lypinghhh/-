
//通过率 80

function StrToInt(str) {
    if (str == undefined || str == '') {
      return 0;
    }
    const first = str[0];
    let i = 1;
    let int = 0;
    if (first >= 0 && first <= 9) {
      int = first;
    } else if (first !== '-' && first !== '+') {
      return 0;
    }
    while (i < str.length) {
      if (str[i] >= 0 && str[i] <= 9) {
        int = int * 10 + (str[i] - 0);
        i++;
      } else {
        return 0;
      }
    }
    return first === '-' ? 0 - int : int;
  }