// notice the star and the yield
// inside the generator fx, you can write your looping logic

const fruits = ["Oranges", "Bananas", "Pineapple"];
const getFruitStock = function* getFruit() {
  // generates a next method of its own, not the next of stock
  let currentFuit = 0;
  while (currentFuit < fruits.length) {
    // yield is a bit like return
    // yield: "pauses" the execution,
    // when the generator fx is executed, an iterator object is created, which has a next method
    // the yield defines the property "value" of every call
    // when you exe the same fx again, it continues running at the point where it paused before
    yield fruits[currentFuit];
    currentFuit++;
  }
};

let fruitItertor = getFruitStock();
// the logs show clearly that we have produced iterators
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
console.log(fruitItertor.next());
