const stock = {
  currentFuitIndex: 0,
  fruits: ["Oranges", "Bananas", "Pineapple"],
  dairy: ["Milk", "Cheese"],
  next() {
    if (this.currentFuitIndex >= this.fruits.length - 1) {
      return { value: this.fruits[this.currentFuitIndex], done: true };
    }
    if (this.currentFuitIndex < this.fruits.length) {
      const returnNext = {
        value: this.fruits[this.currentFuitIndex],
        done: false,
      };
      this.currentFuitIndex++;
      return returnNext;
    }
  },
};

const stock2 = {
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

/* const it = stock2.getFruitStock();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

for (let fruit of stock2) {
  console.log(fruit);
}

Iterator.prototype.forEach.call(stock2, (item) =>
  console.log("Coucou: " + item)
);
