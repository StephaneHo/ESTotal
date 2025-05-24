export const isArmstrongNumber = (number) => {
  const sumOfDigitsPowered = [...number.toString()].reduce((sum, digit) => {
    const digitPowered = Number(digit) ** number.toString().length;
    return sum + digitPowered;
  }, 0);
  return sumOfDigitsPowered == number;
};
