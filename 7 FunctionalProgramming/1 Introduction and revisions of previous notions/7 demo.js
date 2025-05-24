// imagine that you have a fx that is executed on the click of the button
// only once, for a session of the web page

const counter = () => {
  console.log("Counted !!!");
};

// general idea:
/* const onlyOnce = () => {
  let once = false
  if (!once) {
    once = true;
  } else {
    console.log("already counted");
  }
}; */

// we want to pass any fx , not specially the counter abov
// we want to return another fx, which is the transformed fx
// that is similar to the original but exe only once
const onlyOnceWithoutArgs = (fx) => {
  let once = false;
  return () => {
    if (!once) {
      once = true;
      fx();
    } else {
      console.log("already counted");
    }
  };
};

const countSessionOnceFirstVersion = onlyOnceWithoutArgs(counter);
countSessionOnceFirstVersion();
countSessionOnceFirstVersion();
countSessionOnceFirstVersion();
countSessionOnceFirstVersion();
console.log("*********");

const onlyOnce = (fn) => {
  let once = false;
  return (...args) => {
    if (!once) {
      once = true;
      fn(...args);
    } else {
      console.log("already counted");
    }
  };
};

const countSessionOnce = onlyOnce(counter);
countSessionOnce();
countSessionOnce();
countSessionOnce();
countSessionOnce();

console.log("*********");

// what if you want to modify the behaviour when it is already counted ?
// use one more fx !
const alreadyCounted = () => console.log("already counted");
const onlyOnceUpdated = (fn1, fn2) => {
  let once = false;
  return (...args) => {
    if (!once) {
      once = true;
      fn1(...args);
    } else {
      fn2(...args);
    }
  };
};

const countSessionOnceUpdated = onlyOnceUpdated(counter, alreadyCounted);
countSessionOnceUpdated();
countSessionOnceUpdated();
countSessionOnceUpdated();
countSessionOnceUpdated();
