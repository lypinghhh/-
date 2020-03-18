



function Add(num1, num2) {
    if (num2 === 0) {
      return num1;
    }
    return Add(num1 ^ num2, (num1 & num2) << 1);
  }



//非递归做法有点不太能看的顺
  function Add(num1, num2) {
    while (num2 != 0) {
      const excl = num1 ^ num2;
      const carry = (num1 & num2) << 1;
      num1 = excl;
      num2 = carry;
      console.log(num1);
      console.log(num2);
    }
    return num1;
  }

  Add(5,17)