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
    // the first thing is to call the super, which call the constructor of the superclass
    // you must call super before anything else
    super(price, "auto");
    this.brand = brand;
  }

  // this is polymorphism: you can change the behaviour of the method for these objects
  subscribe(dtm, numberOfPeople) {
    if (this.brand !== "Tesla") {
      // for an unknowrn reason you do not want to issue insurance for Telsa cars
      this.subscriptions.push({ dtm, numberOfPeople });
    }
  }
}

class AssuranceHabitation extends Assurance {
  constructor(price, area) {
    super(price, "house");
    this.area = area;
  }
  subscribe(dtm, numberOfPeople) {
    // if you want to issue an insurance for a castle, please get a special insurance
    if (this.area > 10000000) {
      this.subscriptions.push({ dtm, numberOfPeople });
    }
  }
}

const matmutAssuranceAuto = new AssuranceAuto(30, "BMW");

matmutAssuranceAuto.subscribe(new Date(), 100);

console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new AssuranceHabitation(20);
matmutAssuranceHabitation.subscribe(new Date(), 1000);
console.log(matmutAssuranceHabitation);
