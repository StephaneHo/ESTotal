// more reusable

const fakeAPI = () => {
  console.log("Searching the API ... please wait");
  console.log("Please wait a bit more...!");
};

const searchInput = document.getElementById("search");

const debounce = (callback, delay) => {
  let debounceTimeoutId;

  return () => {
    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }
    debounceTimeoutId = setTimeout(callback, delay);
  };
};

const debouncedFakeAPI = debounce(fakeAPI, 500);

searchInput.addEventListener("input", debouncedFakeAPI);
