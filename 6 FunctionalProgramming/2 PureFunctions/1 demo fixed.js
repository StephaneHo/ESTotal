let var1 = 10;
let var3 = 5;

const add = (number) => number + var1; // not a pure function, change the value of var1
const addPure = function (x) {
  return function (number) {
    return number + x;
  };
};
const addPure10 = addPure(10);
console.log(addPure10(1));

console.log("****************");

var2 = 20;

const multiply = (number) => {
  var3 = 30; // side effect
  return number * 2;
};

let numbers = [70, 90, 12, 100];

const getLastNumber = (arr) => arr.pop();
const last = getLastNumber(numbers);
console.log(last);
console.log(numbers); // numbers have changed

numbers = [70, 90, 12, 100];
const getLastNumberPure = (arr) => arr[arr.length - 1];
const last2 = getLastNumberPure(numbers);
console.log(last2);
console.log(numbers);
// OR
const getLastNumberPure2 = (arr) => [...arr].pop();
const last3 = getLastNumberPure2(numbers);
console.log(last3);
console.log(numbers);
