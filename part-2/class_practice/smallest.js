const heights = [65, 98, 90, 65, 45, 32];
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const minNumber = getMin(heights);
console.log("min value is :", minNumber);