const logCallback = function () {
  console.log("This function is a callback function");
};

setTimeout(logCallback, 3000);

// with an anomymous function
setTimeout(() => {
  console.log("This function is an another callback function");
}, 4000);

const myButton = document.getElementById("id");
console.log(myButton);
myButton.addEventListener("click", function (e) {
  console.log("button clicked");
});
