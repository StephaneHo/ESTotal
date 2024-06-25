class Company {
  constructor(companyName) {
    this.companyName = companyName;
  }

  getInfos() {
    return `this is the company ${this.companyName}`;
  }
}

const company = new Company("Matmut");
const getInfos = company.getInfos;
console.log(getInfos());

// previously, we had undefined but now we have an error
