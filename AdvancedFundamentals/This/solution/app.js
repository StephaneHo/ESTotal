"use strict";

var getTheValueOfThis = function () {
  console.log("function expression", this);
};

// window object
getTheValueOfThis();

// same as
window.getTheValueOfThis();

// use strict causes it to be undefined unless invoked with an object

function anotherGetThis() {
  console.log("function declaration", this);
}
anotherGetThis();
window.getTheValueOfThis();

const getTheValueOfThat = function () {
  console.log(this);
};

getTheValueOfThat();

window.getTheValueOfThat(); // undefined
