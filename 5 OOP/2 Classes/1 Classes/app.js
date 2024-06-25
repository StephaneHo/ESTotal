class Assurance {
  constructor(label, price) {
    this.label = label;
    this.price = price;
    this.subscriptions = [];
  }
  subscribe(dtm, numberOfPeople) {
    this.subscriptions.push({ dtm, numberOfPeople });
  }
}
const matmutAssuranceAuto = new Assurance("auto", 30);
console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new Assurance("maison", 20);
console.log(matmutAssuranceHabitation);
