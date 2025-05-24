const fakeAPI = () => {
  console.log("Searching the API ... please wait");
  console.log("Please wait a bit more...!");
};

const searchInput = document.getElementById("search");
let debounceTimeoutId;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeoutId);
  debounceTimeoutId = setTimeout(fakeAPI, 500);
});
