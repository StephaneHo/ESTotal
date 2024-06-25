function getTheValueOfThis() {
  console.log("the value of this is", this);
}

// window object
getTheValueOfThis();

// same as
window.getTheValueOfThis();

const obj = {
  color: "blue",
  getTheValueOfThis: getTheValueOfThis,
};

// console.log
// obj => we get the object
//  obj.getTheValueOfThis and we get the object
