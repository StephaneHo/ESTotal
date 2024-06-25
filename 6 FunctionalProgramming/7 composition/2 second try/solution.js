"use strict";

let words =
  "hockey suggest garlic key fence loop coin attend mobile bird effort bulk suggest trial agree garlic fence bird little garlic";

// fn1 -> data -> fn2 -> data -> fn3 -> data

// 1. make uppercase
const makeUpperCase = (text) => text.toUpperCase();

// 2. convert string to array of words
const convertToArray = (text) => text.split(" ");

// 3. remove duplicates from Array
const removeDuplicates = (arr) => new Set(arr);

// 4. convert array like to array
const fromArryLikeToArry = (arrayLike) => [...arrayLike];

// 5. convert array to string
const convertToString = (arr) => arr.join(" ");

const res = convertToString(
  fromArryLikeToArry(removeDuplicates(convertToArray(makeUpperCase(words))))
);

console.log(res);

const composeTwoFunctions = (func1, func2) => (data) => func1(func2(data));

const compose =
  (...funcs) =>
  (data) =>
    funcs.reduceRight((acc, func) => func(acc), data);

const res2 = compose(
  convertToString,
  fromArryLikeToArry,
  removeDuplicates,
  convertToArray,
  makeUpperCase
)(words);

console.log(res2);
