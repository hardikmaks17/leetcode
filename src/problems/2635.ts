/**
 * Problem: 2635. Apply Transform Over Each Element in Array
 * @see {@link https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/}
 */

// Solution

export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const result = arr;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return result;
}

const arr = [1, 2, 3];
const fn = function plusone(n: number) {
  return n + 1;
};

const result_2635 = map(arr, fn);
// console.log("🚀 ~ result_2635:", result_2635);
