// max of three numbers
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  const maxNumber = maxOfThree(100,200,67)
  // console.log("Max of three is:",maxNumber)
  
  
  const max = Math.max(12,45,78)
  console.log("max is using Math.max:",max)