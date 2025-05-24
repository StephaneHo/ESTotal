"use strict";

let arr = [1, 2, 3, 4, 5];
let obj = {
  fName: "Tom",
  lName: "Hansen",
};

let obj2 = {
  fullName() {
    return this.fName + " " + this.lName;
  },
};
// note that obj2 is going to be the prorotype object for obj3
let obj3 = Object.create(obj2);

obj3.fName = "Summer";
obj3.lName = "Finn";

// note that fullName() is available
// valueOf also , why ?
// because it cannot find on obj3, not in obj2, but finds it on the prototype of the object prototype
