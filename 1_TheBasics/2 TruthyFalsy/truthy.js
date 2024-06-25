let myVar = 3;

if (myVar !== undefined && myVar !== null && myVar !== "") {
  console.log("I can work with this var");
}

//myVar = null;
console.log(myVar);

// it will be coerced to a boolean
if (myVar) {
  console.log("I can work with this var too !");
} else {
  console.log("cannot do something with the variable !");
}

let test = !myVar;
console.log(test);
let test2 = !!myVar;
console.log(test2);
