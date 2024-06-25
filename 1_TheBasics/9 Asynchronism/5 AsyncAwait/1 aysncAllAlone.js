async function f() {
  return 1;
}

f().then(console.log); // 1

async function g() {
  return Promise.resolve(2);
}

g().then(console.log); // 2
