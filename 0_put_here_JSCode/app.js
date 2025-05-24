// what if I want to add a property on the prototype , so that all objects inherit it ?

const CreateAssurance = function (label, price) {
  this.label = label;
  this.price = price;
  this.subscriptions = [];
};
// notice we have a property: proptotype which is different from the [[Prototype]] object
// by default, the prototype property points to constructor
CreateAssurance.prototype.company = "Matmut";

CreateAssurance.prototype.subscribe = function (dtm, numberOfPeople) {
  this.subscriptions.push({ dtm, numberOfPeople });
};

// when these objects are created, they will have the company and subscribe inherited
const matmutAssuranceAuto = new CreateAssurance("auto", 30);
console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new CreateAssurance("maison", 20);
console.log(matmutAssuranceHabitation);
