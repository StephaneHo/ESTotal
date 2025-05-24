"use strict";
// how we can create a fx that takes as many arg as we want ?
// sum(1,2,3,4)

// previously we had : arguments, which is array like
const display = () => console.log(arguments);
display(1, 2, 3);
// we get an error in the browser: arguments is not defined

const displayImproved = (...args) => console.log(args);
displayImproved(1, 2, 3);
