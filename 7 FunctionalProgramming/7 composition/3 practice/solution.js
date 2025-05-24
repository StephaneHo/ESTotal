"use strict";

const compose =
  (...fns) =>
  (data) =>
    fns.reduceRight((acc, fun) => fun(acc), data);

const pipe =
  (...fns) =>
  (data) =>
    fns.reduce((acc, fun) => fun(acc), data);

// Compose a function that will receive a string and make it title case (e.g. Title Case).
const capitalizeFirstLetter = (str) =>
  [...str]
    .map((x, index) => {
      if (index === 0) {
        return x.toUpperCase();
      }
      return x;
    })
    .join("");
// alternative way: str.charAt(0).toUpperCase() + str.slice(1)

console.log(capitalizeFirstLetter("test"));

const makeToLowerCase = (text) => text.toLowerCase();

const makeTitleCase = (text) =>
  compose(capitalizeFirstLetter, makeToLowerCase)(text);

const convertToArray = (text) => text.split(" ");

const makeTitleCaseArr = (arr) => arr.map(makeTitleCase);

// 5. convert array to string
const convertToString = (arr) => arr.join(" ");

const str = "Make THIS string title Case.";
const res = compose(convertToString, makeTitleCaseArr, convertToArray)(str);
console.log(res);
const res2 = pipe(convertToArray, makeTitleCaseArr, convertToString)(str);
console.log(res2);
