const printRuntime = require("../printRuntime");

const logBetween = (lowNum, highNum) => {
  // let arr = new Array(highNum - lowNum); - using this way runtime is high.
  let arr = [];
  for (let i = lowNum; i <= highNum; i++) {
    arr.push(i);
  }
  return arr;
};

printRuntime(logBetween, -99999, 99999);

const logBetweenStepper = (min, max, step) => {
  let arr = [];
  for (let i = min; i <= max; i = i + step) {
    arr.push(i);
  }
  return arr;
};
printRuntime(logBetweenStepper, -99999, 99999, 9);

const printReverse = (min, max) => {
  let arr = [];
  for (let i = max; i >= min; i--) {
    arr.push(i);
  }
  return arr;
};
printRuntime(printReverse, -99999, 99999);

const fizzbuzz = (max) => {
  let arr = [];
  for (let i = 0; i < max; i++) {
    (i % 3 === 0) ^ (i % 5 === 0) ? arr.push(i) : null;
  }
  return arr;
};
printRuntime(fizzbuzz, 20);

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};
printRuntime(isPrime, 20);

const maxValue = (arr) => {
  let max = null;
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};
printRuntime(maxValue, [-4, -10, 0.43]);
