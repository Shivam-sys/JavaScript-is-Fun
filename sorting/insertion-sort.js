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

  let copyarr = [...arr];
  let sorted = [];
  console.log(sorted.join(","));
  sorted = [copyarr.pop()];
  while (copyarr.length !== 0) {
    console.log(sorted.join(","));
    popped = copyarr.pop();
    for (i = sorted.length - 1; i >= 0; i--) {
      if (popped > sorted[i]) {
        if (i != sorted.length - 1) {
          var inMiddle = true;
        }
        break;
      } else if (popped < sorted[i]) {
        if (i == 0) {
          break;
        }
        continue;
      }
    }
    if (inMiddle) {
      sorted.splice(i + 1, 0, popped);
    } else sorted.splice(i, 0, popped);
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
