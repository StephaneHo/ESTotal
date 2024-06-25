import { countNucleotides } from "./solution.mjs";

describe("Nucleotide count", () => {
  it("count all nucleotides in a strand > empty strand", () => {
    expect(countNucleotides("")).toEqual("0 0 0 0");
  });

  it("count all nucleotides in a strand > can count one nucleotide in a single character input", () => {
    expect(countNucleotides("G")).toEqual("0 0 1 0");
  });

  it("count all nucleotides in a strand > strand with repeated nucleotide", () => {
    expect(countNucleotides("GGGGGGG")).toEqual("0 0 7 0");
  });

  it("count all nucleotides in a strand > strand with multiple nucleotides", () => {
    expect(
      countNucleotides(
        "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
      )
    ).toEqual("20 12 17 21");
  });

  it("count all nucleotides in a strand > strand with invalid nucleotides", () => {
    expect(() => countNucleotides("AGXXACT")).toThrow(
      new Error("Invalid nucleotide in strand")
    );
  });
});
