const ROMAN = {
  0: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  1: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  2: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  3: ["", "M", "MM", "MMM"],
};
export const toRoman = (num) => {
  const test = [...num.toString()];
  console.log(test);
  return test.reverse().reduce((acc, curr, currIndex) => {
    const romanNumber = ROMAN[currIndex][curr];
    console.log(romanNumber);
    console.log(currIndex);
    return romanNumber + acc;
  }, "");
};
