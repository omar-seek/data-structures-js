const LinkedList = require("./linked-list");

// singly linked list implementation of a stack
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());

console.log(stack.peek());
stack.print();

stack.pop();
console.log(stack.peek());
stack.print();
