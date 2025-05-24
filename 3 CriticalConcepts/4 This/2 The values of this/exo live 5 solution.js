const func1 = function () {
  console.log(1, this);
  const func2 = function () {
    console.log(2, this);
    let person = {
      firstName: "Jean",
      city: "Paris",
      getAddress() {
        console.log(3, this);
        const func4 = function () {
          console.log(4, this);
        };
        func4();
      },
    };
    person.getAddress();
  };

  func2();
};

func1();

// func2: no object invokes it, so bu default, it is the window object that gets referenced
// by the keyword this

// person.getAdress: the this references the object itself

// inside person, we declare an another fx
// because it is not invoked by any spcific object, it is undefined

// it is confusing because we think it should references the object because we are thinking lexically
// (where it is defined)
// but the value if defined dynamically , not where the code is
// it depends HOW it is invoked

// add "use strict"
// we  get for 1,2,4 : undefined
// in strict mode, it does not automatically defers the keyword this to the window object
// 3 does not change
