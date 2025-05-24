// you want the subscribe method not on the object but on the prototype, so that it can be inherited
const assuranceProto = {
  subscribe(dtm, numberOfPeople) {
    this.subscriptions.push({ dtm, numberOfPeople });
  },
};

const createAssurance = function (label, price) {
  // creates a blank object that thas the objProto as prototype
  let obj = Object.create(assuranceProto);
  // set the properties on the blank object
  // we could do obj.label = label ...
  return Object.assign(obj, {
    label,
    price,
    subscriptions: [],
  });
};

const matmutAssuranceAuto = createAssurance("auto", 30);
console.dir(Object.getPrototypeOf(matmutAssuranceAuto));

const matmutAssuranceHabitation = createAssurance("maison", 20);

matmutAssuranceAuto.subscribe(new Date(), 100);
console.log(matmutAssuranceAuto); // our methods change the data
