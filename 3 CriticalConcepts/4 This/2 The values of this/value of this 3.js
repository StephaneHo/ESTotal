function getTheValueOfThis() {
  console.log("the value of this is", this);
}
// first point
// show what happens when using strict mode
// "use strict";
// using sttrict causes the this to be undefined to be undefined unless we invoke it from an object
// window.getTheValueOfThis() => the value of this is window

// second point
// show same result between a fx declaration and a fx expression with var

// thrid point
// but if we sue const or let instead of var, getTheValueOfThis will not be added to the window object
const getTheValueOfThat = function () {
  console.log("the value of this is", this);
};
// show that getTheValueOfThat() is Ok but window.getTheValueOfThat() NOK
// when a fx expression is defined with let or const, it is not added to the window object
// like it is for var or for a fx declaration
// because in that case, there are variables

// answer to a question:
// . Why do variables declared using the var keyword get defined on window and variables
// declared with const and let not defined on window?
// Because the specification says so.
// If you are asking for the reason behind that decision,
// then you should reach out to the specification maintainer
