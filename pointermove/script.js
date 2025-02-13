document.addEventListener("mousemove", changeColor);

function changeColor() {
  console.log("musover");
  let percentageChange = (event.clientX / window.innerWidth) * 100;

  document.body.style.setProperty(
    "background",
    `hsl(${percentageChange * 1.5}, 100%, 90%)`
  );
}
