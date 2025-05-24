const GIFTS_BY_DAYS = [
  {
    day: "first",
    gift: "a Partridge in a Pear Tree",
  },
  {
    day: "second",
    gift: "two Turtle Doves",
  },
  {
    day: "third",
    gift: "three French Hens",
  },
  {
    day: "fourth",
    gift: "four Calling Birds",
  },
  {
    day: "fifth",
    gift: "five Gold Rings",
  },
  {
    day: "sixth",
    gift: "six Geese-a-Laying",
  },
  {
    day: "seventh",
    gift: "seven Swans-a-Swimming",
  },
  {
    day: "eighth",
    gift: "eight Maids-a-Milking",
  },
  {
    day: "ninth",
    gift: "nine Ladies Dancing",
  },
  {
    day: "tenth",
    gift: "ten Lords-a-Leaping",
  },
  {
    day: "eleventh",
    gift: "eleven Pipers Piping",
  },
  {
    day: "twelfth",
    gift: "twelve Drummers Drumming",
  },
];

const printGiftsString = (index) =>
  GIFTS_BY_DAYS.slice(0, index).reduceRight(
    (str, { gift }, index) =>
      str + `${gift}${!index ? "." : index === 1 ? ", and " : ", "}`,
    ""
  );

export const recite = (verseStart, verseEnd) => {
  return (
    Array.from(
      { length: verseEnd ? verseEnd - verseStart + 1 : 1 },
      (_, i) => i
    )
      .map(
        (index) =>
          `On the ${
            GIFTS_BY_DAYS[verseStart + index - 1].day
          } day of Christmas my true love gave to me: ${printGiftsString(
            verseStart + index
          )}`
      )
      .join("\n\n") + "\n"
  );
};
