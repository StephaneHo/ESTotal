export const isPangram = (sentence) => {
  const sentenceLowered = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...alphabet].every((letter) => sentenceLowered.includes(letter));
};
