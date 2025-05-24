const getAddress = () => {
  console.log(`${this.firstName} lives in ${this.city}`);
};

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress,
};

person.getAddress(); // works OK

const showAddress = person.getAddress;

showAddress();
