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
