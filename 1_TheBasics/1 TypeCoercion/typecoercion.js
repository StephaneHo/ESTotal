// String coercion
let number1 = 10;
console.log(typeof number1);

console.log(typeof String(number1)); // epxlicit coercion
number1 = number1 + ""; // implicit coercion
console.log(typeof number1);

let arr = ["assurance1", "assurance2", "assurance3"];
for (let i = 0; i < 3; i++) {
  console.log(`gen_${i}_${arr[i]}`);
}

// Boolean coercion
console.log(typeof Boolean(0)); // epxlicit coercion
console.log(typeof Boolean(1)); // epxlicit coercion
console.log(Boolean(0)); // epxlicit coercion
console.log(Boolean(1)); // epxlicit coercion
let number3 = 3;
if (number3) {
  console.log("implicit coercion");
}

// Numeric coercion
console.log(typeof Number("1")); // epxlicit coercion
let number4 = +"123"; // implicit coercion
console.log(typeof number4);
