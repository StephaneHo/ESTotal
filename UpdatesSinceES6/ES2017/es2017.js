//The padEnd() method of String values pads this string with a given string (repeated, if needed)
// so that the resulting string reaches a given length. The padding is applied from the end of this string.

let timeInSeconds = "5";
let timeInMiliSeconds = timeInSeconds.padEnd(4, 0);
console.log(timeInMiliSeconds);

timeInSeconds = "51";
timeInMiliSeconds = timeInSeconds.padEnd(5, 0);
console.log(timeInMiliSeconds);

const invoice = 300;
//const paddedInvoice = invoice.padEnd(0,2)  // error with numbers
//console.log(paddedInvoice);

// The padStart() method of String values pads this string with another string (multiple times, if needed)
// until the resulting string reaches the given length. The padding is applied from the start of this string.

const cardNumber = "2034399002125581";
const last4Digits = cardNumber.slice(-4);
//Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
console.log(last4Digits);
const maskedNumber = last4Digits.padStart(cardNumber.length, "*");
console.log(maskedNumber);

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let entries = Object.entries(person);
console.log(entries);

// Object.entries() makes it simple to use objects in loops:
for (let entry of entries) {
  console.log(`key is ${entry[0]} and value is ${entry[1]}`);
}
console.log("**********");
for (let [key, value] of entries) {
  console.log(`key is ${key} and value is ${value}`);
}

//he Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let values = Object.values(person2);
console.log(values);
