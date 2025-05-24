import { isPangram } from "./solution.js";

describe("isPangram", () => {
  it("Pangram > empty sentence", () => {
    expect(isPangram("")).toBe(false);
  });

  it("Pangram > perfect lower case", () => {
    expect(isPangram("abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  it("Pangram > only lower case", () => {
    expect(isPangram("the quick brown fox jumps over the lazy dog")).toBe(true);
  });

  it("Pangram > missing the letter x", () => {
    expect(
      isPangram("a quick movement of the enemy will jeopardize five gunboats")
    ).toBe(false);
  });

  it("Pangram > missing the letter h", () => {
    expect(isPangram("five boxing wizards jump quickly at it")).toBe(false);
  });

  it("Pangram > with underscores", () => {
    expect(isPangram("five boxing wizards jump quickly at it")).toBe(false);
  });

  it("Pangram > with numbers", () => {
    expect(isPangram("the 1 quick brown fox jumps over the 2 lazy dogs")).toBe(
      true
    );
  });

  it("Pangram > missing letters replaced by numbers", () => {
    expect(isPangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog")).toBe(
      false
    );
  });

  it("Pangram > mixed case and punctuation", () => {
    expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
  });

  it("Pangram > case insensitive", () => {
    expect(isPangram("the quick brown fox jumps over with lazy FZX")).toBe(
      false
    );
  });
});
