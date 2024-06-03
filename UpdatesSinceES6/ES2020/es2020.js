//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a a normal JavaScript Number.

//JavaScript integers are only accurate up to about 15 digits.

let x = 999999999999999;
let y = 9999999999999999;

console.log(x);
//999999999999999
console.log(y);
//10000000000000000// too big;
let z = 9999999999999999n;
console.log(z);
//9999999999999999n
console.log(z + 1n);
//10000000000000000n
//console.log(z+1); won t work
let t = z + 1n;
let t2 = t / 1000n;
console.log(t2);
//Of course, you should bear in mind that your BigInt value must be within [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
// for the conversion to work properly, as stated in the question.
let t3 = Number(t2);
console.log(t3);

// Before ES2020 there was no string method that could be used to search for all occurrences of a string in a string.
// String.prototype.matchAll()
let text =
  "I love my cat. Cats are very easy to love. All cats are very popular. My cat is the best.";
const iterator = text.matchAll("cat");
console.log(Array.from(iterator));
console.log([...text.matchAll("cat")]);

//If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
console.log([...text.matchAll(/cat/g)]);

// If you want to search case insensitive, the insensitive flag (i) must be set:
console.log([...text.matchAll(/cat/gi)]);

// nullish coalescing operator
// The ?? operator returns the first argument if it is not nullish (null or undefined).
let title = null;
let missing = "missing";
let result = title ?? missing;
console.log(result);

// the optional chaining operator
// The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).
// The ?. operator is like the . chaining operator, except that instead of causing an error
// if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
// When used with function calls, it returns undefined if the given function does not exist.
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

// Promise.allSettled()
// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
// with an array of objects that describe the outcome of each promise.
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);
