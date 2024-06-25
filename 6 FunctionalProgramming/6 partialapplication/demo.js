const getMessage = (person, subject, score) =>
  ` ${person}: you have a score of  ${score} on your ${subject} test`;

const getMessagePartial = getMessage.bind(null, "Jean", 20);

const message = getMessagePartial("maths");
console.log(message);
