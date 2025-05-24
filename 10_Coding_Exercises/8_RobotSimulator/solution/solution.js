export const NORTH = "north";
export const BEARINGS = ["west", "east", "north", "south"];
const MOVEMENT = {
  east: { x: 1, y: 0 },
  south: { x: 0, y: -1 },
  west: { x: -1, y: 0 },
  north: { x: 0, y: 1 },
};
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid Input";
  }
}
const isTurnLeft = (instruction) => instruction === "L";
const isTurnRight = (instruction) => instruction === "R";
const isAdvance = (instruction) => instruction === "A";
const turnLeft = (x, y, initialDirection) => {
  let coordinate = {
    north: "west",
    west: "south",
    south: "east",
    east: "north",
  };
  return { x, y, direction: coordinate[initialDirection] };
};
const turnRight = (x, y, initialDirection) => {
  let coordinate = {
    west: "north",
    north: "east",
    east: "south",
    south: "west",
  };
  return { x, y, direction: coordinate[initialDirection] };
};
const advance = (x = 0, y = 0, direction) => {
  x = x + MOVEMENT[direction].x;
  y = y + MOVEMENT[direction].y;
  return { x, y, direction };
};
export const INSTRUCTION_RULES = [
  { predicate: isTurnLeft, effect: turnLeft },
  { predicate: isTurnRight, effect: turnRight },
  { predicate: isAdvance, effect: advance },
];
export class Robot {
  get bearing() {
    return this.__direction ?? NORTH;
  }
  get coordinates() {
    return [this.__x, this.__y];
  }
  place({ x, y, direction }) {
    this.__x = x;
    this.__y = y;
    if (BEARINGS.indexOf(direction) < 0) {
      throw new InvalidInputError();
    }
    this.__direction = direction;
  }
  evaluate(instructions) {
    [...instructions].forEach((instruction) =>
      this.evaluateSingleInstruction(instruction)
    );
  }
  evaluateSingleInstruction(instruction) {
    const { x, y, direction } = INSTRUCTION_RULES.find((rule) =>
      rule.predicate(instruction)
    )?.effect(this.__x, this.__y, this.__direction);
    this.place({ x, y, direction });
  }
}
