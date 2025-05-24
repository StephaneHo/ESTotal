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

// log compileInfos(person.getAddress);  without use strict => udnefined

// log compileInfos(person.getAddress);  with use strict => error

// add console.log(this) in the getAdress()

// we lose the object reference by the keyword this

let person2 = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

// setTimeout(person2.getAddress, 2000)
// setTiemout is handled in the brozser and the callback is placed in the event queue
// we also the reference
