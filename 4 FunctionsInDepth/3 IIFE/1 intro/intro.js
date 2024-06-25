const sum = (function () {
  return 1 + 1;
})();
console.log(sum);

/* function() {
  console.log("hello world");
}(); */

const sum10 = (function (number) {
  return number + 1;
})();
console.log(sum10);

const sum20 = (function (number) {
  return number + 1;
})(20);
console.log(sum20);
