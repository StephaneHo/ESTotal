// high order fx: returns fx
// with closure that means the returned fx will have access to the scope of the original fx
// we do not have to put the variables on the global scope to make them accessible
// in a sense, they are private and can only be accessed by the objects in the scope
// and the returned fx can continue to use them

let text =
  "I love cats. Cats are very easy to love. Cats are very popular. My cat is the best";

const DOG = "dog";
const GIRAFFE = "giraffe";

// TO DO so the code below works
const change = () => {};

console.log(text);

const changeDOG = change(DOG);
const text2 = changeDOG(text);
console.log(text2);

const changeGiraffe = change(GIRAFFE);
const text3 = changeGiraffe(text);
console.log(text3);
