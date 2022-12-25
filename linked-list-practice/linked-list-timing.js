const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const pushInFront = (ll, n) => {
  for (let i = 1; i <= n; i++) ll.addToHead(i);
};

const pushInRear = (ll, n) => {
  for (let i = 1; i <= n; i++) ll.addToTail(i);
};

const getRunTime = (cb, ll, n) => {
  startTimeBack = Date.now();
  cb(ll, n);
  endTimeBack = Date.now();
  return endTimeBack - startTimeBack;
};

const LL = new LinkedList();
const DLL = new DoublyLinkedList();
const n = 10000;

console.log(
  `Singly LL pushInFront(${n}): ${getRunTime(pushInFront, LL, n)} ms`
);
console.log(`Singly LL pushInRear(${n}): ${getRunTime(pushInRear, LL, n)} ms`);
console.log(
  `Doubly LL pushInFront(${n}): ${getRunTime(pushInFront, DLL, n)} ms`
);
console.log(`Doubly LL pushInRear(${n}): ${getRunTime(pushInRear, DLL, n)} ms`);

// Outputs
// Singly LL pushInFront(100000): 13 ms
// Singly LL pushInRear(100000): 49179 ms
// Doubly LL pushInFront(100000): 21 ms
// Doubly LL pushInRear(100000): 16 ms

// Conclusion
//- Singly LL pushInFront - O(1);
//- Singly LL pushInRear - O(n);
//- Doubly LL pushInFront - O(1);
//- Doubly LL pushInRear - O(1);

/**
 * If possible go for singly inserted at front.
 * If insertion at rear is required, go for doubly linked list
 * (or maintain tail pointer with singlyLL, but removal from tail will still require O(n),
 * which contradicts the pupose. )
 */
