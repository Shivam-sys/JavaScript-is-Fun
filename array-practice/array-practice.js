const findMinimum = (arr) => {
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < minimum ? (minimum = arr[i]) : null;
  }
  return minimum;
};

const runningSum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i == 0 ? arr[i] : arr[i] + arr[i - 1];
  }
  return arr;
};

const evenNumOfChars = (arr) => {
  let count = 0;
  arr.forEach((str) => {
    if (str.length % 2 == 0) {
      count += 1;
    }
  });
  return count;
};

const smallerThanCurr = (arr) => {
  return arr.map((n) => {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < n) {
        count += 1;
      }
    }
    return count;
  });
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }
  max = arr[arr.length - 1];
  secondMax = arr[arr.length - 2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};

const shuffle = (arr) => {
  arr2 = [...arr];
  arr2.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return arr2;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
