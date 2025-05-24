// we whould like to do: for fruit of stock
// for the moment for (let fruit of stocck){ } odes not work
// JS is not looking for hthe next() method, but for the well known Symbol [Symbol.iterator]
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
  [Symbol.iterator]: {
    // has to be an iterator
    // company is a iterator because any object with the next() method is an iterator
    // so what should be here should be an object with the mext() method
    // so instead of creating manually iterator, we should use a generator
    // generator: lets us build iterator objects (that have next() method built in)
    // it is only a special type of JS fx that generates iterators for you
  },
};
