// Generate a Random Number
let y = Math.floor(Math.random() * 10 + 1);

// Counting the number of guesses
// made for correct Guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {
  // Number guessed by user
  let x = document.getElementById("guessField").value;

  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (x > y) {
    /* If guessed number is greater than actual number*/
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};
