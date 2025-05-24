const cancelButton = document.getElementById("cancel");

const timeoutId = setTimeout(() => {
  window.location.href = "https://www.matmut.fr/";
}, 5000);

cancelButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log("aborted the redirection");
});
