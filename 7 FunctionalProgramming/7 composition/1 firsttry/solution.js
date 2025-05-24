"use strict";

let words =
  "fox suggest garlic key boot loop cat attend mobile bird effort fox trial boot garlic fence bird cat fox";

// fn1 -> data -> fn2 -> data -> fn3 -> data

// 1. make uppercase
const makeUpperCase = (text) => text.toUpperCase();

// 2. convert string to array of words
const convertToArray = (text) => text.split(" ");

// 3. remove duplicates from Array
const removeDuplicates = (arr) => new Set(arr);

// 4. convert array like to array
const fromArryLikeToArry = (arrayLike) => [...arrayLike];

// 5. sort array
const sortArray = (arr) => {
  console.log(arr);
  return arr.toSorted();
};

// 6. convert array to string
const convertToString = (arr) => arr.join(" ");

const res = convertToString(
  sortArray(
    fromArryLikeToArry(removeDuplicates(convertToArray(makeUpperCase(words))))
  )
);

console.log(res);
