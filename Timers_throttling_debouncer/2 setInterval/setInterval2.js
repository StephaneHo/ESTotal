const startCountDown = (duration) => {
  let secondsRemaining = duration;
  setInterval(() => {
    console.log(secondsRemaining);
    secondsRemaining = secondsRemaining - 1;
  }, 1000);
};

// invoke in the console directly
