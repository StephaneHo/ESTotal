let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(this);
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

const title = document.getElementById("title");
title.addEventListener("click", person.getAddress.bind(person));
