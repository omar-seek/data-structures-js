/**
 * All applications of both stacks and queues can be implemented with a linked list.
 * Image viewers, music players.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// singly linked list
class LinkedList {
  constructor() {
    // head will be the entry point to the linked list
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1) add new node to the beginning of the list
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
      ++this.size;
      return;
    }

    node.next = this.head;
    this.head = node;
    ++this.size;
  }

  // O(1) add new node to the end of the list
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
      ++this.size;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    ++this.size;
  }

  // insert a new node at a specific index
  insert(value, index) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    ++this.size;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;

    const removedNode = this.head;
    this.head = this.head.next;
    --this.size;
    return removedNode.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    const removedNode = this.tail;

    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      --this.size;
      return removedNode.value;
    }

    let prev = this.head;
    for (let i = 0; i < this.size - 2; i++) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    --this.size;
    return removedNode.value;
  }

  // O(n) - remove a node at a specific index
  removeFrom(index) {
    if (index < 0 || index >= this.size || this.isEmpty()) return null;

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      --this.size;
      return removedNode.value;
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
    --this.size;
    return removedNode.value;
  }

  // O(n) - remove a node with a specific value
  removeValue(value) {
    if (this.isEmpty()) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      --this.size;
      return value;
    }

    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }

    if (!prev.next) return null; // value not found

    const removedNode = prev.next;
    prev.next = removedNode.next;
    --this.size;
    return removedNode.value;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  search(value) {
    if (this.isEmpty()) return -1;
    let curr = this.head;

    const size = this.getSize();

    for (let i = 0; i < size; i++) {
      if (curr.value === value) return i;
      curr = curr.next;
    }

    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} -> `;
      curr = curr.next;
    }
    console.log(`${listValues}null`);
  }
}

module.exports = LinkedList;

// const linkedList = new LinkedList();
// console.log("is List empty? ", linkedList.isEmpty()); // true
// console.log("List size: ", linkedList.getSize()); // 0
// linkedList.prepend(101);
// linkedList.append(201);
// linkedList.append(301);
// linkedList.prepend(401);
// linkedList.print();
// linkedList.insert(10, 0);
// linkedList.print();

// linkedList.insert(20, 0);
// linkedList.print();

// linkedList.insert(30, 1);
// linkedList.print();

// linkedList.insert(40, 2);
// linkedList.print();

// console.log("List size: ", linkedList.getSize()); // 4
// console.log("Search 30: ", linkedList.search(30)); // 0

// linkedList.insert(50, 4);
// linkedList.print();

// linkedList.reverse();
// linkedList.print();

// console.log(linkedList.removeFromFront());
// linkedList.print();

// console.log(linkedList.removeFromEnd());
// linkedList.print();

// console.log(linkedList.removeFrom(10)); // null
// console.log(linkedList.removeFrom(1)); // 30
// linkedList.print();
// console.log(linkedList.removeFrom(0));
// console.log(linkedList.getSize()); // 3
// linkedList.print();

// console.log(linkedList.removeValue(10)); // 10
// linkedList.print();

// console.log(linkedList.removeValue(40)); // 40
// linkedList.print();

// console.log(linkedList.removeValue(55)); // null
// linkedList.print();
