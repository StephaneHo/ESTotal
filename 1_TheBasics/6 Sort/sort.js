let tableau = [1, 10, 3, 13, 17, 5];
tableau.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  // a doit être égal à b
  return 0;
});
console.log(tableau);

tableau = [1, 10, 3, 13, 17, 5];
tableau.sort((a, b) => a - b);
console.log(tableau);

tableau = [1, 10, 3, 13, 17, 5];
tableau.sort((a, b) => b - a);
console.log(tableau);
