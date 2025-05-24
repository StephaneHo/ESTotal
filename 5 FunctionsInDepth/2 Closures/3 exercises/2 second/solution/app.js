// each time a button has been clicked, display 2 numbers
// first: how many times this button has been clicked
// second: how many times in total all the buttons together have been clicked

const initialize = function () {
  const buttons = [
    document.getElementById("id1"),
    document.getElementById("id2"),
    document.getElementById("id3"),
  ];

  let totalCount = 0;

  const incrementAndDisplayCounters = function (count) {
    totalCount++;
    console.log(
      `this button has been clicked ${count} times, in total all the buttons have been clicked ${totalCount} times`
    );
  };

  for (let button of buttons) {
    let count = 0;
    button.addEventListener("click", function () {
      count++;
      incrementAndDisplayCounters(count);
    });
  }
};

initialize();
