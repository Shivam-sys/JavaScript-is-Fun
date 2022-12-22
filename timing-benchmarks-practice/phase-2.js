const [addNums, addManyNums] = require("./phase-1");

// !Try using closure - going infinite loop
// function addNumTimes(times) {
//   return function addNums(increament) {
//     let Arr = [];
//     for (let i = 1; i <= times; i++) {
//       Arr.push(addNums(increament * i));
//     }
//     return Arr;
//   };
// }
// const addNums10 = addNumTimes(10);

// Runs `addNums` in 10 increasing increments
function addNums10(increament) {
  let Arr = [];
  for (let i = 1; i <= 10; i++) {
    Arr.push(addNums(increament * i));
  }
  return Arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increament) {
  let Arr = [];
  for (let i = 1; i <= 10; i++) {
    Arr.push(addManyNums(increament * i));
  }
  return Arr;
}

module.exports = [addNums10, addManyNums10];
