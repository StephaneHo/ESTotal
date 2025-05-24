const startCountDown = (duration) => {
  let secondsRemaining = duration;
  const timerEl = document.getElementById("timer");
  setInterval(() => {
    timerEl.innerText = secondsRemaining;
    console.log(secondsRemaining);
    secondsRemaining = secondsRemaining - 1;
  }, 1000);
};

// invoke in the console directly
