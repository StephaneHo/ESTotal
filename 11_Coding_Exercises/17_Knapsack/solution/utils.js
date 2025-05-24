export const filterUniqueCombinations = (data) =>
  data.filter(function (combination) {
    //console.log("combination", combination);
    const key = combination.reduce((combinationKey, elementToPick) => {
      const { weight, value } = elementToPick;
      return combinationKey + `${weight}${value}`;
    }, "");
    // console.log("key", key);
    return !this.has(key) && this.add(key);
  }, new Set());

export const computeWeight = (combination) =>
  combination.reduce((acc, { weight }) => acc + weight, 0);

export const computeValue = (combination) =>
  combination.reduce((acc, { value }) => acc + value, 0);

export const isValidCombination = (combination, maximumWeight) =>
  computeWeight(combination) <= maximumWeight;

export const computeCombinations = (items) =>
  items.reduce(
    (acc, item) => {
      return acc.concat(acc.map((x) => [...x, item]));
    },
    [[]]
  );
