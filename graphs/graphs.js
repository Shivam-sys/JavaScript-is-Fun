// Adjcency List
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [6],
};

const adjList2 = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

//* BFS (uses Queue)
function traverseGraphBFS(n) {
  const queue = [];
  queue.push(n);

  const discovered = [];
  discovered[n] = true;

  while (queue.length) {
    node = queue.shift();
    console.log(node);
    for (let i = 0; i < adjList[node].length; i++) {
      if (!discovered[adjList[node][i]]) {
        discovered[adjList[node][i]] = true;
        queue.push(adjList[node][i]);
      }
    }
  }
}

// *DFS (uses stack)
function traverseGraphDFS(node) {
  let stack = [];
  let visited = new Set();
  stack.push(node);
  visited.add(node);
  while (stack.length) {
    let node = stack.pop();
    console.log(node);
    adjList[node]
      .filter((n) => !visited.has(n))
      .forEach((n) => {
        visited.add(n);
        stack.push(n);
      });
  }
  return false;
}

//* DFS (uses recursion)
// !SEEMS SOME PROBLEM
function traverseGraphDFSrecur(node, discovered = []) {
  console.log(node);
  discovered[node] = true;
  for (let i = 0; i < adjList2[node].length; i++) {
    let w = adjList2[node][i];
    if (!discovered[w]) {
      traverseGraphDFS(w, discovered);
    }
  }
}

console.log("*** TraverseGraphBFS(3) ***");
traverseGraphBFS(3);
console.log("*** TraverseGraphDFSrecur(3) ***");
traverseGraphDFSrecur(3);
console.log("*** TraverseGraphDFS(4) ***");
traverseGraphDFS(4);
