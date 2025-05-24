const delayGreeting = function (name) {
  let greeting = "Good morning";
  let punctuation = "!!!!!";

  setTimeout(() => console.log(`${greeting} ${name} ${punctuation}`), 2000);
};
// creates a new exe contexte
// greeting and punctuation are accessible by the code insisde the fx
// encounters a setTimeout which is managed by the browser
// so the browser starts counting
// and before the counts end, the fx dealyGreeting is DONE, FINISHED
// what happens to the 2 previous variables ?
// because the variables have not been added to the queue yet,
// because the counting down hs not finished at this point
// when the count down is finished, the fx delayGreeting() has been removed from the stack
// because JS engine knows the fx inside the timeOut has a reference to the 2 variables
// they are retained in memory, even if the delayGreeting() has finished executing and is removed from the stack
// because they were part of the lexical scope
delayGreeting("Matmut");
