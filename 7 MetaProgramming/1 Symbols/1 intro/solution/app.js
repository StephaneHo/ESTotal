const uid = Symbol(); // NOT NEW
console.log(uid);

const myuid = Symbol("uid2");

console.log(myuid); // this does not mean that this symbol now had an internal name,
//uid2, or anything like that, it is only an identification criterion
const uid2Other = Symbol("uid2");
console.log(myuid === uid2Other); // false
// the symbols are guaranteed to be unique. Even if we create lots of symbols with the same description, there are different values;

//alert(uid2);
// warning: more values in Javascript make the implicit conversion in chains of caracters(numbers, ...). but this is not the case for symbols
// the alert will five an error. this is a kind of guard;
// alert(uid2.toString()) works

// get the identification criteria
console.log("description : " + myuid.description);

let person = {
  id: "id1",
  name: "Jean",
  age: 30,
};

// imagine you are building a library where you expose certain objects
// in the objects you expose you want that certain keys of the objects cannot be overridden by the users of the libray
// if i am the consumer of the library, I could override with

person.id = "anotherId";

// we want that only the code in the library can ineteract with the id
person = {
  [myuid]: "id1", // if it is uid2 instead of [uid2], then you would have just added a regular key: uid2
  name: "Jean",
  age: 30,
};

console.log({ person });

// if you export the object but you do not export the symbol, the consumer cannot interfere with the internal ID
// even if you try to recreate the symbol as a consumer, it won't work (uniquenss guarantee)
console.log(' person[Symbol("myuid")', person[Symbol("myuid")]);

// the symbols are ignored by the for in loop
for (let key in person) {
  console.log(key);
}
// ignored also by Object.keys
console.log("keys: " + Object.keys(person));
// it is the princip of hiding symbol properties: if another script or library reads our object, it won't by accident access to a symbol property

// the IDEA: Symbol is a unique identifier that cannot be accidently overriden, only if you have access to the original symbol (not a copy of it), you can change it
person = {
  [myuid]: "id3",
  name: "Jean",
  age: 30,
};

console.log(person);
