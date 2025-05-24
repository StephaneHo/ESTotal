// do not use arrow fx with a dynamic context
// event listener with a callback

const getAddress = () => {
  console.log(`${this.firstName} lives in ${this.city}`);
};

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress,
};

const div = document.getElementById("title2");
/* div.addEventListener("click", function () {
  this.innerHTML = "I was clicked";
});  */ // the text changes
div.addEventListener("click", () => {
  console.log(this);
  this.innerHTML = "I was clicked";
});
// this is window, not the div HTML element
