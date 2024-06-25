const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

for (let i = 0; i < cities.length; i++) {
  setTimeout(() => console.log(cities[i]), 1000);
}
