/**
 * Problem: 1480. Running Sum of 1d Array
 * @see {@link https://leetcode.com/problems/running-sum-of-1d-array/description/}
 */

// Solution

function runningSum(nums: number[]): number[] {
  let result = [];
  result[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }
  return result;
}

const nums = [1, 2, 3, 4];
const result_1480 = runningSum(nums);
// console.log("🚀 ~ result_1480:", result_1480);
