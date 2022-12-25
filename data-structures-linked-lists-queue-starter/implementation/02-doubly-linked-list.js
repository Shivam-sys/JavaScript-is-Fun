// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;
    // Time complexity - O(1)
  }
  print() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr) {
      process.stdout.write(`${curr.value} -> `);
      console.log(curr.value);
      curr = curr.next;
    }
    process.stdout.write("NULL");
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here
    const newNode = new DoublyLinkedNode(val);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    //Time Complexity - O(1)
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) {
      return;
    }
    let ret = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.length--;
    return ret;
    // TC seems O(1)
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here - O(1)
    if (!this.head) {
      return;
    }
    let ret = this.tail.value;
    if (this.tail.prev) this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
    return ret;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return;
    return this.head.value;
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here
    if (!this.tail) return;
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
