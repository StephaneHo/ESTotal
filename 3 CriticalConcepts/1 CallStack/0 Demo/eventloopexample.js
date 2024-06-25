let user1 = { id: 1, name: "Jean" };
let user2 = { id: 2, name: "Paul" };

function test() {
  console.log(user1);
  setTimeout(() => console.log("checking…"), 0);
  console.log(user2);
}
test();
