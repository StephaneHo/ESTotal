const createAssurance = function (label, price) {
  return {
    label,
    price,
    subscriptions: [],
    subscribe(dtm, numberOfPeople) {
      this.subscriptions.push({ dtm, numberOfPeople });
    },
  };
};

const matmutAssuranceAuto = createAssurance("auto", 30);
const matmutAssuranceHabitation = createAssurance("maison", 20);

matmutAssuranceAuto.subscribe(new Date(), 100);
console.log(matmutAssuranceAuto); // our methods change the data
