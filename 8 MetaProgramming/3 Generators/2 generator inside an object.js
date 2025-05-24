// notice the star and the yield
// inside the generator fx, you can write your looping logic

const stock = {
  currentFuit: 0,
  fruits: ["Oranges", "Bananas", "Pineapple"],
  dairy: ["Milk", "Cheese"],
  getFruitStock: function* () {
    let currentFuit = 0;
    while (currentFuit < this.fruits.length) {
      yield this.fruits[currentFuit];
      currentFuit++;
    }
  },
};

let fruitItertor = stock.getFruitStock();
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
