import { score } from "./solution.js";

describe("darts", () => {
  it("darts missed targets", () => {
    expect(score(-9, 9)).toEqual(0);
  });

  it("darts > on the outer circle", () => {
    expect(score(0, 10)).toEqual(1);
  });

  it("darts > on the middle circle", () => {
    expect(score(-5, 0)).toEqual(5);
  });

  it("darts > on the inner circle", () => {
    expect(score(0, -1)).toEqual(10);
  });

  it("darts > exactly on the center", () => {
    expect(score(0, 0)).toEqual(10);
  });

  it("darts > near on the center", () => {
    expect(score(-0.1, -0.1)).toEqual(10);
  });

  it("darts > just within the inner circle", () => {
    expect(score(0.7, 0.7)).toEqual(10);
  });

  it("darts > just outside the inner circle", () => {
    expect(score(0.8, -0.8)).toEqual(5);
  });

  it("darts > just within the middle circle", () => {
    expect(score(-3.5, 3.5)).toEqual(5);
  });

  it("darts > just outside the middle circle", () => {
    expect(score(-3.6, -3.6)).toEqual(1);
  });

  it("darts > just within the outer circle", () => {
    expect(score(-7.0, 7.0)).toEqual(1);
  });

  it("darts > just outside the outer circle", () => {
    expect(score(7.1, -7.1)).toEqual(0);
  });

  it("Asymmetric position between the inner and middle circles", () => {
    expect(score(0.5, -4)).toEqual(5);
  });
});
