/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal
 * is to travel to the bottom-right corner. You may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions m * n
 * 
 * Write a function *gridTraveler(m, n)* that calculate this.
 * 
 * eg.: gridTraveler(2, 3) should return 3
 * 
 * [
 *  [S, 0, 0],
 *  [0, 0, E]
 * ]
 * 
 * 1. right, right, down
 * 2. right, down, right
 * 3. down, right, right
 * 
 * 3 ways to travel
 */

// classical approach: O(2ˆ(n+m)) time complexity and O(n + m) space complexity
// function gridTraveler(n, m) {
//   if (n === 1 && m === 0) return 1
//   if (n === 0 || m === 0) return 0

//   return gridTraveler(n - 1, m) + gridTraveler(n, m - 1)
// }

// dynamic programming approach: O(n + m) time complexity and O(n + m) space complexity
function gridTraveler(n, m, memoization = {}) {
  const key = m + ',' + n
  if (memoization.hasOwnProperty(key)) return memoization[key]

  if (n === 1 && m === 0) return 1
  if (n === 0 || m === 0) return 0

  memoization[key] = gridTraveler(n - 1, m, memoization) + gridTraveler(n, m - 1, memoization)
  
  return memoization[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))
