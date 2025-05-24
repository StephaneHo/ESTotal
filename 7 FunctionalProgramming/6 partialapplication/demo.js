// currying: multiple unitary fx, ie fx that take each one arg
// partial applicaton: we apply some of the arg, may be unary or nto

const getMessage = (person, subject, score) =>
  ` ${person}: you have a score of  ${score} on your ${subject} test`;

//null is used because the fx here has no use for this
// we are going to apply 2 of the arguments instead of the 3 args
const getMessagePartial = getMessage.bind(null, "Jean", "maths");

const message = getMessagePartial(100);
console.log(message);

// another way to do it:
const getMessagePartialAnotherWay = (person, subject) => (score) =>
  getMessage(person, subject, score);

const anotherMessagePartial = getMessagePartialAnotherWay("Sally", "biology");
const anotherMessage = anotherMessagePartial(100);
console.log(anotherMessage);
