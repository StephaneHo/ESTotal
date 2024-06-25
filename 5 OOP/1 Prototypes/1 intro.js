let person = {
  firstName: "Jean",
  age: 30,
  getAge() {
    return `the age is ${this.age}`;
  },
};
console.log(person.getAge());

console.log(person["firstName"]);

const field = "special";

let person2 = {
  ...person,
  [field]: "ABC",
};

console.log(person2.field);
console.log(person2.special);

console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person2, "aproperty", {
  value: "a",
  writable: false,
  configurable: false,
  enumerable: false,
});
console.log(person2.aproperty);
person2.aproperty = 30;
console.log(person2.aproperty);
