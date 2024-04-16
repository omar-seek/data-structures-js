/**
 * the size of the queue is fixed
 * and once the queue is full,
 * we can't insert more elements into the queue.
 * */

/**
 * the first element is connected to the last element.
 * */

/**
 * Example stage:
 * - Clock
 * - Streaming data act as a buffer
 * - Traffic lights
 * */

// enqueue, dequeue, peek, isEmpty, isFull, size, print
class CircularQueueWithObjects {
  constructor(size) {
    this.items = {};
    this.size = size;
    this.front = 0;
    this.rear = 0;
  }
  isFull() {
    return this.rear - this.front === this.size;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  enqueue(element) {
    if (this.isFull()) return null;
    this.items[this.rear % this.size] = element;
    ++this.rear;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front % this.size];
    delete this.items[this.front % this.size];
    ++this.front;
    return item;
  }
  peek() {
    return this.items[this.front % this.size];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      ++this.currentLength;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    --this.currentLength;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }

    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull());
queue.print();
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
