class Company {
  constructor(companyName) {
    this.companyName = companyName;
  }

  getInfos() {
    console.log("THE VALUE OF THIS IN THE CLASS IS ", this);
    return `this is the company ${this.companyName}`;
  }
}

const company = new Company("Matmut");

const test = company.getInfos;
// different behviour when we invoke the method from a class
// we invoke it in the global scope
// but the value of this is not set to the window,
// it is undefined

// window.whatever => undefined
// fake.whatever => error

// when I isolate the getInfos method on its own, it tries to
// undefined.field
