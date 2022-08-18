/**
 * Write a function *canSum(targetSum, numbers)* that takes in a targetSum and an array
 * of numbers as argumentss
 * 
 * The function should return a boolean indicating wheter or not it is possible to
 * generate the targetSum using numbers from the array.
 * 
 * You may use an element of the array as many times as needed
 * 
 * You may assume that all input numbers are non-negative
 * 
 * eg.: canSum(7, [5, 3, 4, 7]) -> true
 */

// brute-force approach: O(nˆm) time complexity and O(m) space complexity
// function canSum(targetSum, numbers) {
//   if (targetSum === 0) return true
//   if (targetSum < 0) return false

//   for (const number of numbers) {
//     const remainder = targetSum - number
//     if (canSum(remainder, numbers)) return true
//   }

//   return false
// }

// Dynamic programming approach: O(n*m) time complexity and O(m) space complexity
// where m is the target sum and n is the array length
function canSum(targetSum, numbers, memoization = {}) {
  if (memoization.hasOwnProperty(targetSum)) return memoization[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (const number of numbers) {
    const remainder = targetSum - number
    if (canSum(remainder, numbers, memoization)){
      memoization[targetSum] = true
      return true
    }
  }

  memoization[targetSum] = false
  return false
}

console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(300, [7, 14])) // false