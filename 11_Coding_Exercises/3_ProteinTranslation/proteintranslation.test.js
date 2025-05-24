import { translate } from "./solution.mjs";

describe("protein translation", () => {
  it("Empty RNA has no proteins", () => {
    expect(translate()).toEqual([]);
  });

  it("Multiple codons > sequence of two different protein codons translates into protetins", () => {
    expect(translate("UUUUUU")).toEqual(["Phenylalanine", "Phenylalanine"]);
  });

  it("Multiple codons > Translata RNA strand into correct protein list", () => {
    expect(translate("AUGUUUUGG")).toEqual([
      "Methionine",
      "Phenylalanine",
      "Tryptophan",
    ]);
  });

  it("Multiple codons > Translation stops if STOP codon at the beginning of three codon sequence", () => {
    expect(translate("UAGUGG")).toEqual([]);
  });

  it("Multiple codons > Translation stops if STOP codon at the end of three codon sequence", () => {
    expect(translate("AUGUUUUAA")).toEqual(["Methionine", "Phenylalanine"]);
  });

  it("Multiple codons > Translation stops if STOP codon in middle of three codon sequence", () => {
    expect(translate("UGGUAGUGG")).toEqual(["Tryptophan"]);
  });

  it("Multiple codons > Translation stops if STOP codon in middle of six codon sequence", () => {
    expect(translate("UGGUGUUAUUAAUGGUUU")).toEqual([
      "Tryptophan",
      "Cysteine",
      "Tyrosine",
    ]);
  });

  it("Unknown amino acids , not part of a codon, cannot  translate", () => {
    expect(() => translate("XYZ")).toThrow(new Error("Invalid codon"));
  });

  it("Incomplete RNA sequence cannot  translate", () => {
    expect(() => translate("AUGU")).toThrow(new Error("Invalid codon"));
  });

  it("Incomplete RNA sequence can translate if valid until a stop cordon", () => {
    expect(translate("UUCUUCUAAUGGU")).toEqual([
      "Phenylalanine",
      "Phenylalanine",
    ]);
  });
});
