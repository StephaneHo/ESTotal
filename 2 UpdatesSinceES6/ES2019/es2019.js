// trim start
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log(`**${text2}**`);

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text3 = text1.trimEnd();
console.log(`**${text3}**`);

// fromEntries
// inverse operation of entries

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let entries = Object.entries(person);
console.log(entries);

const john = [
  ["firstName", "John"],
  ["lastName", "Doe"],
  ["age", 50],
];

const JohnFromEntries = Object.fromEntries(john);
console.log(JohnFromEntries);

//flat The flat() method creates a new array by flattening a nested array.
// does flatten only one level
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

const myArr2 = [
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
];
const newArr2 = myArr2.flat();
console.log(newArr2);

//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const arr1 = [1, 2, 3, 4, 5, 6];

const result1 = arr1.map((num) => [num, num]);
console.log(result1.flat());

const result2 = arr1.flatMap((num) => [num, num]);
console.log(result2);

// sort: ES2019 revised the Array sort() method.
// When sorting elements on a value, the elements must keep their relative position to other elements with the same value.
const myAssuranceArr = [
  { name: "assurance1", price: 100 },
  { name: "assurance2", price: 110 },
  { name: "assurance3", price: 100 },
  { name: "assurance4", price: 100 },
  { name: "assurance5", price: 120 },
  { name: "assurance6", price: 110 },
  { name: "assurance7", price: 110 },
  { name: "assurance8", price: 140 },
];

console.log(myAssuranceArr.sort((a, b) => a.price - b.price));
// assurance1, 3 and 4 have same value, but assuarance 3 cannot come before assurance1 and assurance4 cannot come before assurance3
