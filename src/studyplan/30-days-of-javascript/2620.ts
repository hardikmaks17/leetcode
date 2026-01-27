/**
 * Problem: 2620. Counter
 * @see {@link https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript}
 */

// Solution

export function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}

const n = 16;
const callCount = 2;
const counter = createCounter(n);
const result_2620 = [];

for (let i = 0; i < callCount; i++) {
  result_2620.push(counter());
}

// console.log("🚀 ~ result_2620:", result_2620);
