const assuranceProto = {
  subscribe(dtm, numberOfPeople) {
    this.subscriptions.push({ dtm, numberOfPeople });
  },
};

const createAssurance = function (label, price) {
  let obj = Object.create(assuranceProto); // creates a blank object that thas the objProto as prototype
  return Object.assign(obj, {
    label,
    price,
    subscriptions: [],
  }); // using destructuration here will not work
};

const matmutAssuranceAuto = createAssurance("auto", 30);
console.dir(Object.getPrototypeOf(matmutAssuranceAuto));

const matmutAssuranceHabitation = createAssurance("maison", 20);

matmutAssuranceAuto.subscribe(new Date(), 100);
console.log(matmutAssuranceAuto); // our methods change the data
