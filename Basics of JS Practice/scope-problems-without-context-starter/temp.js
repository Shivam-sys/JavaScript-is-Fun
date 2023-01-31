// var zoo = "panda";

// if (true) {
//   console.log(zoo);
//   let zoo = "lion";
// }

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);

// console.log(makeAdder(5)(2));

// function createCounter(n) {
//   if (n == 0) {
//     return "Happy New Year!";
//   }
//   return function () {
//     if (n == 1) {
//       return "Happy New Year!";
//     }
//     return --n;
//   };
// }

// let counter = createCounter(1);
// console.log(counter()); // => 1
// console.log(createCounter(0));
// console.log(counter()); // => 2
// console.log(counter()); // => 2

// console.log(counter()); // => 3
// console.log(counter()); // => 4
// console.log(counter()); // => 5

// 11: Lazy adder - solved using Currying

// const lazyAdder = (n) => {
//   return function (a) {
//     return function (b) {
//       return n + a + b;
//     };
//   };
// };

// let firstAdd = lazyAdder(1);
// let secondAdd = firstAdd(2);
// console.log(secondAdd(3));
// let sum = secondAdd(3);
// console.log(sum); // prints 6

// 14: Smoothie machine
// function smoothieMachine(...args) {
//   return function (...argss) {
//     let str = "I'm having a smoothie with ";
//     let str2 = "";
//     args = args.concat(argss);
//     args.forEach((e, i) => {
//       str2 += i === 0 ? `${e}` : ` and ${e}`;
//     });
//     return str + str2;
//   };
// }
// let smoothie1 = smoothieMachine();
// console.log(smoothie1("milk"));
// console.log(smoothie1("kale", "spinach"));

// 19 : Coin Collector
function coinCollector(numCoins) {
  let coins = [];
  return function _coinCollector(coin) {
    if (coins.length < numCoins) {
      coins.push(coin);
      return coins.length == numCoins ? coins : _coinCollector;
    }
    return coins;
  };
}
let twoCoins = coinCollector(3);
console.log(twoCoins(25)); //returns _coinCollector
console.log(twoCoins(2)); //returns _coinCollector
console.log(twoCoins(3)); //returns [25,2,3]
console.log(twoCoins(3)); //returns [25,2,3]
