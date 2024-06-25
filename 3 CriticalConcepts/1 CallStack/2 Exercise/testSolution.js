let arr = Array(11000).fill(1);
const popMyArr = function () {
  arr.pop();
  if (arr.length > 0) {
    setTimeout(() => popMyArr, 0);
  }
};

popMyArr();
