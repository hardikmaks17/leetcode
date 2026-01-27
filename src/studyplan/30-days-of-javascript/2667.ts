/**
 * Problem: 2667. Create Hello World Function
 * @see {@link https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript}
 */

// Solution

export function createHelloWorld() {
  return function (...args: any): string {
    return "Hello World";
  };
}

const fn = createHelloWorld();
const result_2667 = fn();
// console.log("🚀 ~ result_2667:", result_2667);
