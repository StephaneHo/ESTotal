const numbers = [1, 3, 10, 46, 125];

// compute the sum without using a for of loop?
const add = (acc, curr) => acc + curr;
const sum1 = numbers.reduce(add, 0);
console.log(sum1);

// now a bit more complex:
// we want a utility that returns the sum, the count and the average

const sumCountAverage = (acc, curr) => ({
  sum: acc.sum + curr,
  count: acc.count + 1,
  average: (acc.sum + curr) / (acc.count + 1),
});

const { sum, count, average } = numbers.reduce(sumCountAverage, {
  sum: 0,
  count: 0,
  average: 0,
});
console.log(sum);
console.log(count);
console.log(average);

const double = numbers.map((x) => x * 2);
console.log(double);

const filteredArr = numbers.filter((x) => x > 30);
console.log(filteredArr);
