const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theSentence = false;

document.querySelector("button").addEventListener("click", goodWords);

function goodWords() {
  if (theSentence === false) {
    let theText = document.querySelector("p").textContent;

    curseWords.forEach((curseWord) => {
      theText = theText.replaceAll(
        curseWord.bad,
        `<span>${curseWord.good}</span>`
      );
    });

    document.querySelector("p").innerHTML = theText;
    theSentence = true;
  } else {
    document.querySelector("dialog").showModal();
  }
}
