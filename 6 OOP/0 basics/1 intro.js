let person = {
  firstName: "Jean",
  age: 30,
  getThatAge: function () {
    // the traditional way
    return `the age is ${this.age}`;
  },
  getAge() {
    // define a method on a object, more recent
    return `the age is ${this.age}`;
  },
};
console.log(person.getAge());

console.log(person["firstName"]);

// suppose you have a property that is a variable, put it into []
let field = "special";

let person2 = {
  ...person,
  [field]: "ABC",
};

// noyte that that there is no "field" property
console.log("a special person", person2);

field = "evenMoreSpecial";

let person3 = {
  ...person,
  [field]: "ABC",
};

console.log("an even more special person", person3);

// properties have attributes
// by default, all 3 attributes are set to true
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person2, "aproperty", {
  value: "a",
  writable: false, // it will not allow to change me that value
  configurable: true, // 1- if we can delete or not, and if we change the attributes for the atributes
  enumerable: true, // if the property shows up in certain actions, for ex
  // in a for in loop, a property with enumerable false will not show up
});
console.log(person2.aproperty);
person2.aproperty = "b";
console.log(person2.aproperty); // because writable we set to false

Object.defineProperty(person2, "notenumerableproperty", {
  value: "a",
  writable: true, // it will not allow to change me that value
  configurable: true, // 1- if we can delete or not, and if we change the attributes for the atributes
  enumerable: false, // if the property shows up in certain actions, for ex
  // in a for in loop, a property with enumerable false will not show up
});
console.log(person2.notenumerableproperty);
console.log(person2);
for (let property in person2) {
  console.log("*** property", property);
}
// note that aproperty shows up, but notenumerableproperty does not

// retrive the keys of the object:
console.log(Object.keys(person2));
