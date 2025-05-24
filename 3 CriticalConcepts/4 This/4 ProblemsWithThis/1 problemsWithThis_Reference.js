const getAddress = function () {
  console.log(`${this.firstName} lives in ${this.city}`);
};

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress,
};

person.getAddress(); // works OK

const showAddress = person.getAddress;

showAddress(); // NOK because who invokes this function ? the window, not the person , coherent with the rules, but not what we expect
