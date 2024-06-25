// Exponentiation

let x = 5;
let z = x ** 2; // same as Math.pow(x,2)

// Array.includes: allows to check if an element is present in an array
const cities = ["Paris", "Tokyo", "London", "Osaka", "Osaka"];
let test2 = cities.findIndex((x) => x === "Paris");
let test3 = test2 >= 0;
console.log("find" + test3);

let test = cities.includes("Osaka");
console.log(test);
test = cities.includes("Berlin");
console.log(test);
