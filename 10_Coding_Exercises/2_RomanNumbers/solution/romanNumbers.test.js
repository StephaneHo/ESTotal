import { toRoman } from "./solution1.js";

describe("toRoman", () => {
  it("_toRoman converts 1_", () => {
    expect(toRoman(1)).toEqual("I");
  });

  it("toRoman converts 2", () => {
    expect(toRoman(2)).toEqual("II");
  });

  it("toRoman converts 3", () => {
    expect(toRoman(3)).toEqual("III");
  });

  it("toRoman converts 4", () => {
    expect(toRoman(4)).toEqual("IV");
  });
  it("toRoman converts 5", () => {
    expect(toRoman(5)).toEqual("V");
  });

  it("toRoman converts 6", () => {
    expect(toRoman(6)).toEqual("VI");
  });

  it("toRoman converts 9", () => {
    expect(toRoman(9)).toEqual("IX");
  });

  it("_toRoman converts 16_", () => {
    expect(toRoman(16)).toEqual("XVI");
  });

  it("toRoman converts 27", () => {
    expect(toRoman(27)).toEqual("XXVII");
  });

  it("toRoman converts 48", () => {
    expect(toRoman(48)).toEqual("XLVIII");
  });

  it("toRoman converts 49", () => {
    expect(toRoman(49)).toEqual("XLIX");
  });

  it("toRoman converts 93", () => {
    expect(toRoman(93)).toEqual("XCIII");
  });

  it("toRoman converts 141", () => {
    expect(toRoman(141)).toEqual("CXLI");
  });

  it("toRoman converts 402", () => {
    expect(toRoman(402)).toEqual("CDII");
  });

  it("toRoman converts 1024", () => {
    expect(toRoman(1024)).toEqual("MXXIV");
  });
});
