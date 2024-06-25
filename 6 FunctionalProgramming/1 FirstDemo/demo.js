const counter = () => {
  console.log("Counted !!!");
};

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
