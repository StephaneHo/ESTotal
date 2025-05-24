const ALLERGY_SCORES = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};
const computeInitialAllergyScore = (score) => score % 256;
const computeListAllergies = (allergyScore) => {
  let allergies = [];
  let allergiesCurrentScore =
    allergyScore > 256
      ? computeInitialAllergyScore(allergyScore)
      : allergyScore;
  const keys = Object.keys(ALLERGY_SCORES).reverse();
  for (let i = 0; i < keys.length; i++) {
    const allergyToBeFoundScore = keys[i];
    const allergyScoreDiff = allergiesCurrentScore - allergyToBeFoundScore;
    if (allergyScoreDiff >= 0) {
      allergies.push(ALLERGY_SCORES[keys[i]]);
      allergiesCurrentScore = allergyScoreDiff;
    }
  }
  return [...allergies].reverse();
};
export class Allergies {
  constructor(allergyScore) {
    this.allergies = computeListAllergies(allergyScore);
    this.allergyDico = {};
    for (let allergy of this.allergies) {
      this.allergyDico[allergy] = true;
    }
  }
  list() {
    return this.allergies;
  }
  allergicTo(allergy) {
    return this.allergyDico[allergy] ?? false;
  }
}
