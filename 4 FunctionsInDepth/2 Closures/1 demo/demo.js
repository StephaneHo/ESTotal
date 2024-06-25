const delayGreeting = function (name) {
  let greeting = "Good morning";
  let punctuation = "!!!!!";

  setTimeout(() => console.log(`${greeting} ${name} ${punctuation}`), 2000);
};

delayGreeting("Matmut");

let text =
  "I love cats. Cats are very easy to love. Cats are very popular. My cat is the best";

const DOG = "dog";
const change = (replacingStr) => (text) =>
  text.replaceAll(/cat/gi, (arg) => {
    if (arg.charCodeAt(0) >= 97) {
      return replacingStr;
    } else {
      return replacingStr[0].toUpperCase() + replacingStr.slice(1);
    }
  });
console.log(text);

const changeDOG = change(DOG);
const text2 = changeDOG(text);
console.log(text2);

const changeGiraffe = change("giraffe");
const text3 = changeGiraffe(text);
console.log(text3);
