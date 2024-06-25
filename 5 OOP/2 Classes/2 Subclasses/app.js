class Assurance {
  constructor(price, label) {
    this.label = label;
    this.price = price;
    this.subscriptions = [];
  }
  subscribe(dtm, numberOfPeople) {
    this.subscriptions.push({ dtm, numberOfPeople });
  }
}

class AssuranceAuto extends Assurance {
  constructor(price, brand) {
    super(price, "auto");
    this.brand = brand;
  }

  subscribe(dtm, numberOfPeople) {
    if (this.brand !== "Tesla") {
      // for an unknowrn reason you do not want to insurance telsa cars
      this.subscriptions.push({ dtm, numberOfPeople });
    }
  }
}

class AssuranceHabitation extends Assurance {
  constructor(price, area) {
    super(price, "house");
  }
}

const matmutAssuranceAuto = new AssuranceAuto(30, "BMW");

matmutAssuranceAuto.subscribe(new Date(), 100);

console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new AssuranceHabitation(20);
matmutAssuranceHabitation.subscribe(new Date(), 1000);
console.log(matmutAssuranceHabitation);
