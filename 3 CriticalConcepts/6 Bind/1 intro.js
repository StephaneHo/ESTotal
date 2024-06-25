function test() {
  console.log("test");
}

const newTest = test.bind();
console.log(newTest); // newTest is a function
newTest();

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

let person2 = {
  firstName: "Chisato",
  city: "Osaka",
};
let getUpdatedAddress = person.getAddress.bind(person2);
getUpdatedAddress();

person = {
  firstName: "Jean",
  city: "Paris",
  getAddress(country, punctuation) {
    console.log(
      `${this.firstName} lives in ${this.city} which is in ${country} ${punctuation}`
    );
  },
};

getUpdatedAddress = person.getAddress.bind(person2);

getUpdatedAddress("Japan", "!!!!");
