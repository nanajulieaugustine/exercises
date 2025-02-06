"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

document.querySelector(".danish").addEventListener("click", showDanish);

function showDanish() {
  document.querySelector("p").textContent = `${locale}`;
  console.log("hej", locale);
}

document.querySelector(".german").addEventListener("click", showGerman);

function showGerman() {
  document.querySelector("p").textContent = `${locale}`;
  console.log("hej", locale);
}
