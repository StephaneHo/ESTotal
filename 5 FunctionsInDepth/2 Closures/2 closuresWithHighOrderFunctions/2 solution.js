let text =
  "I love cats. Cats are very easy to love. Cats are very popular. My cat is the best";

const DOG = "dog";
const GIRAFFE = "giraffe";
const change = (replacingStr) => (text) =>
  text.replaceAll(/cat/gi, (arg) => {
    // lowercase start at 97
    // https://www.ibm.com/docs/en/sdse/6.4.0?topic=configuration-ascii-characters-from-33-126
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

const changeGiraffe = change(GIRAFFE);
const text3 = changeGiraffe(text);
console.log(text3);

// change(string) have both finished executing
// BUT you keep in memory the replacingStr
