const createGreeting = (string1, string2, callback) => {
  const res = string1 + " " + string2;
  if (typeof callback === "function") {
    return callback(res);
  }
  return res;
};

const greeting = createGreeting("Hello", "Frank", (greet) => `${greet}!!!!`);

console.log(greeting);

const greeting2 = createGreeting(
  "Hello",
  "Annie",
  (greet) => `${greet.toUpperCase()}`
);

console.log(greeting2);
