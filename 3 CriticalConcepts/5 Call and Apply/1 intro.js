function test() {
  console.log("test");
}

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

person.getAddress.call(person2); // this points now to person2
person.getAddress.apply(person2); // this points now to person2

person = {
  firstName: "Jean",
  city: "Paris",
  getAddress(country, punctuation) {
    console.log(
      `${this.firstName} lives in ${this.city} which is in ${country} ${punctuation}`
    );
  },
};

person.getAddress.call(person2, "Japan", ".");
person.getAddress.apply(person2, ["Japan", "!!!!"]);
