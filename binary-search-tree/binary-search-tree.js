// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insertNode(newNode, currentNode) {
    if (newNode.val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else this._insertNode(newNode, currentNode.left);
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else this._insertNode(newNode, currentNode.right);
    }
  }

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this._insertNode(newNode, currentNode);
    }
  }

  //Comment the line below incase of Iterative.
  search(val, currentNode = this.root) {
    //Uncomment the line below incase of Iterative.
    // search(val) {
    // * Recursive Approach to find an element in BST
    if (!currentNode) return false;
    else if (val < currentNode.val) return this.search(val, currentNode.left);
    else if (val > currentNode.val) return this.search(val, currentNode.right);
    else return true;
    // // *Iterative Approach to find an element in BST
    // let currentNode = this.root;
    // while (currentNode) {
    //   if (val < currentNode.val) currentNode = currentNode.left;
    //   else if (val > currentNode.val) currentNode = currentNode.right;
    //   else return true;
    // }
    // return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) {
      return;
    }
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) {
      return;
    }
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) {
      return;
    }
    this.postOrderTraversal(currentNode?.left);
    this.postOrderTraversal(currentNode?.right);
    console.log(currentNode?.val);
  }

  //* Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // * Using Queue
    let currentNode = this.root;
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      let node = queue.shift();
      console.table(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  //* Depth First Traversal - Iterative
  depthFirstTraversal() {
    let currentNode = this.root;
    let stack = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
