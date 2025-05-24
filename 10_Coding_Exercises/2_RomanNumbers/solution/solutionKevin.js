const ROMAN_NUMBER_LETTER = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
export const toRoman = (number) => {
  if (number > 3999 || number === 0) return NaN;
  let numberRest = number;
  return Array.from(Object.entries(ROMAN_NUMBER_LETTER))
    .sort(([keyA], [keyB]) => keyB - keyA)
    .reduce((romanNumber, [numberValue, romanLetter]) => {
      let newRomanNumber = romanNumber.padEnd(
        romanNumber.length +
          Math.floor(numberRest / numberValue) * romanLetter.length,
        romanLetter
      );
      numberRest = numberRest % numberValue;
      return newRomanNumber;
    }, "");
};
