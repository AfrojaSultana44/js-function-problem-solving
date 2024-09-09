const array = ["kabul", "babul", "abul", "kabul"];
// const numbers = [1,3,5,7,1,3,5]

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes((item)) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(array);
// const uniqueArray = noDuplicate(numbers);


console.log(uniqueArray);
