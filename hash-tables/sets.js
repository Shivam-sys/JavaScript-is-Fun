let n = 100000;

// Fill an array with integers
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(i);
}

// Fill a set with integers
const set = new Set(arr);

// Search the array for integers, half of which are included
startTimeArray = Date.now();
for (let i = 0; i < 2 * n; i++) {
  arr.includes(i);
}
endTimeArray = Date.now();

// Search the set for integers, half of which are included
startTimeSet = Date.now();
for (let i = 0; i < 2 * n; i++) {
  set.has(i);
}
endTimeSet = Date.now();

console.log(`Array: ${endTimeArray - startTimeArray}ms`);
console.log(`Set: ${endTimeSet - startTimeSet}ms`);
