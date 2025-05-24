let person = {
  firstName: "Jean",
  lastName: "Dupont",
};

console.log(person);

console.log(5 + person);

let person2 = {
  firstName: "Jean",
  lastName: "Dupont",
  toString() {
    return this.firstName;
  },
};

console.log(5 + person2);

let person3 = {
  firstName: "Jean",
  lastName: "Dupont",
  toString() {
    return this.firstName;
  },
  valueOf() {
    return this.firstName.length;
  },
};

console.log(5 + person3);
