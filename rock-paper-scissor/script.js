"use strict";
let userChoice;
let compChoice;
let winner;

// document.querySelector("#player1").addEventListener("click", runHandAnimations);
// document.querySelector("#player2").addEventListener("click", runHandAnimations);

document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function klikRock() {
  //   console.log("ROCK");
  userChoice = "rock";
  computerChooses();
  runHandAnimations();
}

function klikPaper() {
  //   console.log("PAPER");
  userChoice = "paper";
  computerChooses();
  runHandAnimations();
}

function klikScissors() {
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerChooses();
  runHandAnimations();
}

function computerChooses() {
  cleanUp();
  console.log("COMPUTER CHOOSES user choice:", userChoice);
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    compChoice = "rock";
  } else if (randomNumber === 1) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  console.log("user choice", userChoice);
  console.log("comp choice", compChoice);
  determinWinner();
}

function determinWinner() {
  if (userChoice === compChoice) {
    winner = "none";
  } else if (userChoice === "rock") {
    if (compChoice === "paper") {
      winner = "comp";
    } else if (compChoice === "scissors") {
      winner = "user";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      winner = "comp";
    }
  } else {
    if (compChoice === "rock") {
      winner = "comp";
    } else if (compChoice === "paper") {
      winner = "user";
    }
  }
  console.log("the WINNER IS: ", winner);
}

function runHandAnimations() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", handAnimationEnd);
  player2.addEventListener("animationend", handAnimationEnd);
}

function handAnimationEnd() {
  //   console.log("HAND END");
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  if (compChoice === "rock") {
    player2.classList.add("animation_rock");
  } else if (compChoice === "paper") {
    player2.classList.add("animation_paper");
  } else if (compChoice === "scissors") {
    player2.classList.add("animation_scissors");
  }
  if (userChoice === "rock") {
    player1.classList.add("animation_rock");
  } else if (userChoice === "paper") {
    player1.classList.add("animation_paper");
  } else if (userChoice === "scissors") {
    player1.classList.add("animation_scissors");
  }
  showWinnerScreen();
}

function showWinnerScreen() {
  if (winner === "none") {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (winner === "user") {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}

function cleanUp() {
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}
