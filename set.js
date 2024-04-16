/**
 * Set vs Array
 * - A
 */
const set = new Set([1, 2, 3, 4, 6, 6, 6, 6, 6, "omar"]);
console.log(set); // { 1, 2, 3, 4, 6, 'omar' }

set.add(5);
console.log(set.has(5)); // true

for (const item of set) {
  console.log(item);
  /**
   * 1
   * 2
   * 3
   * 4
   * 6
   * "omar"
   * 5
   */
}
set.delete(5);

console.log(set); // Set(6) { 1, 2, 3, 4, 6, 'omar' }

console.log(set.size); // 5
set.clear();
console.log(set); // Set(0) {}
