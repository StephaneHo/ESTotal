const fakeAPI = () => {
  console.log("Searching the API ... please wait");
  console.log("Please wait a bit more...!");
};

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", fakeAPI);
