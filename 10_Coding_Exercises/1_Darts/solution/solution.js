const computeRadius = (x, y) => Math.sqrt(x ** 2 + y ** 2);
const isOutside = (radius) => radius > 10;
const isInOuterCircle = (radius) => radius <= 10 && radius > 5;
const isMiddleCircle = (radius) => radius <= 5 && radius > 1;
const isInnerCircle = (radius) => radius <= 1;
const RULES = [
  { predicate: isOutside, score: 0 },
  { predicate: isInOuterCircle, score: 1 },
  { predicate: isMiddleCircle, score: 5 },
  { predicate: isInnerCircle, score: 10 },
];
export const score = (x, y) => {
  const radius = computeRadius(x, y);
  console.log({ radius });
  return RULES.find((rule) => rule.predicate(radius)).score;
};
// const isInCircle = (radiusTarget) => radius => {radius < radiusTarget} et reordonner du plus petit au plus grand
