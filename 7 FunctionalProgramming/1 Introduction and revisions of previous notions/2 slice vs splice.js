const array1 = ["a", "b", "c", "d"];
const array2 = ["a", "b", "c", "d"];

const array11 = array1.splice(0, 1);
console.log(array1); // note that array1 has changed
console.log(array11);

const array22 = array2.slice(0, 1);
console.log(array2); // note that array2 has not changed
console.log(array22);
