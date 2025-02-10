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

// let locale = "da";

// document.querySelector("#select").addEventListener("change", languageChange);

// function languageChange(evt) {
//   locale = document.querySelector("#select").value;
//   console.log("texts", texts[locale].texts);
//   texts[locale].texts.forEach((element) => {
//     document.querySelector(element.location).textContent = element.text;
//   });
// }

document.querySelector(".danish").addEventListener("click", showDanish);

function showDanish() {
  texts.da.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

document.querySelector(".german").addEventListener("click", showGerman);

function showGerman() {
  texts.de.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}
