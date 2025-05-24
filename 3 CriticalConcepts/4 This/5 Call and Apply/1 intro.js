function test() {
  console.log("test");
}
// simply another way to invoke fx
test.call();
test.apply();

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

//person.getAddress.call();

let person2 = {
  firstName: "Chisato",
  city: "Osaka",
};

person.getAddress.call();
person.getAddress.apply();
person.getAddress.call(person);
person.getAddress.apply(person);
person.getAddress.call(person2); // this points now to person2
person.getAddress.apply(person2); // this points now to person2
// we explicity force the value of this

// the difference between the two
person = {
  firstName: "Jean",
  city: "Paris",
  getAddress(country, punctuation) {
    console.log(
      `${this.firstName} lives in ${this.city} which is in ${country} ${punctuation}`
    );
  },
};

// the parameters come after the reference object we pass in
person.getAddress.call(person2, "Japan", ".");
person.getAddress.apply(person2, ["Japan", "!!!!"]);
