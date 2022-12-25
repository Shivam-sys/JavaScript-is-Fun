const queueWithArray = require("./queue-using-array");
const queueWithLL = require("./queue-using-LL");

let n = 100000;
let q = new queueWithArray();
enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();
console.log("*****Queue Using Array*********");
console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);

q = new queueWithLL();
enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();
console.log("*****Queue Using Linked List*********");
console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
