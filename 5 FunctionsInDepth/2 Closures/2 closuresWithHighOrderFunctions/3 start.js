const displayOperations = function (number) {
  const param = 5;

  const display = (message) => setTimeout(() => console.log(message), 1000);

  const op = (param, number) => param + number;

  const addPunct = (message) => `${message} !!!!`;

  display(addPunct(op(param, number)));
};

displayOperations(10);

//how do you make it more reusable and flexible ?
// suppose that addPunc = (message) => `${message} ******`;
// suppose that op = param * number
// suppose that you want to parametrize the param (and still have a unary fx) ?
