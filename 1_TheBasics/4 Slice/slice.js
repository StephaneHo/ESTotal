const tableau = [1, 2, 3];
console.log(tableau.slice()); // [1, 2, 3]
console.log(tableau.slice(1)); // [2, 3]
console.log(tableau.slice(0, 1)); // [1]

console.log(tableau.slice(-1)); // [3]
console.log(tableau.slice(0, -1)); // [1, 2]

console.log(tableau.slice(4)); // []
console.log(tableau.slice(0, 6)); // [1, 2, 3]
