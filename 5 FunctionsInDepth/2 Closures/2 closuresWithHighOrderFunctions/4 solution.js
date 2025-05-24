//how do you make it more reusable and flexible ?
// suppose that addPunc = (message) => `${message} ******`;
// suppose that op = param * number
// suppose that you want to parametrize the param (and still have a unary fx) ?W

const displayOperations = (param, op, addPunct) => (number) => {
  const display = (message) => setTimeout(() => console.log(message), 1000);
  display(addPunct(op(param, number)));
};

const op1 = (number1, number2) => number1 + number2;
const addPunct1 = (message) => `${message} !!!!`;
const param1 = 10;

const op2 = (number1, number2) => number1 * number2;
const addPunct2 = (message) => `${message} *****`;
const param2 = 5;

const displayThisOperation = displayOperations(param1, op1, addPunct1);
let res1 = displayThisOperation(10);
res1 = displayThisOperation(20);
res1 = displayThisOperation(100);

const displayThatOperation = displayOperations(param2, op2, addPunct2);
let res2 = displayThatOperation(10);
res2 = displayThatOperation(20);
res2 = displayThatOperation(100);
