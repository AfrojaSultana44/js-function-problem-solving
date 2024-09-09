function add(num1, num2) {
  const add = num1 + num2;
  return add;
}

function subtract(num1, num2) {
  const subtract = num1 - num2;
  return subtract;
}

function multiply(num1, num2) {
  const multiply = num1 * num2;
  return multiply;
}

function divide(num1, num2) {
  const divide = num1 / num2;
  return divide;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return "only 'add', 'subtract', 'multiply' and 'divide' are allowed";
  }
}

const result = calculator(6,7,"add")
console.log("result is:", result)