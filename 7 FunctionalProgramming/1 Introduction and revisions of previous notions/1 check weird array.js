const weirdArray = [0, 1, NaN, {}, null, undefined, () => {}, [], 3n];

const isDefined = (el) => el != null;

// pass each element to the function and return the result in a new array
const newArray = weirdArray.map((el) => isDefined(el));
const newArray2 = weirdArray.map(isDefined);

console.log(newArray);
console.log(newArray2);
