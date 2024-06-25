const getFunctionUpdated = function (index) {
  // huge date from API Call
  const hugeArray = [];

  const display = (message) => setTimeout(() => console.log(message), 1000);

  const add = (number1, number2) => number1 + number2;

  const addPunct = (message) => `${message} !!!!`;

  return function (number2) {
    display(addPunct(add(hugeArray[index], number2)));
  };
};

const utilityFunction = function (index) {
  // huge date from API Call
  const hugeArray = [];

  const display = (message) => setTimeout(() => console.log(message), 1000);

  const add = (number1, number2) => number1 + number2;

  const addPunct = (message) => `${message} !!!!`;

  const updateArray = function (number) {
    if (specialCondition) {
      hugeArray.push(number);
    }
  };

  const createFunction = function (number2) {
    display(addPunct(add(hugeArray[index], number2)));
  };

  return { updateArray, createFunction };
};
