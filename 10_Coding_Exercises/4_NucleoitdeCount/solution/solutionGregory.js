export function countNucleotides(data) {
  const nucleotides = { A: 0, C: 0, G: 0, T: 0 };
  const dataArray = [...data];
  if (dataArray.every((value) => Object.keys(nucleotides).includes(value))) {
    const reduce = dataArray.reduce((acc, value) => {
      acc[value] += 1;
      return acc;
    }, nucleotides);
    return Object.values(reduce).join(" ");
  } else {
    throw new Error("Invalid nucleotide in strand");
  }
}
