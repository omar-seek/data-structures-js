const LinkedList = require("./linked-list");

// singly linked list implementation of a queue
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.getSize());
console.log(queue.peek());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
