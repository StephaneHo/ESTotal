let var1 = 10;
let var3 = 5;

const add = (number) => number + var1; // not a pure function, change the value of var1
// let s use closure
// we set up the fx so we can pass a number like we had a global number
// and it will be added to any number that gets passed
const addPure = function (x) {
  return function (number) {
    return number + x;
  };
};
// now we have a fx that can be parametrized, we use the value of var1 as a parameter
const addPure10 = addPure(10);
console.log(addPure10(1));

const addPureArrow = (x) => (number) => x + number;
const addPureArrow10 = addPureArrow(10);
console.log(addPureArrow10(1));

console.log("****************");

var2 = 20;

const multiply = (number) => {
  var3 = 30; // side effect
  return number * 2;
};
const multiplyPure = (factor) => (num) => num * factor;
const multiplyPure20 = multiplyPure(20);
console.log(multiplyPure20(2));

console.log("****************");

let numbers = [70, 90, 12, 100];

const getLastNumber = (arr) => arr.pop();
const last = getLastNumber(numbers);
console.log(last);
console.log(numbers); // numbers have changed

numbers = [70, 90, 12, 100];

// 2 ways (at least) to get the last number using pure fx;
// there are other ways (for example using slice)
const getLastNumberPure = (arr) => arr[arr.length - 1];
const last2 = getLastNumberPure(numbers);
console.log(last2);
console.log(numbers);
// OR
const getLastNumberPure2 = (arr) => [...arr].pop();
const last3 = getLastNumberPure2(numbers);
console.log(last3);
console.log(numbers);
