const getFunction = function (number1, number2) {
  const display = (message) => setTimeout(() => console.log(message), 1000);

  const add = (number1, number2) => number1 + number2;

  const addPunct = (message) => `${message} !!!!`;

  return function () {
    display(addPunct(add(number1, number2)));
  };
};

const getFunctionUpdated = function (number1) {
  const display = (message) => setTimeout(() => console.log(message), 1000);

  const add = (number1, number2) => number1 + number2;

  const addPunct = (message) => `${message} !!!!`;

  return function (number2) {
    display(addPunct(add(number1, number2)));
  };
};

getFunction(1, 2)();

const add5 = getFunctionUpdated(5);
add5(1);
add5(2);

const add10 = getFunctionUpdated(10);
add10(1);
add10(2);

getFunctionUpdated(10)(20);
// either we provide the two arguments at the beginging
// or we can "delay" the providing of the second argument
