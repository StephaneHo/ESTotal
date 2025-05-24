// we loop though the array and inside the loop, we have a setTimeout
// can you guess the result ?
// can you help improve ?

const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

for (var i = 0; i < cities.length; i++) {
  setTimeout(() => console.log(cities[i]), 1000);
}
