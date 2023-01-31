// Syntax: new Error([message,[, filename,[, lineNumber]]])

const first = Error("I am error 1");
const second = new Error("I, too, am Error");

// console.log(first); // Error: I am Error
// console.log(second); // Error: I, too, am Error

function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}

console.log(giveMeNumber(1)); // prints "yay number!";
// console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
// console.log(giveMeNumber(1)); // doesn't get run

function trySafeDivide(n) {
  try {
    console.log(safeDivide(30, n));
  } catch (error) {
    console.error(error.name + ": " + error.message); // Error: cannot divide by zero
    return;
  } finally {
    console.log("This will always run");
  }
}

trySafeDivide(1);
trySafeDivide(0);
