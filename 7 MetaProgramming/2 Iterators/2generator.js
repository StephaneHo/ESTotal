const stock = {
  currentFuit: 0,
  fruits: ["Oranges", "Bananas", "Pineapple"],
  dairy: ["Milk", "Cheese"],
  next() {
    if (this.currentFuit >= this.fruits.length) {
      return { value: this.currentFuit, done: true };
    }
    const currentFuitValue = {
      value: this.fruits[this.currentFuit],
      done: false,
    };
    this.currentFuit++;

    return currentFuitValue;
  },
  [Symbol.iterator]: function* getFruit() {
    // generates a next method of its own, not the next of stock
    let fruit = stock.next();
    while (!fruit.done) {
      yield fruit.value;
      fruit = stock.next();
    }
  },
};

const stock2 = {
  fruits: ["Oranges", "Bananas", "Pineapple"],
  dairy: ["Milk", "Cheese"],
  getFruitStock: function* getFruit() {
    // generates a next method of its own, not the next of stock
    let currentFuit = 0;
    while (currentFuit < this.fruits.length) {
      yield this.fruits[currentFuit];
      currentFuit++;
    }
  },
};

let fruitItertor = stock2.getFruitStock();

console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
