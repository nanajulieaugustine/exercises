"use strict";

// const bool = true;
// const num = 41;
// const str = "Peter";
// const obj = {
//   cats: 2,
//   cars: 1,
// };
// const nothing = null;
// const sym = Symbol("symbol");

// console.log("typeof undf:", typepof undf);

let myString = "45";
console.log("typeof 1", typeof myString);
myString = Number(myString);
console.log("typeof 2", typeof myString);

let randoNum;

// const n1 = 1;
// const n2 = 2;

// const s1 = "1";
// const s2 = "2";

// n1 + n2;
// s1 + s2;

// n1 + s2;
// s1 + n2;

// const value = true;

/*Klaus' eksempel*/

getRandoNumber();

function getRandoNumber() {
  const randoNum = Math.round(Math.random() * 100);
  console.log("Random number", randoNum);

  document.querySelector("h2").textContent = randoNum;
}

/*input*/

document.querySelector("button").addEventListener("click", evaluateTextfield);

const gamecomplete = document.querySelector(GameOver());
const gameover = document.querySelector(GameOver());

function evaluateTextfield() {
  console.log("KLIK");

  const value = parseInt(document.querySelector(".skjul").value, 10);

  if (value == randoNum) {
    console.log("Value is truthy");
    GameComplete();
  } else {
    console.log("Value is falsy");
    GameOver();
  }
}

function GameComplete() {
  console.log("GameComplete", GameComplete);

  document.querySelector("#game_complete").classList.remove("skjul");
}

function GameOver() {
  console.log("GameOver");

  document.querySelector("#game_over").classList.remove("skjul");
}
