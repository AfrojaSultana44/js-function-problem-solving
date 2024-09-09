const heights = [65, 98, 90, 65, 45, 32];
function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const maxNumber = getMax(heights);
console.log("max value is :", maxNumber);
