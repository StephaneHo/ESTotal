let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

console.log(person.getAddress());

person.showThis = function () {
  console.log(this);
};

person.showThis();

let person2 = {
  firstName: "Chisato",
  city: "Osaka",
  getAddress: person.getAddress,
};

console.log(person2.getAddress());
// because it is invoked with person2, the this refers to person2
