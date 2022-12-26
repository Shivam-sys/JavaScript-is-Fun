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
  findMid() {
    if (!this.head) {
      return null;
    }
    let fastPointer = this.head;
    let slowPointer = this.head;
    while (fastPointer && fastPointer.next) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer;
  }
}

list = new SinglyLinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);

console.log(list.findMid().value);
