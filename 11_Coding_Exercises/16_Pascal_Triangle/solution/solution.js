const sum = (a, b) => a + b;

const STEP = 2;

const partitionRow = (row, step) => {
  const maxSliceIndex = row.length - step + 1;
  return row
    .slice(0, maxSliceIndex)
    .map((item, index) => row.slice(index, index + step));
};

const prepareNextRowIteration = (row, step) =>
  partitionRow(row, step).map((arr) => arr.reduce(sum, 0));

const buildNextRowIteration = (rowNumber, res) => {
  let row = res[res.length - 1];
  let transformedRow;
  if (rowNumber === 1) {
    transformedRow = [1];
  } else {
    transformedRow = [1, ...prepareNextRowIteration(row, STEP), 1];
  }
  return transformedRow;
};
const recursive = (rowNumber, res) => {
  let i = 1;
  let transformedRow = [];
  while (i <= rowNumber) {
    transformedRow = buildNextRowIteration(i, res);
    res.push(transformedRow);
    i++;
  }
  return res;
};
export const rows = (rowNumber) => {
  let res = [];
  return rowNumber === 0 ? [] : recursive(rowNumber, res);
};
