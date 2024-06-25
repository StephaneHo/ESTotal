// Array.prototype.findLast()
// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

const array1 = [5, 12, 50, 130, 44];

const foundLast = array1.findLast((element) => element > 45);

console.log(foundLast);
// Expected output: 130

const foundFirst = array1.find((element) => element > 45);
console.log(foundFirst);

// The findLastIndex() method of Array instances iterates the array in reverse order
// and returns the index of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.

const array2 = [5, 12, 50, 130, 44];

const foundLastIndex = array2.findLastIndex((element) => element > 45);

console.log(foundLastIndex);
// Expected output: 3

const foundFirstIndex = array2.findIndex((element) => element > 45);
console.log(foundFirstIndex);
// Expected output: 2

// The toReversed() method of Array instances is the copying counterpart of the reverse() method.
// It returns a new array with the elements in reversed order.
// The difference between the new toReversed() method and the old reverse() method is that the new method creates a new array,
//  keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const months2 = ["Jan", "Feb", "Mar", "Apr"];

const reversed = months.toReversed();
console.log(reversed);
console.log(months);
console.log(months2.reverse());
console.log(months2);

// The difference between the new toSorted() method and the old sort() method is that the new method creates a new array, keeping the original array unchanged,
//  while the old method altered the original array.

const months3 = ["Jan", "Feb", "Mar", "Apr"];
const months4 = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months3.toSorted();
console.log(sorted);
console.log(months3);
console.log(months4.sort());
console.log(months4);

// Array.prototype.toSpliced()
// The toSpliced() method of Array instances is the copying version of the splice() method.
// It returns a new array with some elements removed and/or replaced at a given index.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
// keeping the original array unchanged, while the old method altered the original array.

// toSpliced(start)
// toSpliced(start, deleteCount)
// toSpliced(start, deleteCount, item1)
// toSpliced(start, deleteCount, item1, item2)
// toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)

const months5 = ["Jan", "Feb", "Mar", "Apr", "May"];
const months6 = ["Jan", "Feb", "Mar", "Apr", "May"];

const spliced = months5.toSpliced(1, 2);
console.log(spliced);
console.log(months5);
console.log(months6.splice(1, 2));
console.log(months6);

// Array.prototype.with()
// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index.
// It returns a new array with the element at the given index replaced with the given value.

const months7 = ["Januar", "Februar", "Mar", "April"];
const updatedMonths = months7.with(2, "March");
console.log({ updatedMonths });
console.log({ months7 });
