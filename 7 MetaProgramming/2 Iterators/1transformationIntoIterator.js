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
};

console.log(stock.next());
console.log(stock.next());
console.log(stock.next());
console.log(stock.next());
console.log(stock.next());

// we have created our own method that allows us to loop through a specific field of this object

// how you can use the iterator
let fruit = stock.next();
while (!fruit.done) {
  console.log(fruit.value);
  fruit = stock.next();
}
