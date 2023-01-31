const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

secretNumber = randomInRange(10, 20);

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("TOO HIGH");
    return false;
  }
  if (num < secretNumber) {
    console.log("too low");
    return false;
  }
  return true;
}

let maxnumOfTries = 5;

function askGuess() {
  rl.question("Please enter a secret number: ", (n) => {
    if (--maxnumOfTries)
      if (!checkGuess(n)) {
        askGuess();
      } else {
        console.log("Correct!");
        rl.close();
      }
    else {
      console.log("Too many tries");
      rl.close();
    }
  });
}
askGuess();

// checkGuess(13);
// checkGuess(11);
// if (checkGuess(12)) {
//   console.log("PASS");
// }
