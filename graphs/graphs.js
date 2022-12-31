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

traverseGraphBFS(3);

//* DFS (uses recursion)
function traverseGraphDFS(node, discovered = []) {
  console.log(node);
  discovered[node] = true;
  for (let i = 0; i < adjList2[node].length; i++) {
    let w = adjList2[node][i];
    if (!discovered[w]) {
      traverseGraphDFS(w, discovered);
    }
  }
}

traverseGraphDFS(3);
