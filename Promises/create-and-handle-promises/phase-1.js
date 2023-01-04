function stretch() {
  const p = new Promise((res, rej) => {
    res(console.log("done stretching"));
  });
  return p;
}

function runOnTreadmill() {
  const p = new Promise((res, rej) => {
    res(console.log("done running on treadmill"));
  });
  return p;
}

function liftWeights() {
  const p = new Promise((res, rej) => {
    res(console.log("done lifting weights"));
  });
  return p;
}

function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
