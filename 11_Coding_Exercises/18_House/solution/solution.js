const VERSES = [
  { verse: "house that Jack built.", previousVerseStart: "" },
  { verse: "malt", previousVerseStart: "lay in" },
  { verse: "rat", previousVerseStart: "ate" },
  { verse: "cat", previousVerseStart: "killed" },
  { verse: "dog", previousVerseStart: "worried" },
  { verse: "cow with the crumpled horn", previousVerseStart: "tossed" },
  { verse: "maiden all forlorn", previousVerseStart: "milked" },
  { verse: "man all tattered and torn", previousVerseStart: "kissed" },
  { verse: "priest all shaven and shorn", previousVerseStart: "married" },
  { verse: "rooster that crowed in the morn", previousVerseStart: "woke" },
  { verse: "farmer sowing his corn", previousVerseStart: "kept" },
  {
    verse: "horse and the hound and the horn",
    previousVerseStart: "belonged to",
  },
];

export class House {
  static verse(verseNumber) {
    return VERSES.slice(0, verseNumber)
      .reduce((versesAcc, currentVerse, index) => {
        if (index >= 1) {
          versesAcc[index - 1] = versesAcc[index - 1].replace(
            "This is the ",
            "that " + currentVerse.previousVerseStart + " the "
          );
        }
        versesAcc.push("This is the " + currentVerse.verse);
        return versesAcc;
      }, [])
      .reverse();
  }

  static verses(startVerseNumber, endVerseNumber) {
    return Array.from(
      { length: endVerseNumber - startVerseNumber + 1 },
      (value, index) => startVerseNumber + index
    )
      .reduce(
        (lyricsAcc, verseNumber) =>
          lyricsAcc.concat(House.verse(verseNumber)).concat(""),
        []
      )
      .slice(0, -1);
  }
}
