/*

1. Write a function nthFibonacci(n) that takes in a number as an argument. The function should
return the n-th number of the Fibonacci sequence.

n = 1, 2, 3, 4, 5, 6, 7, 8, ...
fib(n) = 0, 1, 1, 1, 2, 3, 5, 8, 13, 21, ...

fib(1) = 0
fib(2) = 1
fib(3) = 1
...
fib(6) = 5

*/

// classical approach: O(2ˆn) time complexity and O(n) space complexity

function nthFibonacci(n) {
  if (n <= 1) return 0
  if (n === 2) return 1

  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

// dynamic program approach: O(n) time complexity and O(n) space complexity
// memoization can be seen as a cache

function nthFibonacci(n, memoization = {1: 0, 2: 1}) {
  if (memoization.hasOwnProperty(n)) return memoization[n]

  memoization[n] = nthFibonacci(n - 1, memoization) + nthFibonacci(n - 2, memoization)

  return memoization[n]
}

console.log(nthFibonacci(1))
console.log(nthFibonacci(3))
console.log(nthFibonacci(6))
console.log(nthFibonacci(7))
console.log(nthFibonacci(8))
console.log(nthFibonacci(58))