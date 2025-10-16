/**
 * Problem: 2620. Counter
 * @see {@link https://leetcode.com/problems/counter/description/}
 */

// Solution

export function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}

export const counter = createCounter(10);
// counter(); // 10
// counter(); // 11
// counter(); // 12
