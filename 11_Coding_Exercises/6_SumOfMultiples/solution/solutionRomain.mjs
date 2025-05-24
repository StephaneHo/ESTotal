export const isMultiple = (multiples, candidate) => {
  return multiples.some((m) => candidate % m === 0);
};
export const sum = (multiples, level) => {
  let result = 0;
  Array(level - 1)
    .fill()
    .map((_, index) => {
      result += isMultiple(multiples, index + 1) ? index + 1 : 0;
    });
  return result;
};
