const cleanNumber = (cardNumber) => cardNumber.replace(/(\s)/g, "");
const checkValidCardNumber = (cardNumber) =>
  cardNumber.length >= 2 && !/\D/.test(cardNumber);
const doubleDigits = (num, index) => (index % 2 === 1 ? num * 2 : num);
const transformDigits = (num, index) =>
  index % 2 === 1 && num > 9 ? num - 9 : num;
const sum = (a, b) => a + b;

export const valid = (cardNumber) => {
  const cleanCardNumber = cleanNumber(cardNumber);
  if (!checkValidCardNumber(cleanCardNumber)) {
    return false;
  }

  const sumOfDigits = [...cleanCardNumber]
    .map((num) => Number(num))
    .reverse()
    .map((num, index) => doubleDigits(num, index))
    .map((num, index) => transformDigits(num, index))
    .reduce(sum, 0);

  return sumOfDigits % 10 === 0;
};
