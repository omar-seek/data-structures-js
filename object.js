const obj = {
  name: "Omar",
  age: 25,
  "key-three": true,
};
obj.hobbies = "Reading"; // O(1)

console.log(obj.name); // Omar - O(1)
console.log(obj["age"]); // 25 - O(1)
console.log(obj["key-three"]); // true - O(1)
console.log(obj); // { name: 'Omar', age: 25, 'key-three': true, hobbies: 'Reading' } - O(1)
delete obj.hobbies; // O(1)
console.log(obj); // { name: 'Omar', age: 25, 'key-three': true } - O(1)

obj.sayMayName = () => {
  console.log(obj.name);
};

obj.sayMayName(); // Omar - O(1)

// Object - Big-O time complexity
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
