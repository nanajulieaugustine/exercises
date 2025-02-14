const btn = document.querySelector("button");
const anim = btn.animate([{ backgroundSize: 0 }, { backgroundSize: "100%" }], {
  duration: 10000,
  iterations: 1,
  easing: "linear",
});

let isMoving = false;
let isClicked = false;

activateButtonAni(document.querySelector("#ze_button"));

function activateButtonAni(btn) {
  btn.addEventListener("mouseover", overEvent);

  anim.addEventListener("finish", finishEvent);

  function overEvent() {
    anim.playbackRate = 6;
    e.target.removeEventListener("mouseover", overEvent);
  }
}

document.querySelector("button").addEventListener("click", clickOnButton);

function clickOnButton() {
  anim.playbackRate = 15;
  btn.classList.add("clicked");
  finishEvent();
}

// document.querySelector("body").addEventListener("mousemove", moveCursor);

// function moveCursor() {
//   let stopTimeout;
//   clearTimeout(stopTimeout);

//   isMoving = true;
//   if (isMoving === true) {
//     stopTimeout = setTimeout(anim.cancel.bind(anim), 900);
//   } else if (isMoving !== true) {
//     activateButtonAni(btn);
//     finishEvent(btn);
//   }
// }

function finishEvent(e) {
  console.log("FINISH", e.target.effect.target);

  e.target.effect.target.style.opacity = 0.5;
  document.querySelector("body").style.backgroundColor = "black";
  btn.style.display = "none";
}

document.querySelector("body").addEventListener("mouseover", moveCursor);
