function findMMI(a, m) {
  if (a !== undefined && m !== undefined) {
    for (let i = 0; i < m; i++) {
      if ((a * i) % m === 1) {
        return i;
      }
    }
  }
  return 0;
}

export const encryption = (a, b, m, x) => (a * x + b) % m;

export const decryption = (a, b, m, y) => {
  return (findMMI(a, m) * (y - b)) % m;
};

export const splitInChunks = (step, wordArray) =>
  Array.from({ length: Math.ceil(wordArray.length / step) }, (_, i) =>
    wordArray.slice(i * step, i * step + step)
  );

export const cleanSentence = (sentence) => [
  ...sentence.toLowerCase().replaceAll(/\W/g, ""),
];

export const isANumber = (letter) => !Number.isNaN(Number(letter));

export const areCoprimes = (num1, num2) => {
  const greatest = Math.max(num1, num2);
  for (let ind = 2; ind < greatest; ind++) {
    const condition1 = num1 % ind === 0;
    const condition2 = num2 % ind === 0;
    if (condition1 && condition2) {
      return false;
    }
  }
  return true;
};
