const company = {
  cName: "Matmut",
  city: "Rouen",
  getInfos: function () {
    console.log("this is", this);
    return `${this.cName} is located at ${this.city}`;
  },
};

// log company.getInfos()
// on the left hand side, it is company

// when i store it in a variable, const test = company.getInfos;
// test() is invoked with the window object and neither name or city exist
