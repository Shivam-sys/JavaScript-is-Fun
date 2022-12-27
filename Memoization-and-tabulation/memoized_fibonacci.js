const printRunTime = (cb, ...args) => {
  startTimeBack = Date.now();
  cb(...args);
  endTimeBack = Date.now();
  console.log(
    `Runtime of ${cb.name} (${args}) : ${endTimeBack - startTimeBack}`
  );
  // return endTimeBack - startTimeBack;
};

n = 50; //Setting n a higher value(>50) may result in longer runtime, if called without memo/tabulated function.

// !! FACTORIAL
// ! Un-memoized
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

printRunTime(factorial, n);

// !memoized
let memo = {};
const memoFactorial = (n) => {
  if (n in memo) return memo[n];
  if (n === 1) {
    return 1;
  }
  memo[n] = n * factorial(n - 1);
  return memo[n];
};
printRunTime(memoFactorial, n);

// ! Fibbonacci
const fibbonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
};
printRunTime(fibbonacci, n); // with n=50, it takes, 91482 ms

// ! Memoized fibbonacci
const memoFibbonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = memoFibbonacci(n - 1, memo) + memoFibbonacci(n - 2, memo);
  return memo[n];
};
printRunTime(memoFibbonacci, n); // with n=50, it takes 1ms

// !! Tabulation

function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

printRunTime(tabulatedFib, n);
//Refactoring for O(1) Space
function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecentCalcs;
    mostRecentCalcs = [last, secondLast + last];
  }

  return mostRecentCalcs[1];
}

printRunTime(fib, n);
