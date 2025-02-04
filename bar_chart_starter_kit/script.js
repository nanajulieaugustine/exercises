const list = document.querySelector("ul");

const barArr = [];

setInterval(generateBars, 1000);

function generateBars() {
  var randomNum = Math.round(Math.random() * 100);
  barArr.push(randomNum);
  console.log("GENERATE BARS", barArr);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (list.children.length >= 20) {
    list.removeChild(list.children[0]);
  }
}
