let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});

async function f() {
  let result = await promise;
  console.log(result);
}

f();

promise.then(console.log);
