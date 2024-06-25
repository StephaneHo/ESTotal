let a = 10;

function test() {
  let b = 5;
  let func2 = function (number) {
    let c = 3;
    return number + a;
  };
  console.log(func2(1));

  let func3 = function (number) {
    if (a > b) {
      let d = 10;
    }
    return number + d;
  };
  console.log(func3(1));
}

test();
