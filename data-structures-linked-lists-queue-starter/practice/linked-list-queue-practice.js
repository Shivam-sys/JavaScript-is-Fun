// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    if (!this.head) return 0;
    let curr = this.head;
    let count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return 0;
    let sum = 0;
    let curr = this.head;
    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }
    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here
    return this.sumOfNodes() / this.listLength();
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here O(n)
    let count = 0;
    let curr = this.head;
    while (curr) {
      if (count == n) {
        return curr;
      }
      count++;
      curr = curr.next;
    }
    return null;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here - O(n)

    if (!this.head) {
      return null;
    }
    let len = this.listLength(); //O(n)
    let indexOfMid = Math.floor(len % 2 == 0 ? len / 2 : len / 2 + 1) - 1;
    return this.findNthNode(indexOfMid); // O(n)

    /**
     * Approach using hare and tortoise method O(n)
     * But, this return the higher side of middle element(in case of even nodes).
     * TC - O(n)
     */
    // let fastPointer = this.head;
    // let slowPointer = this.head;
    // while (fastPointer && fastPointer.next) {
    //   fastPointer = fastPointer.next.next;
    //   slowPointer = slowPointer.next;
    // }
    // return slowPointer;
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here = O(n)
    // !This is reverse in Place.
    let curr = this.head;
    let prev = null;
    let temp = curr;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
    return this;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let curr = this.head;
    let prev = null;
    let temp = curr;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
    return this;
  }
}

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
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    let curr = this.head;
    let temp = this.head;
    while (curr) {
      temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;
      this.head = curr;
      curr = temp;
    }
    return this.head;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let curr = this.head;
    let temp = this.head;
    this.tail = this.head;
    while (curr) {
      temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;
      this.head = curr;
      curr = temp;
    }
    return this.head;
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
