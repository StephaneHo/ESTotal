const myrecusrive = (num) => {
  num = 2 * num;
  if (num > 100000000) {
    return num;
  }
  return myrecusrive(num);
};

console.log(myrecusrive(1));
