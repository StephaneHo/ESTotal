let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(this);
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

const title = document.getElementById("title2");
title.addEventListener("click", person.getAddress);

// "this" is the actual HTML element on the  HTML file
// it should be the object person, but it actually loses the reference
