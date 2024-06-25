const codonsDico = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};
const partition = (step, input) => {
  return [...input]
    .map((_, index, arr) => {
      if (index % step === 0) {
        return arr.slice(index, index + step).join("");
      } else {
        return null;
      }
    })
    .filter((arr) => arr !== null);
};
const invalidProteinChain = (proteins) =>
  proteins.findIndex((protein) => protein === "INVALID") >= 0;
export const translate = (input) => {
  if (input === null || input === undefined) {
    return [];
  }
  const partitionedInput = partition(3, input);
  const tempProteinChain = partitionedInput.map(
    (codon) => codonsDico[codon] ?? "INVALID"
  );
  const stopIndex = tempProteinChain.findIndex((protein) => protein === "STOP");
  const proteinChain =
    stopIndex === -1 ? tempProteinChain : tempProteinChain.slice(0, stopIndex);
  if (invalidProteinChain(proteinChain)) {
    throw new Error("Invalid codon");
  }
  return proteinChain;
};
