const company = {
  cName: "Matmut",
  city: "Rouen",
  getInfos: function () {
    return "this is a company";
  },
};
const infos = company.getInfos();
console.log(infos);

const company2 = {
  cName: "Matmut",
  city: "Rouen",
  getInfos: function () {
    return `${this.cName} is located at ${this.city}`;
  },
};

const infos2 = company2.getInfos();
console.log(infos2);

const getInfos = company2.getInfos;
console.log(getInfos());
