const stock = {
  fruits: ["Oranges", "Bananas", "Pineapple"],
  dairy: ["Milk", "Cheese"],
  [Symbol.iterator]: function* getFruit() {
    // generates a next method of its own, not the next of stock
    let currentFuit = 0;
    while (currentFuit < this.fruits.length) {
      yield this.fruits[currentFuit];
      currentFuit++;
    }
  },
};

for (let fruit of stock) {
  console.log(fruit);
}

console.log([...stock]);
