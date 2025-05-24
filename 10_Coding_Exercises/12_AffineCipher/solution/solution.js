import {
  encryption,
  decryption,
  splitInChunks,
  isANumber,
  cleanSentence,
  areCoprimes,
} from "./utils.js";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encryptLetter = (a, b, m, letter) => {
  const index = alphabet.indexOf(letter);
  const encryptedIndex = encryption(a, b, m, index);
  const encryptedLetter = alphabet[encryptedIndex];
  return encryptedLetter;
};
const decryptLetter = (a, b, m, letter) => {
  const index = alphabet.indexOf(letter);
  let decryptedIndex = decryption(a, b, m, index);
  decryptedIndex =
    decryptedIndex < 0 ? decryptedIndex + alphabet.length : decryptedIndex;
  const decryptedLetter = alphabet[decryptedIndex];
  return decryptedLetter;
};

const processEncodeLetter = (a, b, m) => (letter) =>
  isANumber(letter) ? letter : encryptLetter(a, b, m, letter);

const processDecodeLetter = (a, b, m) => (letter) =>
  isANumber(letter) ? letter : decryptLetter(a, b, m, letter);

export const encode = (sentence, key) => {
  const { a, b } = key;
  const m = 26;
  const step = 5;

  if (!areCoprimes(a, m)) {
    throw new Error(`a and m must be coprime.`);
  }
  const words = cleanSentence(sentence);
  const processEncodeLetterCurrified = processEncodeLetter(a, b, m);
  const tempEncoded = words.map(processEncodeLetterCurrified).join("");

  return splitInChunks(step, tempEncoded).join(" ");
};

export const decode = (sentence, key) => {
  const { a, b } = key;
  const m = 26;

  if (!areCoprimes(a, m)) {
    throw new Error(`a and m must be coprime.`);
  }

  const words = cleanSentence(sentence);
  const processDecodeLetterCurrified = processDecodeLetter(a, b, m);
  const decodedSentence = words.map(processDecodeLetterCurrified).join("");
  return decodedSentence;
};
