const add = (a, b) => a + b;
const isDivisible = (i, factors) => factors.some((factor) => i % factor === 0);
export const sum = (factors, maxNumber) => {
  return Array(maxNumber)
    .fill()
    .map((_, i) => i)
    .filter((i) => (isDivisible(i, factors) ? i : 0))
    .reduce(add, 0);
};
