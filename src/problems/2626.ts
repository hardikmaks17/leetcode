/**
 * Problem: 2626. Array Reduce Transformation
 * @see {@link https://leetcode.com/problems/array-reduce-transformation/description/}
 */

// Solution

type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(i === 0 ? init : result, nums[i]);
  }
  return result;
}

const nums = [1, 2, 3, 4];
const fn: Fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

export const result_2626 = reduce(nums, fn, init);
// console.log("🚀 ~ result_2626:", result_2626);
