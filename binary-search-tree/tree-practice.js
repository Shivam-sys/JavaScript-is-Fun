const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");

// Practice problems on binary trees

function findMinBST(rootNode) {
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val;
}

function findMaxBST(rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;
  let stack = [];
  stack.push(rootNode);
  while (stack.length) {
    let node = stack.pop();
    if (node.val < min) min = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min;
}

function findMaxBT(rootNode) {
  let max = rootNode.val;
  let stack = [];
  stack.push(rootNode);
  while (stack.length) {
    let node = stack.pop();
    if (node.val > max) max = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) {
    return -1;
  }
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}

function countNodes(rootNode) {
  let count = 0;
  let queue = [];
  queue.push(rootNode);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return count;
}

function balancedTree(rootNode) {
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  if (Math.abs(leftHeight - rightHeight) <= 1) return true;
  return false;
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) {
    return null;
  }
  let queue = [];
  queue.push(rootNode);
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      if (node.left.val === target) return node;
      queue.push(node.left);
    }
    if (node.right) {
      if (node.right.val === target) return node;
      queue.push(node.right);
    }
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // TODO
}

function deleteNodeBST(rootNode, target) {
  // TODO
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
