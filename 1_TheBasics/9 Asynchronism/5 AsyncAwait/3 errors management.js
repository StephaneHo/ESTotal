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

async function f() {
  try {
    let response = await promise;
    console.log("Success in the async / await" + response);
  } catch (err) {
    console.log("Error in the async / await" + err);
  } finally {
    console.log("FINALLY");
  }
}

f();
