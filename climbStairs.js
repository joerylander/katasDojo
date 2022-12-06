// Hint: Fibonacci sequence
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// @param {number} n
// @return {number}
const climbStairs = (n) => {
  let n1 = 1;
  let n2 = 2;
  let n3 = 0;
  let count = 3;
  if (n === 1) {
    return n1;
  }
  if (n === 2) {
    return n2;
  }
  while (count <= n) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    count++;
  }
  return n3;
};
console.log(climbStairs(19));
