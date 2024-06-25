let counter = 0;
let title = document.getElementById("title");

function titleClick(event) {
  counter++;
  console.log(`the title has been counted ${counter}`);
  if (counter > 5) {
    title.removeEventListener("click", titleClick);
  }
}

title.addEventListener("click", titleClick);
