Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error in the second promise")), 2000)
  ), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
  .then(console.log)
  .catch(console.log);
