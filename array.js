const arr = [1, 2, 3, "Omar"];
// methods
arr.push(4); // [1, 2, 3, "Omar", 4] - O(1)
arr.unshift(0); // [0, 1, 2, 3, "Omar", 4] - O(n)
arr.pop(); // [0, 1, 2, 3, "Omar"] - O(1)
arr.shift(); // [1, 2, 3, "Omar"] - O(n)
arr[0]; // 1 - Access an element O(1)
for (const item of arr) {
  console.log(item);
}

// map, filter, reduce, concat, slice and splice
// Insert / remove from end - O(1)
// Insert / remove from beginning - O(n)
// Search - O(n)
// Access - O(1)
// push, pop - O(1)
// shift, unshift, concat, slice, splice - O(n)
// forEach, map, filter, reduce - O(n)
