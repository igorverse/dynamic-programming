/**
 * Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array
 * of numbers as arguments.
 * 
 * The function should return an array containing the shortest combination of numbers
 * that add up to exactly the targetSum
 * 
 * If there is a tie for the shortest combination, you may return any one of the 
 * shortest
 * 
 * eg.: bestSum(7, [5, 3, 4, 7])
 * [3, 4]
 * [7] should be chosen
 */

// T: O(n^m * m) and S: O(m^2)
function _bestSum(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (const number of numbers) {
    const remainder = targetSum - number
    const remainderCombination = bestSum(remainder, numbers)

    if (remainderCombination) {
      const combination = [...remainderCombination, number ]

      if (!shortestCombination || combination.length < shortestCombination.length) shortestCombination = combination
    }
  }

  return shortestCombination
}

// T: O(m^2 * n)
function bestSum(targetSum, numbers, memoization = {}) {
  if (targetSum in memoization) return memoization[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (const number of numbers) {
    const remainder = targetSum - number
    const remainderCombination = bestSum(remainder, numbers, memoization)

    if (remainderCombination) {
      const combination = [...remainderCombination, number ]

      if (!shortestCombination || combination.length < shortestCombination.length) shortestCombination = combination
    }
  }

  memoization[targetSum] = shortestCombination

  return shortestCombination
}


console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))