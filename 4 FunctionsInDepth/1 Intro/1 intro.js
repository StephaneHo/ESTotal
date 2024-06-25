const test1 = function () {
  console.log("test");
};

const test2 = test1;

const testObj = {
  test3: function () {
    console.log("test3");
  },
};
testObj.test3();

const arr = ["1", () => 10];
console.log(arr[1]());

setTimeout(() => console.log("test6"), 1000);

const add = function (x) {
  return function (a) {
    return a + x;
  };
};
const add10 = add(10);
console.log(add10(1));
