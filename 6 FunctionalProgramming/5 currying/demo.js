const numbers = [1, 3, 10, 46, 125];

const multiply = (number1, number2) => number1 * number2;
const curriedMultiply1 = function (number1) {
  return function (number2) {
    return number1 * number2;
  };
};
const curriedMultiplyv2 = (number1) => (number2) => number1 * number2;

const multiplyBy100 = curriedMultiplyv2(100);
const res = multiplyBy100(2);
console.log(res);

const numbersUpated = numbers.map(multiplyBy100);
console.log(numbersUpated);
