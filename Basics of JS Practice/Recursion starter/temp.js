function range(start, end, arr = []) {
  arr.push(start);
  if (start == end - 1) {
    return arr;
  }
  if (start > end) {
    return null;
  }
  return range(start + 1, end, arr.push(start));
}

console.log(range(1, 5));
