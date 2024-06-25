const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

for (var i = 0; i < cities.length; i++) {
  function showCity() {
    let city = cities[i];
    setTimeout(() => console.log(city), 1000);
  }
  showCity();
}
