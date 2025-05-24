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

// show console.log for:
//  1- obj => we get the object
//  2- obj.getTheValueOfThis() and we get the this of the object
