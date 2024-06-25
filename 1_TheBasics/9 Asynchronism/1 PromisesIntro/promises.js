let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed
  console.log("inside the promise");

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => {
    const testValue = Math.random();
    if (testValue > 0.5) {
      return resolve("done");
    } else {
      return reject(new Error("Whoops!"));
    }
  }, 2000);
});

promise.then(
  function (result) {
    console.log("Success !!!" + result);
  },
  function (error) {
    console.log("The error is" + error);
  }
);

promise
  .then(function (result) {
    console.log("Success in the then with only one function!!!" + result);
  })
  .catch(function (error) {
    console.log("The error in the catch is" + error);
  });

promise
  .then(function (result) {
    console.log("Success in the then with only one function!!!" + result);
  })
  .catch(function (error) {
    console.log("The error in the catch is" + error);
  })
  .finally(() => console.log("it is finished"));
