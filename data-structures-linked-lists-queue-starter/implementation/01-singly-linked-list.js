// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    let node = new SinglyLinkedNode(val);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity should be O(1) here.
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;

    return this;
  }

  removeFromHead() {
    if (!this.head) {
      return;
    }
    let ret = this.head;
    this.head = this.head.next;
    this.length--;
    return ret;
  }

  removeFromTail() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      let ret = this.head;
      this.head = null;
      this.length--;
      return ret;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    let ret = curr.next;
    curr.next = null;
    this.length--;
    return ret;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) {
      return;
    }
    return this.head.value;
    // Time complexity seems O(1).
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr) {
      // process.stdout.write(`${curr.value} -> `);
      console.log(curr.value);
      curr = curr.next;
    }
    // process.stdout.write("NULL");
    // Time complexity seems O(n), each item is iterated once.
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
