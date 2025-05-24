const ROMAN_NUMERALS = [
  { number: 1000, romanNumber: "M" },
  { number: 900, romanNumber: "CM" },
  { number: 500, romanNumber: "D" },
  { number: 400, romanNumber: "CD" },
  { number: 100, romanNumber: "C" },
  { number: 90, romanNumber: "XC" },
  { number: 50, romanNumber: "L" },
  { number: 40, romanNumber: "XL" },
  { number: 10, romanNumber: "X" },
  { number: 9, romanNumber: "IX" },
  { number: 5, romanNumber: "V" },
  { number: 4, romanNumber: "IV" },
  { number: 1, romanNumber: "I" },
];

export const toRoman = (targetNumber) => {
  if (targetNumber === 0) {
    return "";
  }
  const { number, romanNumber } = ROMAN_NUMERALS.find(
    ({ number, romanNumber }) => number <= targetNumber
  );
  const rest = targetNumber - number;
  return romanNumber + toRoman(rest);
};
