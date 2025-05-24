// how to do just like : let date = new Date() or let arr = new Array()
// the new is key part of the constructor fx
// note that the constructor starts with a capital letter (recommanded)
const CreateAssurance = function (label, price) {
  // inside, this is used to refer to the object that is returned
  this.label = label;
  this.price = price;
  this.subscriptions = [];
};

//  notice the new : it is required for constructor fx
// what happened if i did not use new ? check !
// the new accomplishes:
// 1 a new object is created in memory
// 2 the new objects [[Prototype]] pointer is assigned to the constructors prototype property
// 3 the keyworkd this for the constructor fx is assigned to the new object
// 4 the code in the constructor is executed
// 5 if the constructor fx does not return a value, the object is returned
const matmutAssuranceAuto = new CreateAssurance("auto", 30);
console.log(matmutAssuranceAuto);

const matmutAssuranceHabitation = new CreateAssurance("maison", 20);
console.log(matmutAssuranceHabitation);
