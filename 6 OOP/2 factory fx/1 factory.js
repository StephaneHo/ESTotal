// factory fx:  it is a fx you call and you return an obj
// the idea: you pass some data you want to the fx
// and the fx creates the object with the data and you may have additional properties

const createAssurance = function (label, price) {
  return {
    label,
    price,
    subscriptions: [],
    // this subsscribe method can be quite complex and the complexity can be hidden inside this method
    subscribe(dtm, numberOfPeople) {
      this.subscriptions.push({ dtm, numberOfPeople });
    },
  };
};

const matmutAssuranceAuto = createAssurance("auto", 30);
const matmutAssuranceHabitation = createAssurance("maison", 20);

matmutAssuranceAuto.subscribe(new Date(), 100);
console.log(matmutAssuranceAuto); // our methods change the data

// note the encapsulation: we have data and methods that act on the object
