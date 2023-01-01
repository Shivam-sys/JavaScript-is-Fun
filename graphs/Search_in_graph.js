// *This programs search if there is path from start to end node.

adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

// Basically searches if there is a path from start to end.
const searchBFS = (start, end) => {
  const queue = [];
  queue.push(start);

  const discovered = [];
  discovered[start] = true;

  while (queue.length) {
    node = queue.shift();
    if (node == end) {
      return true;
    }
    for (let i = 0; i < adjList[node].length; i++) {
      if (!discovered[adjList[node][i]]) {
        discovered[adjList[node][i]] = true;
        queue.push(adjList[node][i]);
      }
    }
  }
  return false;
};

console.log(searchBFS(5, 3)); //true
console.log(searchBFS(3, 6)); //false

const searchDFS = (start, end) => {
  let stack = [];
  let visited = new Set();
  stack.push(start);
  visited.add(start);
  while (stack.length) {
    let node = stack.pop();
    if (node === end) {
      return true;
    }
    adjList[node]
      .filter((n) => !visited.has(n))
      .forEach((n) => {
        visited.add(n);
        stack.push(n);
      });
  }
  return false;
};

console.log(searchDFS(5, 3)); //true
console.log(searchDFS(3, 6)); //false
