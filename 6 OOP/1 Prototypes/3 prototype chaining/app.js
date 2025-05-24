const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr));
// the prototype object is also an object => it also has an prototype object
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));
