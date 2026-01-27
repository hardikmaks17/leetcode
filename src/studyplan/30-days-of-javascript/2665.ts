/**
 * Problem: 2665. Counter II
 * @see {@link https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript}
 */

// Solution

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};
type Call = keyof Counter;

export function createCounterTwo(init: number): Counter {
  let currentCount = init;
  return {
    increment: () => (currentCount = currentCount + 1),
    decrement: () => (currentCount = currentCount - 1),
    reset: () => (currentCount = init),
  };
}

const init = 5;
const calls: Call[] = ["increment", "reset", "decrement"];
const counter = createCounterTwo(init);
const result_2665 = [];

for (let i = 0; i < calls.length; i++) {
  const call = calls[i];
  let counterValue = counter[call]();
  result_2665.push(counterValue);
}

// console.log("🚀 ~ result_2665:", result_2665);
