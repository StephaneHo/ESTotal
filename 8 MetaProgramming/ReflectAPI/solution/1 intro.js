let person = {
  firstName: "Jean",
  city: "Paris",
  country: "France",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};
console.log(person.toString());

Reflect.setPrototypeOf(person, {
  toString() {
    return `This person ${this.firstName} is the best`;
  },
});
console.log(person.toString());

//Object.setPrototypeOf

//delete person.country;
console.log(person);

Reflect.deleteProperty(person, "city");
console.log(person);
