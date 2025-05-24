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

// 5. sort array
const sortArray = (arr) => {
  console.log(arr);
  return arr.toSorted();
};

// 6. convert array to string
const convertToString = (arr) => arr.join(" ");

// we take 2 fx
// it returns a fx that takes data,
// that first processes it using the func2, then processes the result to th func1
const composeTwoFunctions = (func1, func2) => (data) => func1(func2(data));

// what is we do not know the number of fx ?
// reduce can take many things and brings it into a single result
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
// (...func) gather the fx into an array so we use the spread operator
const compose =
  (...funcs) =>
  (data) =>
    funcs.reduceRight((acc, func) => func(acc), data);
// why reduceRight ?
//reduce acts on array, but we want to go from right form left (mathematical composition)
// the callback fx : we pass 2 values:
// the acc is what get returns every time it iterates through
// the func is the variable to represent the variable as we go through

// compose works from bottom to top, or rahter from right to left, like mathematical composition
const res2 = compose(
  convertToString,
  fromArryLikeToArry,
  removeDuplicates,
  convertToArray,
  makeUpperCase
)(words);

console.log(res2);
