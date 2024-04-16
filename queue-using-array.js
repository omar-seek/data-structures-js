// (FIFO) First In First Out
// - The first element added to the queue will be the first element removed from the queue
// - Enqueue, to insert an element into the queue
// Dequeue to remove an element from the front of the queue
// - Queue Usage.
//   - Printer queue
//   - Callback queue in JavaScript runtime like `setTimeout`, `setInterval`, etc.

// Queue implementation using an array
// Enqueue, Dequeue, peek, isEmpty, size, print
class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift(); // O(n) - not good
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
