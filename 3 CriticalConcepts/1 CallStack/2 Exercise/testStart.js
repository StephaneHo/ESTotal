let arr = Array(10000).fill(1);
const popMyArr = function () {
  arr.pop();
  if (arr.length > 0) {
    popMyArr();
  }
};

popMyArr();
