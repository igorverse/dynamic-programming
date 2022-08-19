/**
 * Write a function *houSum(targetSum, number)* that takes in a targetSum and an array of numbers
 * as arguments.
 * 
 * The function should return an array containing any combination of elements
 * that add up to exactly the targetSum. If there is no combination that
 * adds up to the targetSum, then return null
 * 
 * If there are multiple combinations possible, you may return any single one
 * 
 * eg.:
 * 
 * howSum(7, [5, 3, 4, 7]) -> [3, 4]
 * howSum(7, [5, 3, 4, 7]) -> 7
 * 
 * howSum(7, [3, 5]) -> null
 * howSum(0, [3, 5]) -> []
 */

// m = target number and n = numbers.length
// brute-force approach: O(nˆm * m) time complexity and O(m) space complexity
function _howSum(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let number of numbers) {
    const remainder = targetSum - number
    const remainderResult = howSum(remainder, numbers)

    if (remainderResult) return [...remainderResult, number] // O(m)
  }

  return null
}

// dynamic programming solution:
// m = target number and m = numbers.length
// O(n * mˆ2) time complexity and O(mˆ2) space complexity 
function howSum(targetSum, numbers, memoization = {}) {
  if (memoization.hasOwnProperty(targetSum)) return memoization[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let number of numbers) {
    const remainder = targetSum - number
    const remainderResult = howSum(remainder, numbers, memoization)

    if (remainderResult) {
      memoization[targetSum] = [...remainderResult, number]

      return memoization[targetSum]
    }
  }

  memoization[targetSum] = null

  return null
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null
