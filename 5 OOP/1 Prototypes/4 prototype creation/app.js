let person = {
  firstName: "Jean",
  lastName: "Dupont",
};

let personProto = {
  greeting: `My name is ${this.firstName} ${this.lastName}`,
};

let personUpdated = Object.create(personProto); // void but gets a Prototype and keeps the Prototype chain

personUpdated.firstName = "Pierre";
personUpdated.lastName = "Martin";

console.log(personUpdated.greeting());

console.log(personUpdated.valueOf());
