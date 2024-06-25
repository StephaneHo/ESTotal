// Promise.any

// The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
//  It rejects when all of the input's promises reject (including when an empty iterable is passed),
// with an AggregateError containing an array of rejection reasons.
const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "rejected")
);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value)); // quick

// if all reject
const promise4 = new Promise((resolve) => setTimeout(reject, 100, "rejected"));
const promise5 = new Promise((resolve) => setTimeout(reject, 100, "quick"));
const promise6 = new Promise((resolve) => setTimeout(reject, 500, "slow"));

const errpromises = [promise4, promise5, promise6];

Promise.any(errpromises).catch((err) => {
  console.log(err);
});
Promise.any(promises).catch((err) => {
  console.log(err);
}); //AggregateError

//String.prototype.replaceAll()
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// The original string is left unchanged.
let text =
  "I love cats. Cats are very easy to love. Cats are very popular. My cat is the best";
text = text.replaceAll("Cat", "Dog");
console.log(text);
text = text.replaceAll("cat", "dog");
console.log(text);

let text =
  "I love cats. Cats are very easy to love. Cats are very popular. My cat is the best";

const DOG = "dog";
const change = (replacingStr) => (text) =>
  text.replaceAll(/cat/gi, (arg) => {
    if (arg.charCodeAt(0) >= 97) {
      return replacingStr;
    } else {
      return replacingStr[0].toUpperCase() + replacingStr.slice(1);
    }
  });
console.log(text);

const changeDOG = change(DOG);
const text2 = changeDOG(text);
console.log(text2);

const changeGiraffe = change("giraffe");
const text3 = changeGiraffe(text);
console.log(text3);

// numeric separator
// The numeric separator is only for visual use.
const num1 = 1_000_000_000;
const num2 = 1000000000;
console.log(num1 === num2);
