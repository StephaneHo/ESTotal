function test() {
  console.log("test");
}

const newTest = test.bind();
console.log(newTest); // newTest is a function
newTest();

let person = {
  firstName: "Jean",
  city: "Paris",
  getAddress() {
    console.log(`${this.firstName} lives in ${this.city}`);
  },
};

let person2 = {
  firstName: "Chisato",
  city: "Osaka",
};

// call and apply would invoke the fx immeediaytely
// bind returns a fx and we have to invoke it in a separate statement
let getUpdatedAddress = person.getAddress.bind(person2);
getUpdatedAddress();

// how to use bind with parameters
person = {
  firstName: "Jean",
  city: "Paris",
  getAddress(country, punctuation) {
    console.log(
      `${this.firstName} lives in ${this.city} which is in ${country} ${punctuation}`
    );
  },
};

getUpdatedAddress = person.getAddress.bind(person2);
// since bind returns a fx, we can simply add the parameters as usual
getUpdatedAddress("Japan", "!!!!");

// we can also bind the parameters, then the fx is invoked with the parameters as fixed
getUpdatedAddress = person.getAddress.bind(person2, "Japan", "!!!!");
// since bind returns a fx, we can simply add the parameters as usual
getUpdatedAddress();
// if we had more parameters, no effect
getUpdatedAddress("x1", "x2", "x3");

// bind is used freuqnetly to use a fx with fixed parameters and that does not use the keyword this,
// the first parameter in the bind (the obj reference) is set to null
// and you pass the parameters you want to be fixed

// this technique is called currying or partial application (see later)
