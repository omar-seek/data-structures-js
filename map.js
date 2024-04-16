const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3); // to add a new key-value pair
console.log(map.has("c")); // true
map.delete("c"); // to remove a key-value pair
console.log(map.has("c")); // false
console.log(map.size); // 2
for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}

map.clear(); // to remove all key-value pairs
console.log(map.size); // 0
