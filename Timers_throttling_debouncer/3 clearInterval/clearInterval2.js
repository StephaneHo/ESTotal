const startCountDown = (duration) => {
  let secondsRemaining = duration;
  const timerEl = document.getElementById("timer");
  const intervalId = setInterval(() => {
    timerEl.innerText = secondsRemaining;
    console.log(secondsRemaining);
    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

// invoke in the console directly
