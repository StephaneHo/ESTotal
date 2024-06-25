// Array.prototype.at()
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;
// index: Zero-based index of the array element to be returned, converted to an integer.
//Negative index counts back from the end of the array — if index < 0, index + array.length is accessed.
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

//Note: Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
//This is not possible in JavaScript, because [] is used for accessing both arrays and objects.
// obj[-1] refers to the value of key -1, not to the last property of the object.
// The at() method was introduced in ES2022 to solve this problem.

//The at() method of String values takes an integer value and returns a new String
//  consisting of the single UTF-16 code unit located at the specified offset.
// This method allows for positive and negative integers. Negative integers count back from the last string character.
const sentence = "The quick brown fox jumps over the lazy dog.";
index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
// solves same problem of negative index sentence[negative index] will return undefined

//Object.hasOwn() is similar to Object.prototype.hasOwnProperty but supports all object types.

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property.
// If the property is inherited, or does not exist, the method returns false.// The hasOwnProperty() method of Object instances returns a boolean
// indicating whether this object has the specified property as its own property (as opposed to inheriting it).
//  Object.hasOwn() is intended as a replacement for Object.prototype.hasOwnProperty().

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("property2"));
// Expected output: false

const object2 = {};
object2.property1 = 42;

console.log(Object.hasOwn(object2, "property1"));
// Expected output: true

console.log(Object.hasOwn(object2, "toString"));
// Expected output: false

console.log(Object.hasOwn(object2, "property2"));
// Expected output: false

// await import
//JavasSript modules can now wait for resources that require import before running:
import { myData } from "./myData.js";
const data = await myData();

// JavaScript Class Field Declarations
class Hello {
  counter = 0; // Class field
}
const myClass = new Hello();

let x = myClass.counter;
console.log(x);

// JavaScript Private Methods and Fields

class Hello2 {
  #counter = 0; // Private field
  #myMethod() {} // Private method
}
const myClass2 = new Hello2();

x = myClass2.#counter; // Error
myClass2.#myMethod(); // Error
