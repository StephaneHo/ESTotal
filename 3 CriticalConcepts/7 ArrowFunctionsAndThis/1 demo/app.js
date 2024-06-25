const func1 = function () {
  console.log(1, this);
  const func2 = function () {
    console.log(2, this);
    let person = {
      firstName: "Jean",
      city: "Paris",
      getAddress() {
        console.log(3, this);
        /*  const func4 = function () {
          console.log(4, this);
        }; */
        const func4 = () => {
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
