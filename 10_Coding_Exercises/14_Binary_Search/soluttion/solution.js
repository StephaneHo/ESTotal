export const find = (array, valueToSearch) => {
  if (valueToSearch < array[0] || valueToSearch > array[array.length - 1]) {
    throw Error("Value not in array");
  }
  let left = 0;
  let right = array.length - 1;
  if (array[left] === valueToSearch) return left;
  if (array[right] === valueToSearch) return right;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === valueToSearch) {
      return middle;
    } else if (valueToSearch < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  throw Error("Value not in array");
};
