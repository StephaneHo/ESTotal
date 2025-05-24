const arr = [1, 2, 3];

console.log(arr);
// you see __proto__ or [[Prototype]]
// you see all the methods that can be used with an array

// try with array.push. length
// where does that push come from ?

// we can also do arr.__proto__ to display the prototype
// this particular way of accessing / the modifying the prototype should never be used
// was never a part odf ECMAscript specification
// it was just added by brosers and got popular later and was added to the specification later
// there are other ways to access prototype
Object.getPrototypeOf(arr);

// same thing with the obj:
// person.valueOf()
// person.hasOwnProperty('valueof'): it is not a part of the prototype object

// not at the bottom: __proto__  it is the prototype chain
let person = { firstName: "Jean" };
