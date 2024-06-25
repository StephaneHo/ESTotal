var a = 10;

function test() {
  var b = 5;
  var func2 = function (number) {
    var c = 3;
    return number + a;
  };
  console.log(func2(1));

  var func3 = function (number) {
    return number + b; // if b is replaced by c, get an errorm even if it is a "var"
  };
  console.log(func3(1)); //
}

test();
