let person = {
  name: "Jean",
  age: 33,
};

let otherPerson = Object.assign({}, person);
let person2 = { ...person };

person.age = 22;

console.log(person);
console.log(otherPerson);

console.log(person2);

let assuarances = ["assurance1", "asurance2"];

let copiedAssurances = [...assuarances];

assuarances.push("assurance3");

console.log(assuarances);
console.log(copiedAssurances);

person = {
  name: "Jean",
  age: 33,
  address: { city: "Paris" },
};

person2 = { ...person };

person.address.city = "Tokyo";

console.log(person2);

person3String = JSON.stringify(person);

person.address.city = "Osaka";

person3 = JSON.parse(person3String);
console.log(person3); // deep cloning achieved
