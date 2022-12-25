class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }
  enqueue(item) {
    this.queue.push(item);
    this.length++;
  }
  dequeue() {
    this.length--;
    return this.queue.shift();
  }
}

module.exports = Queue;
