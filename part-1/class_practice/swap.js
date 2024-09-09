let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);

//---------------------

let x = 6;
let y = 8;
[x, y] = [y, x];
console.log(x, y);
