"use strict";

const compose =
  (...fns) =>
  (data) =>
    fns.reduceRight((acc, fun) => fun(acc), data);

const pipe =
  (...fns) =>
  (data) =>
    fns.reduce((acc, fun) => fun(acc), data);

// Compose a function that will receive a string and make it title case (e.g. Title Case).

const str = "Make THIS string title Case.";
