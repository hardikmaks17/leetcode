/**
 * Problem: 2634. Filter Elements from Array
 * @see {@link https://leetcode.com/problems/filter-elements-from-array/description/}
 */

// Solution

type Fn = (n: number, i: number) => any;

export function filter(arr: number[], fn: Fn): number[] {
  const filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n: number) {
  return n > 10;
};

const result_2634 = filter(arr, fn);
// console.log("🚀 ~ result_2634:", result_2634);
