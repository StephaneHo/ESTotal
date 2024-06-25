let person = {
  id: "id",
  name: "Jean",
  age: 30,
};

console.log(person.toString()); // toString not very helpful
// the console.log(person) where we can see all the fields is an extra utility provided by the browser

person = {
  id: "id",
  name: "Jean",
  age: 30,
  [Symbol.toStringTag]: "Person",
};

console.log(person.toString()); // allows us to update what the toString shows us

// note: it will not work with [Symbol("toStringTag")]
