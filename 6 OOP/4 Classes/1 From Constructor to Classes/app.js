// when constructors were created in JS, the idea was to create sth similar how OOP is used in similar languages
// classes were added in ES6
// classes look similar but behind the scene, they sill use prototype and inheritance

// everything about the class is contained between the curly braces
class Assurance {
  // the first thing you want to create is a constructor
  // this particular fx is called every time you want to instanciate a class
  constructor(label, price) {
    this.label = label;
    this.price = price;
    this.subscriptions = [];
  }

  // we do not need to define separately
  // note: about it does not work like other OOP: this subscribe method will be added to the prototype
  subscribe(dtm, numberOfPeople) {
    this.subscriptions.push({ dtm, numberOfPeople });
  }
}

// observe the subscribe method is on the [[Prototype]]
const matmutAssuranceAuto = new Assurance("auto", 30);
console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new Assurance("maison", 20);
console.log(matmutAssuranceHabitation);

// what is we want to add a property ?
Assurance.prototype.companyName = "Matmut";

// buy default, classes use strict mode (this is not the case for construcotr fx)
// if you forget new, you get an error because this is undefined
