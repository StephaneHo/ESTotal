let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

const compileInfos = function (callback) {
  if (typeof callback === "function") {
    callback();
  }
};

compileInfos(person.getAddress.bind(person));

let person2 = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};
// note that using call and apply would invoke the fx right away
setTimeout(person2.getAddress.bind(person2), 2000);
