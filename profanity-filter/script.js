const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", () => {
  let paragraph = document.querySelector("p");
  let text = paragraph.textContent;

  curseWords.forEach(({ bad, good }) => {
    text = text.replaceAll(bad, good);
  });

  paragraph.textContent = text;
});
