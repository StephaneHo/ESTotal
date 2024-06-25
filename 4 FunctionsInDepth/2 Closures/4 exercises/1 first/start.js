const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

for (var i = 0; i < cities.length; i++) {
  setTimeout(() => console.log(cities[i]), 1000);
}
