"use strict";

// Refactor the following function into multiple functions focussed on a single action. Make those functions pure. The function that updates the DOM will of course not be pure.

const takeFirstLetters = (text, start, end) => text.slice(start, end);
const padText = (txt) => txt + "...";
const format = (txt) => `<p class='post'>${txt}</p>`;
const upateHTML = (txt) => {
  let div = document.getElementById("title");
  div.innerHTML = txt;
};

const formatPostTitle = function (txt) {
  txt = takeFirstLetters(txt, 0, 17);
  txt = padText(txt, 20, ".");
  txt = format(txt);
  upateHTML(txt);
};

formatPostTitle("Test Title String Legnth 27");
