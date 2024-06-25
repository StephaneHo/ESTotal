const CreateAssurance = function (label, price) {
  this.label = label;
  this.price = price;
  this.subscriptions = [];
};

const matmutAssuranceAuto = new CreateAssurance("auto", 30);
console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new CreateAssurance("maison", 20);
console.log(matmutAssuranceHabitation);
