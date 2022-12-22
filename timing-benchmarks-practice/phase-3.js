const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increament) {
  let Arr = [];
  console.time("addNums10");
  for (let i = 1; i <= 10; i++) {
    Arr.push(addNums(increament * i));
    console.timeLog("addNums10");
    console.log(Date.now());
  }
  console.timeEnd("addNums10");
}

function addManyNums10Timing(increament) {
  let Arr = [];
  console.time("addManyNums10");
  for (let i = 1; i <= 10; i++) {
    Arr.push(addManyNums(increament * i));
    console.timeLog("addManyNums10");
    console.log(Date.now());
  }
  console.timeEnd("addManyNums10");
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
