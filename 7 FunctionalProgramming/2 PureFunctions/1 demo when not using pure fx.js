let var1 = 10;
let var3 = 5;

const add = (number) => number + var1;
// not a pure function, change the value of var1 and observe the return  has changed

var2 = 20;

const multiply = (number) => {
  var3 = 30; // side effect: this fx change a value from the outside
  return number * var2;
};

const numbers = [70, 90, 12, 100];

const getLastNumber = (arr) => arr.pop();
const last = getLastNumber(numbers);
console.log(last);
console.log(numbers); // numbers have changed
