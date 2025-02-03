import { $ } from "../utils.js";

let min = 0;
let max = 100;
let attempts = 0;
let computerGuess;

let counter = 0;
counter++;

document.querySelector(".guess").addEventListener("click", guessButton);

function guessButton() {
  console.log("klik guess");

  computerGuess = Math.floor((max + min) / 2);
  $("h2").textContent = `Computeren gætter på: ${computerGuess}`;

  $(".hoejere").addEventListener("click", tooLow);
  $(".lavere").addEventListener("click", tooHigh);
  $(".rigtigt").addEventListener("click", correct);
}

function tooHigh() {
  max = computerGuess;
  newGuess();
}

function tooLow() {
  min = computerGuess;
  newGuess();
}

function newGuess() {
  attempts++;
  computerGuess = Math.floor((max + min) / 2);
  $("h2").textContent = `Computeren gætter på: ${computerGuess}`;
}

function correct() {
  attempts++;
  $("h2").textContent = `Du tænkte på ${computerGuess}!`;
  $(
    "h4"
  ).textContent = `Computeren brugte ${attempts} forsøg på at gætte rigtigt`;
}
