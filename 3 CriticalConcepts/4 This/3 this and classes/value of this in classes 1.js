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
// different behviour, the value of this is not set to the window, it is undefined

// window.whatever => undefined
// fake.whatever => error

// show that this is set to undefined, hence we get an error
// in the object example, it was window
