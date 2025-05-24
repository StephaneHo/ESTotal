// a variant on the previous one

const cities = ["Paris", "Lisbon", "Tokyo", "Madrid", "Oslo", "Tokyo"];

for (var i = 0; i < cities.length; i++) {
  // because of closure, when showCity fires, it will have access to this city variable
  function showCity() {
    let index = i;
    setTimeout(() => console.log(cities[index]), 3000);
  }
  showCity();
}
