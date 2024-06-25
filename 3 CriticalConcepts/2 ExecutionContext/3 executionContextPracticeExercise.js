//var test = function () {
console.log(number);
var number = 3;

function provideNumber() {
  //another execution context
  console.log(`inside the function ${newNumber}`);
  var newNumber = 100;
  console.log(`inside the function ${newNumber}`);
  return newNumber + 1;
}

console.log(number);
console.log(newNumber);
var newNumber = provideNumber(); // Note that because there are different exeuction context, the variables do not overlap
console.log(number + newNumber);
//};
