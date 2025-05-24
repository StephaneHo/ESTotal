import {
  filterUniqueCombinations,
  computeValue,
  isValidCombination,
  computeCombinations,
} from "./utils";

export const knapsack = (maximumWeight, items) => {
  const combinations = computeCombinations(items);
  const validCombinations = combinations.filter((combination) =>
    isValidCombination(combination, maximumWeight)
  );

  return filterUniqueCombinations(validCombinations).reduce((acc, item) => {
    const value = computeValue(item);
    if (value >= acc) {
      acc = value;
    }
    return acc;
  }, 0);
};
