// TODO more reusablewith arrguements

const fakeAPI = (word) => {
  console.log(`Searching the ${word} ... please wait`);
  console.log("Please wait a bit more...!");
};

const searchInput = document.getElementById("search");

const debounce = (callback, delay) => {
  let debounceTimeoutId;

  return (...args) => {
    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }
    debounceTimeoutId = setTimeout(() => callback(args), delay);
  };
};

const debouncedFakeAPI = debounce(fakeAPI, 500);

searchInput.addEventListener("input", (evt) =>
  debouncedFakeAPI(evt.target.value)
);
