function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  // While high and low indices do not overlap...
  // Find the midpoint between high and low indices
  // Compare the target value to the midpoint value
  // If the target equals the midpoint...
  // Return the midpoint index
  // If the target is higher than the midpoint...
  // Move the low pointer to midpoint + 1
  // If the target is less than the midpoint...
  // Move the high pointer to midpoint - 1
  // Return -1 if the loop exits with overlapping pointers
  let high = arr.length - 1;
  let low = 0;
  while (high > low) {
    //Math.floor is increasing time
    // mid = Math.floor(high + low / 2);
    // so used right shift, which basically removes the one last digit of operand's binary.
    // which eventually halfs the number, floors the half of odd.
    let mid = (high + low - 1) >> 1;
    if (arr[mid] > target) high = mid;
    else if (arr[mid] < target) low = mid + 1;
    else return mid;
  }
  return -1;
}

module.exports = [linearSearch, binarySearch];
