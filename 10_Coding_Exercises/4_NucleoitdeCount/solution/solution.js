const check = (strand) => {
  if (strand.match(/[^ACGT]/)) {
    throw Error("Invalid nucleotide in strand");
  }
};
export function countNucleotides(strand) {
  check(strand);
  const myHash = [...strand].reduce(
    (acc, nucleotide) => {
      acc[nucleotide] = acc[nucleotide] === 0 ? 1 : acc[nucleotide] + 1;
      return acc;
    },
    { A: 0, C: 0, G: 0, T: 0 }
  );
  const keys = Object.keys(myHash);
  return keys
    .map(function (v) {
      return myHash[v];
    })
    .join(" ");
}
