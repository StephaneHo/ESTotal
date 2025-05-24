const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const GROUP_SEPARATOR = 5;

const formatMessage = (message) =>
  [...message]
    .map((el, index) => {
      if (index !== 0 && index % GROUP_SEPARATOR == 0) {
        return " " + el;
      }
      return el;
    })
    .join("");

export const encode = (message) => {
  const aAscii = "a".charCodeAt(0);
  const zAscii = "z".charCodeAt(0);
  const enCodedArray = [];

  for (let c of message.toLowerCase()) {
    let cAscii = c.charCodeAt(0);
    let cAsciiReversed = "";
    if (cAscii >= aAscii && cAscii <= zAscii) {
      cAsciiReversed = aAscii + (zAscii - cAscii);
    } else if (cAscii >= "0".charCodeAt(0) && cAscii <= "9".charCodeAt(0)) {
      cAsciiReversed = cAscii;
    } else {
      continue;
    }
    enCodedArray.push(cAsciiReversed);
  }
  const rawEncodedMessage = String.fromCharCode.apply(null, enCodedArray);

  return formatMessage(rawEncodedMessage);
};

export const decode = (encodedMessage) => {
  return encode(encodedMessage).split(" ").join("");
};
