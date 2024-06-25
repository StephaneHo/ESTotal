// Promise.finally
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });

// rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }

//New JavaScript RegExp Features
//ECMAScript 2018 added 4 new RegExp features:

// Unicode Property Escapes (\p{...})
// A unicode character class escape is a kind of character class escape that matches a set of characters specified by a Unicode property.
// It's only supported in Unicode-aware mode. When the v flag is enabled, it can also be used to match finite-length strings.

/* \p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value} */
const sentence = "A ticket to 大阪 costs ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpLatin = /\p{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpLatin));
// Expected output: Array ["A", "ticket", "to", "costs"]
