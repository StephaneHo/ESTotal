// more flexibility

const print = function (message) {
  message = message + "!";
  console.log(message);
};

setTimeout(() => print("test6"), 1000);

// avoid repetitions
const add = function (x) {
  return function (a) {
    return a + x;
  };
};
const add10 = add(10);
console.log(add10(1));

const add20 = add(20);
console.log(add20(1));
