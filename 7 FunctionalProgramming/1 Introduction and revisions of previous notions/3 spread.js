const letters = ["a", "b", "c"];

console.log(letters);

// display as 3 separate things
console.log(...letters);

const multiply = (x1, x2, x3) => x1 * x2 * x3;
const numbers = [1, 10, 100];
// if you have an array [1,10,100], how do you pass it to the multiply ?
let results = multiply(...numbers);
console.log(results);

const anotherNumbers = [2, 3, 4];
// how he combine the arrays ?
const newArray = [...numbers, ...anotherNumbers];

// if copiedArray = numbers, we point to the same reference,
// if we modify one, we modify the other (use push for ex)
// spread: true copy
const copiedArray = [...numbers];

// same for objects, change one field and use 1- reference 2- spread
