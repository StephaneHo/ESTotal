// note: all arrow fx are fx expressions, not fx declarations

// the arrow fx use lexcial bindind for the lexical binding for this
// WHERE the code sits
// the lexical env is what the code is part of, where it is placed in relation to other things
// it is not how the fx is invoked (which is the case for traditional fx)

class Cat {
  constructor(catName) {
    this.catName = catName;
  }

  greet() {
    console.log(`I am ${this.catName}`);

    setTimeout(function () {
      console.log(`I am ${this.catName}`);
    }, 2000);

    setTimeout(() => {
      console.log(`I am ${this.catName}`);
    }, 4000);
  }
}

let mysteriousCat = new Cat("Puss In Boots");
mysteriousCat.greet();
