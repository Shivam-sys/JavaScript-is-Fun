// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:
  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // ! WORKING ONLY IF LAST ELEMENT OF ARR IS LARGEST, and no duplicates present.
  // TODO: Make it work even if last element is not largest, and with duplicates.
  let copyarr = [...arr];
  let sorted = [];
  let insertionPoint = 0;
  while (copyarr.length !== 0) {
    console.log(sorted.join(","));
    let popped = copyarr.pop();
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (popped > sorted[i]) {
        if (i !== sorted.length - 1) {
          insertionPoint = i + 1;
        } else {
          insertionPoint = i;
        }
        break;
      }
    }
    sorted.splice(insertionPoint, 0, popped);
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:
  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
