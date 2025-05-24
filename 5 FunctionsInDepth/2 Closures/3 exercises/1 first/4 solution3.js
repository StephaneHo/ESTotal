const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

// let and const: are block scoped
// the scope is between the brackets
// the variable i will be maintained in memory
// becuase of the block scoping, each fx in the timeout will have a reference to each i
for (let i = 0; i < cities.length; i++) {
  setTimeout(() => console.log(cities[i]), 1000);
}
// note: we still use closure but the reason it works is because let is block scoped
