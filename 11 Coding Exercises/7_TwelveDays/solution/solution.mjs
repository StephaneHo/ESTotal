function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

export const recite = (begin, end) => {
  const giftByDay = [
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

  let interval = end ? Array.from(range(begin - 1, end, 1)) : [begin - 1];

  const concateneVerses = (verse1, verse2, index, gifts) => {
    if (index === 0) {
      return verse1 + verse2;
    } else if (index === gifts.length - 1) {
      return verse1 + ", and " + verse2;
    } else {
      return verse1 + ", " + verse2;
    }
  };

  const getGift = (item) => item.gift;

  const verses = giftByDay
    .map((item, index) => {
      let { day, gift } = item;
      const previousVerses = giftByDay.slice(0, index + 1).reverse();
      let gifts = previousVerses.map(getGift).reduce(concateneVerses);
      console.log(day);
      return `On the ${day} day of Christmas my true love gave to me: ${gifts}.`;
    })
    .filter((item, index) => interval.includes(index))
    .join("\n\n");

  return verses + "\n";
};
