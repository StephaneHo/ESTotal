const numbers = [1, 3, 10, 46, 125];

const multiply = (number1, number2) => number1 * number2;
const curriedMultiply1 = function (number1) {
  return function (number2) {
    return number1 * number2;
  };
};

const curriedMultiplyv2 = (number1) => (number2) => number1 * number2;
// currying : creates a new fx that remember one of the parameters thx to closure
const multiplyBy100 = curriedMultiplyv2(100);
const res = multiplyBy100(2);
console.log(res);

// the advantage of currying is to create specialised fx
// since map takes a fx with only one arguement, we can pass our curried fx to map
const numbersUpated = numbers.map(multiplyBy100);
console.log(numbersUpated);

// another advantage of currying i: when we are composing fx toegether, we need to use unary fx
// ie fx that accept only one arg
